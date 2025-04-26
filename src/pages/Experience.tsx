import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <>
      <Section title="Work Experience">
        <div className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
          <p>
            My professional journey as a Full Stack Developer, with hands-on experience
            building real-world applications.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 md:p-8 shadow-soft relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 rounded-l-xl"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.role}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">{experience.company}</p>
                </div>
                <span className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  {experience.duration}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">{experience.description}</p>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Experience;