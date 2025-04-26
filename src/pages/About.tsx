// import React from "react";
// import { motion } from "framer-motion";
// import Section from "../components/UI/Section";
// import { aboutMe } from "../data/portfolio";
// import aboutLaptop from "./about-laptop.avif";

// const About: React.FC = () => {
//   return (
//     <div className="flex">
//       <Section title="About Me">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="prose prose-lg dark:prose-invert">
//               {aboutMe.bio.split("\n\n").map((paragraph, index) => (
//                 <p
//                   key={index}
//                   className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
//                 >
//                   {paragraph}
//                 </p>
//               ))}

//               <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
//                 Career Objective
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
//                 {aboutMe.careerGoal}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </Section>

//       <img
//         src={aboutLaptop}
//         alt=""
//         className="rounded-lg shadow-lg max-w-full h-auto object-cover w-[400px] lg:w-[500px]"
//       />
//     </div>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import Section from "../components/UI/Section";
import { aboutMe } from "../data/portfolio";
import aboutLaptop from "../assets/about-laptop.avif";

const About: React.FC = () => {
  return (
    <Section title="About Me">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Text Section */}
        <div>
          <div className="prose dark:prose-invert max-w-none">
            {aboutMe.bio.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-10 mb-3">
              🎯 Career Objective
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {aboutMe.careerGoal}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={aboutLaptop}
            alt="About Me Illustration"
            className="rounded-2xl shadow-xl w-full max-w-[500px] object-cover border border-gray-200 dark:border-dark-600 hidden lg:block"
          />
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
