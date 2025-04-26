import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { SocialLink } from '../../types';

interface SocialIconsProps {
  links: SocialLink[];
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ links, className = '' }) => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const getSocialIcon = (icon: string, size = 20) => {
    switch (icon) {
      case 'github':
        return <Github size={size} />;
      case 'linkedin':
        return <Linkedin size={size} />;
      case 'twitter':
        return <Twitter size={size} />;
      case 'mail':
        return <Mail size={size} />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {links.map((link, index) => (
        <motion.a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-700 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:scale-110 transform"
          aria-label={link.platform}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {getSocialIcon(link.icon)}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;