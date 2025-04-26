import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import Section from "../components/UI/Section";
import { education, experiences, skills } from "../data/portfolio";

const Resume: React.FC = () => {
  const resumePdfUrl = "#"; // Replace with actual PDF URL

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const databaseSkills = skills.filter((s) => s.category === "database");
  const otherSkills = skills.filter((s) => s.category === "other");

  return (
    <Section title="Resume">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <p className="text-gray-600 dark:text-gray-300">
          Download my resume to explore my experience and technical skills.
        </p>
        <a
          href={resumePdfUrl}
          download="MoHasmi_Resume.pdf"
          className="flex items-center gap-2 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all"
        >
          <Download size={18} />
          Download CV
        </a>
      </div>

      {/* Profile Summary */}
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-10 mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Mo.Hasmi
          </h2>
          <h3 className="text-xl text-primary-600 dark:text-primary-400 font-semibold mt-2">
            Full Stack Developer
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            A passionate Full Stack Developer with a strong foundation in MERN
            stack, modern UI/UX principles, and performance-focused backend
            architecture.
          </p>

          <div className="flex justify-center gap-6 mt-6 text-gray-600 dark:text-gray-300 text-sm">
            <div className="flex items-center gap-1">
              <Mail size={16} /> mo.hasmi@example.com
            </div>
            <div className="flex items-center gap-1">
              <Linkedin size={16} /> linkedin.com/in/mohasmi
            </div>
            <div className="flex items-center gap-1">
              <Github size={16} /> github.com/mohasmi
            </div>
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-200 dark:border-dark-600 pb-2">
            🎓 Education
          </h3>

          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between flex-wrap">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.details}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.duration}
                  </span>
                  {edu.cgpa && (
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      CGPA: {edu.cgpa}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-200 dark:border-dark-600 pb-2">
            💼 Work Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between flex-wrap mb-1">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {exp.role}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {exp.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 pl-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-200 dark:border-dark-600 pb-2">
            🧠 Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Frontend
              </h4>
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}

              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                Backend
              </h4>
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>

            {/* Database & Others */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Database
              </h4>
              {databaseSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}

              {otherSkills.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                    Other
                  </h4>
                  {otherSkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
  <div className="flex items-center mb-2">
    <span className="w-28 text-sm text-gray-600 dark:text-gray-300">
      {skill.name}
    </span>
    <div className="flex-grow h-2 bg-gray-200 dark:bg-dark-600 rounded-full mx-3">
      <div
        className="h-2 bg-primary-500 rounded-full"
        style={{ width: `${skill.level}%` }}
      />
    </div>
    <span className="text-xs text-gray-500">{skill.level}%</span>
  </div>
);

export default Resume;
