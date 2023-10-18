import ProjectCard from "./projectcard";

const ProjectSection = () => {
  return (
    <section className="flex flex-col justify-between flex-wrap w-full min-h-screen border-2 border-t-0 border-b-0  border-light-text-color bg-light-bg-color dark:border-dark-text-color dark:bg-dark-bg-color">
      <header className="flex flex-col justify-center items-center gap-4 w-full border-light-text-color dark:border-dark-text-color dark:text-dark-text-color p-8">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <p className="text-2xl text-center tracking-wide">

          Click on the images to see the details
        </p>
      </header>
      <section className="flex flex-col grow flex-wrap justify-center items-center w-full gap-16 p-16 md:p-8">
        <div className="flex justify-around gap-16 md:gap-32 flex-wrap w-full">
          <ProjectCard row={2} />
          <ProjectCard row={3} />
        </div>
        <div className="flex justify-around gap-16 md:gap-32 flex-wrap w-full">
          <ProjectCard row={4} />
          <ProjectCard row={5} />
        </div>
      </section>
    </section>
  );
};

export default ProjectSection;
