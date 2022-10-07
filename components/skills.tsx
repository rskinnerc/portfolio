import Image from "next/future/image";

const Skills = (props: any) => {
  const frontend = props.skills.filter(
    (skill: any) => skill.category === "frontend"
  );
  const backend = props.skills.filter(
    (skill: any) => skill.category === "backend"
  );
  const soft = props.skills.filter((skill: any) => skill.category === "soft");

  return (
    <section id="skills" className="py-20 bg-sky-50/50">
      <div className="relative h-20 md:mt-6 lg:mt-16 md:w-11/12 xl:w-10/12">
        <h1 className="font-exo text-3xl font-bold absolute top-0.5 right-0 pr-3 tracking-wide z-10 text-sky-600 2xl:right-20">
          My Skills
        </h1>
        <h2 className="font-exo text-5xl font-bold absolute top-0 right-0 pr-3 tracking-wide text-fuchsia-600/10 z-0 2xl:right-20">
          My Skills
        </h2>
      </div>
      <div className="my-10 flex flex-col gap-4 md:flex-row md:gap-1 md:items-center md:w-10/12 xl:w-8/12 md:mx-auto">
        <div className="bg-white rounded-xl shadow py-3 px-4 md:px-2 group md:w-1/3 m-2 shadow-fuchsia-600/10 hover:shadow-md hover:transform hover:scale-105 transition-all">
          <Image
            src="/soft-skills.svg"
            width={88}
            height={88}
            className="drop-shadow-lg mx-auto mt-6"
            alt="Soft-Skills Icon"
          />
          <h3 className="text-fuchsia-600 font-exo font-semibold text-2xl drop-shadow text-center my-6">
            Soft-Skills
          </h3>
          <ul>
            {soft.map((skill: any) => (
              <li
                className="text-slate-600 font-exo font-semibold drop-shadow text-center my-2 flex items-center gap-3"
                key={skill.label}
              >
                <Image
                  src={skill.icon.filename}
                  className="lg:grayscale group-hover:grayscale-0"
                  width={20}
                  height={20}
                  alt={skill.label}
                />{" "}
                {skill.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow py-3 px-4 md:px-2 group md:w-1/3 m-2 shadow-fuchsia-600/10 hover:shadow-md hover:transform hover:scale-105 transition-all">
          <Image
            src="/front-end.svg"
            width={88}
            height={88}
            className="drop-shadow-lg mx-auto mt-6"
            alt="Soft-Skills Icon"
          />

          <h3 className="text-fuchsia-600 font-exo font-semibold text-2xl drop-shadow text-center my-6">
            Front-End
          </h3>
          <ul>
            {frontend.map((skill: any) => (
              <li
                className="text-slate-600 font-exo font-semibold drop-shadow text-center my-2 flex items-center gap-3"
                key={skill.label}
              >
                <Image
                  src={skill.icon.filename}
                  className="lg:grayscale group-hover:grayscale-0"
                  width={20}
                  height={20}
                  alt={skill.label}
                />{" "}
                {skill.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow py-3 px-4 md:px-2 group md:w-1/3 m-2 shadow-fuchsia-600/10 hover:shadow-md hover:transform hover:scale-105 transition-all">
          <Image
            src="/back-end.svg"
            width={88}
            height={88}
            className="drop-shadow-lg mx-auto mt-6"
            alt="Soft-Skills Icon"
          />
          <h3 className="text-fuchsia-600 font-exo font-semibold text-2xl drop-shadow text-center my-6">
            Back-End
          </h3>
          <ul>
            {backend.map((skill: any) => (
              <li
                className="text-slate-600 font-exo font-semibold drop-shadow text-center my-2 flex items-center gap-3"
                key={skill.label}
              >
                <Image
                  src={skill.icon.filename}
                  className="lg:grayscale group-hover:grayscale-0"
                  width={20}
                  height={20}
                  alt={skill.label}
                />{" "}
                {skill.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
