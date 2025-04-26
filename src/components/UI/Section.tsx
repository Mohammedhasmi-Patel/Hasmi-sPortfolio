import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`py-12 md:py-16 ${className}`}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 relative inline-block"
        >
          {title}
          <motion.span 
            initial={{ width: 0 }}
            animate={inView ? { width: '50%' } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-0 left-0 h-1 bg-primary-500 rounded-full"
          ></motion.span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section;