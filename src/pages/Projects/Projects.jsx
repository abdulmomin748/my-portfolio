import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projectsdata.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log("projects", projects);
  return (
    <>
      <section className="section project-sec" id="projects">
        <div className="container text-center">
          <h2 className="exp-ttle mb-16 text-5xl font-semibold  text-left section-title relative pb-6">
            Projects
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="grid lg:grid-cols-3 md:grid-cols-2  lg:gap-7 md:gap-4 gap-4 pb-10"
          >
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
          <div className="bnr-btn-1 bg-primary rounded-xl inline-block">
            <a
              className="btn-1 rounded-none!"
              type="submit"
              href="https://github.com/abdulmomin748?tab=repositories"
              target="_blank"
            >
              View More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
