import Image from "next/future/image";
import { useRef } from "react";
import { RiLightbulbFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { showDetails } from "../store/project";

const ProjectCard = (props: any) => {
  const dispatch = useDispatch();

  return (
    <div className="relative aspect-video m-2 rounded-md overflow-y-hidden shadow md:w-8/12 lg:w-5/12">
      <div className="rounded-t-md flex flex-row items-center p-1 gap-1 bg-slate-700">
        <span className="rounded-full h-2 w-2 bg-sky-300 inline-block"></span>
        <span className="rounded-full h-2 w-2 bg-fuchsia-300 inline-block"></span>
        <span className="rounded-full h-2 w-2 bg-slate-300 inline-block"></span>
      </div>
      <Image
        src={props.project.screenshots[0].filename}
        width={700}
        height={394}
        alt={props.project.name}
      />
      <RiLightbulbFill className="absolute bottom-3 right-3 text-fuchsia-200 text-xl animate-ping" />
      <RiLightbulbFill
        className="absolute bottom-3 right-3 text-fuchsia-400 text-xl drop-shadow cursor-pointer"
        onClick={() => dispatch(showDetails(props.project))}
      />
    </div>
  );
};

export default ProjectCard;
