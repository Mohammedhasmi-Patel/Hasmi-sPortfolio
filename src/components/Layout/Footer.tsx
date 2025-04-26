import React from "react";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { socialLinks } from "../../data/portfolio";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      case "mail":
        return <Mail size={18} />;
      case "phone":
        return <Phone size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-white dark:bg-dark-800 shadow-inner py-8 mt-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Mo.Hasmi
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Full Stack Developer
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-700 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 transition-colors duration-200"
                aria-label={link.platform}
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Mo.Hasmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
