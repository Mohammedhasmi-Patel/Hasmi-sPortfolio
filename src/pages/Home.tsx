import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/UI/Section";
import SocialIcons from "../components/UI/SocialIcons";
import ProjectCard from "../components/UI/ProjectCard";
import SkillItem from "../components/UI/SkillItem";
import hasmi from "../assets/hasmi.jpeg";
import { aboutMe, socialLinks, skills } from "../data/portfolio";
import { projects } from "../types";
import About from "./About";

const Home: React.FC = () => {
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const databaseSkills = skills.filter(
    (skill) => skill.category === "database"
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="min-h-[calc(100vh-80px)] flex items-center py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="prose dark:prose-invert max-w-full"
          >
            <h1 className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-2">
              Hello there, I'm
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-primary-600 dark:text-primary-400">
                {aboutMe.name}
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              {aboutMe.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              {aboutMe.bio.split("\n\n")[0]}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-200 font-medium shadow-sm hover:shadow"
              >
                View My Projects
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 text-gray-800 dark:text-gray-200 rounded-md transition-colors duration-200 font-medium"
              >
                Contact Me
              </Link>
            </div>

            {/* <div className="mt-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Connect with me:
              </p>
              <SocialIcons links={socialLinks} />
            </div> */}
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <img
              src={hasmi}
              alt="Profile"
              className="rounded-lg shadow-lg max-w-full h-auto object-cover w-[400px] lg:w-[500px] hidden lg:block"
            />
          </motion.div>
        </div>
      </section>

      <About />

      {/* SKILLS SECTION */}
      <Section title="Skills">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl"
        >
          <p>
            As a Full Stack Developer, I've acquired a diverse set of skills
            across frontend, backend, and database technologies. Here's an
            overview of my technical proficiency:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...frontendSkills, ...backendSkills, ...databaseSkills]
            .slice(0, 6)
            .map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/skills"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-200 font-medium"
          >
            View All Skills
            <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section title="Featured Projects">
        <div className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
          <p>
            Here are some of my recent projects that showcase my expertise in
            full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-200 font-medium"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Home;
