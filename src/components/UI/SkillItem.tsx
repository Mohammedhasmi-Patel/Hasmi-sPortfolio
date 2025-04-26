import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

interface SkillItemProps {
  skill: Skill;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white dark:bg-dark-800 p-4 rounded-lg shadow-soft hover:shadow-soft-lg transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">{skill.name}</h3>
        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-400"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillItem;