import Image from "next/future/image";
import { useRef } from "react";
import { RiLightbulbFill } from "react-icons/ri";

const ProjectCard = (props: any) => {
  const overlay = useRef<HTMLDivElement>(null);

  return (
    <div className="relative aspect-video m-2 rounded-md overflow-y-hidden shadow">
      <div className="border rounded-t-md flex flex-row items-center p-1 gap-1 bg-slate-100">
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
      <RiLightbulbFill className="absolute bottom-3 right-3 text-fuchsia-400 text-xl drop-shadow" />
    </div>
  );
};

export default ProjectCard;
