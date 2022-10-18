import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { hideDetails } from "../store/project";
import ProjectCard from "./projectCard";
import Image from "next/future/image";
import { IoLogoGithub, IoRocket, IoCaretDown } from "react-icons/io5";
import { useEffect, useState } from "react";

const Projects = (props: any) => {
  const project = useSelector((state: any) => state.projects.project);
  const showDetails = useSelector((state: any) => state.projects.showDetails);
  const [take, setTake] = useState(3);
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProjects(paginateProjects(take));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [take]);

  const paginateProjects = (howMany: number) => {
    return props.projects.slice(0, howMany);
  };

  const handleShowMore = () => {
    setTake(take + 3);
  };

  const detailsClasses = classNames({
    "translate-y-full": !showDetails,
  });

  return (
    <section
      id="projects"
      className="py-20 opacity-10 transition-opacity delay-300"
    >
      <div className="relative h-20 md:mt-6 lg:mt-16 md:w-11/12 xl:w-10/12">
        <h1 className="font-exo text-3xl font-bold absolute top-0.5 right-0 pr-3 tracking-wide z-10 text-sky-600 2xl:right-20">
          Recent Work
        </h1>
        <h2 className="font-exo text-5xl font-bold absolute top-0 right-0 pr-3 tracking-wide text-fuchsia-600/10 z-0 2xl:right-20">
          Recent Work
        </h2>
      </div>
      <div className="my-10 flex flex-col gap-4 md:flex-row md:justify-center md:flex-wrap lg:w-10/12 lg:mx-auto">
        {projects.map((project: any) => (
          <ProjectCard key={project._uid} project={project} />
        ))}
      </div>
      {take < props.projects.length && (
        <button
          type="button"
          onClick={handleShowMore}
          className="w-1/2 md:w-2/6 lg:w-1/6 mx-auto block text-center from-fuchsia-900 to-fuchsia-700 hover:from-sky-900 hover:to-sky-700 bg-gradient-to-r shadow-fuchsia-900/50 hover:shadow-sky-900/50 shadow-md hover:shadow-lg p-2 rounded-md text-white font-bold font-exo z-40"
        >
          SEE MORE
        </button>
      )}
      <div
        id="project-details"
        onClick={() => dispatch(hideDetails())}
        className={
          "w-full z-40 fixed bottom-0 text-white from-slate-800 to-slate-600 bg-gradient-to-tr rounded-t-xl shadow-md translate transition-transform p-2 md:p-6 md:w-10/12 lg:w-8/12 md:left-1/2 md:-translate-x-1/2 " +
          detailsClasses
        }
      >
        {project && (
          <>
            <span className="flex justify-center text-xl cursor-pointer">
              <IoCaretDown className="animate-bounce text-sky-50" />
            </span>
            <h3 className="text-fuchsia-600 font-bold font-ibm flex items-center gap-5 my-3 justify-between">
              {project.name}
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-200 font-exo text-sm cursor-pointer flex flex-col items-center"
                >
                  Live <IoRocket className="text-lg" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-200 font-exo text-sm cursor-pointer flex flex-col items-center"
                >
                  GitHub <IoLogoGithub className="text-lg" />
                </a>
              </div>
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
