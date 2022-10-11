import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { hideDetails } from "../store/project";
import ProjectCard from "./projectCard";
import { MdDragHandle } from "react-icons/md";
import Image from "next/future/image";
import Link from "next/link";

const Projects = (props: any) => {
  const project = useSelector((state: any) => state.projects.project);
  const showDetails = useSelector((state: any) => state.projects.showDetails);
  const dispatch = useDispatch();

  const detailsClasses = classNames({
    "translate-y-full": !showDetails,
  });

  return (
    <section id="projects" className="py-20">
      <div className="relative h-20 md:mt-6 lg:mt-16 md:w-11/12 xl:w-10/12">
        <h1 className="font-exo text-3xl font-bold absolute top-0.5 right-0 pr-3 tracking-wide z-10 text-sky-600 2xl:right-20">
          Recent Work
        </h1>
        <h2 className="font-exo text-5xl font-bold absolute top-0 right-0 pr-3 tracking-wide text-fuchsia-600/10 z-0 2xl:right-20">
          Recent Work
        </h2>
      </div>
      <div className="my-10 flex flex-col gap-4 md:flex-row md:justify-center md:flex-wrap lg:w-10/12 lg:mx-auto">
        {props.projects.map((project: any) => (
          <ProjectCard key={project._uid} project={project} />
        ))}
      </div>
      <Link href="/work">
        <a className="w-1/2 md:w-5/12 lg:w-1/3 mx-auto block text-center from-fuchsia-900 to-fuchsia-700 hover:from-sky-900 hover:to-sky-700 bg-gradient-to-r shadow-fuchsia-900/50 hover:shadow-sky-900/50 shadow-md hover:shadow-lg p-2 rounded-md text-white font-bold font-exo z-40">
          SEE MORE
        </a>
      </Link>
      <div
        id="project-details"
        onClick={() => dispatch(hideDetails())}
        className={
          "h-72 md:h-68 w-full z-40 fixed bottom-0 text-white from-slate-800 to-slate-600 bg-gradient-to-tr rounded-t-xl shadow-md translate transition-transform p-2 md:p-6 md:w-10/12 lg:w-8/12 md:left-1/2 md:-translate-x-1/2 " +
          detailsClasses
        }
      >
        {project && (
          <>
            <span className="flex justify-center text-xl cursor-pointer">
              <MdDragHandle />
            </span>
            <h3 className="text-fuchsia-600 font-bold font-ibm">
              {project.name}
            </h3>
            <p className="font-ibm tracking-tighter leading-tight">
              {project.description}
            </p>
            <p className="font-ibm tracking-tighter font-bold">Built with:</p>
            <ul className="flex flex-wrap gap-3 justify-center items-center">
              {project.skills.map((skill: any) => (
                <li key={skill._uid} className="font-ibm tracking-tighter">
                  <Image
                    src={skill.icon.filename}
                    width={32}
                    height={32}
                    alt={skill.label}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
