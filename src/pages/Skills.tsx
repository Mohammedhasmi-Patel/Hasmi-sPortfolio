import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import SkillItem from '../components/UI/SkillItem';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  // Group skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const databaseSkills = skills.filter(skill => skill.category === 'database');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <>
      <Section title="My Skills">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl"
        >
          <p>
            As a Full Stack Developer, I've acquired a diverse set of skills across frontend, backend, 
            and database technologies. Here's an overview of my technical proficiency:
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            Frontend Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            Backend Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            Database Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {databaseSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {otherSkills.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Other Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherSkills.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  );
};

export default Skills;