import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Section from '../components/UI/Section';
import ContactForm from '../components/UI/ContactForm';
import SocialIcons from '../components/UI/SocialIcons';
import { socialLinks } from '../data/portfolio';

const Contact: React.FC = () => {
  return (
    <>
      <Section title="Contact Me">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Let's Talk</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                Feel free to reach out to me using the contact form or through my social media profiles.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                    <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">Remote, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                    <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">mo.hasmi@example.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Connect with me</h4>
                <SocialIcons links={socialLinks} />
              </div>
            </motion.div>
            
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;