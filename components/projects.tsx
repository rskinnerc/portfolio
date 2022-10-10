const Projects = (props: any) => {
  console.log(props.projects);
  
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
      <div className="my-10 flex flex-col gap-4 md:flex-row md:gap-1 md:items-center md:w-10/12 xl:w-8/12 md:mx-auto">
        </div>
    </section>
  );
};

export default Projects;
