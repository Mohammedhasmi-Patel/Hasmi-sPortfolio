import React from "react";
import Section from "../components/UI/Section";
import ProjectCard from "../components/UI/ProjectCard";
import { projects } from "../types";

const Projects: React.FC = () => {
  return (
    <>
      <Section title="My Projects">
        <div className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
          <p>
            Here are some of the key projects I've worked on that showcase my
            skills and expertise as a Full Stack Developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Projects;
