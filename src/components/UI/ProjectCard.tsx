import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Key Features:
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="mb-1">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors duration-200"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 px-4 py-2 rounded-md transition-colors duration-200"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
