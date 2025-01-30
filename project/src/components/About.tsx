import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, Network, Server, Monitor } from 'lucide-react';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={item}>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            À Propos de Moi
          </h1>
          <div className="w-20 h-1 mx-auto bg-blue-600 dark:bg-blue-500 rounded-full" />
        </div>

        <motion.div 
          variants={item} 
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8 border border-gray-200 dark:border-gray-700"
          whileHover={{ y: -4 }}
        >
          <Terminal className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Étudiant en <span className="font-semibold text-blue-600 dark:text-blue-400">BTS SIO option SISR</span> à 
            <span className="font-semibold"> Notre Dame La Riche</span>, 
            je suis actuellement en alternance à la <span className="font-semibold">SNCF</span> où 
            je développe mes compétences en infrastructure et réseaux. Mon parcours combine formation académique 
            et expérience pratique, me permettant d'acquérir une vision complète des enjeux technologiques actuels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            variants={item} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            whileHover={{ y: -4 }}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <Code2 className="text-blue-600 dark:text-blue-400" />
              Passions
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">
                  Volleyball - Sport d'équipe et dépassement de soi
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">
                  Informatique - Exploration continue des nouvelles technologies
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">
                  Veille technologique - Curiosité et apprentissage permanent
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">
                  Veille composants - Suivi des innovations hardware et benchmarks
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={item} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            whileHover={{ y: -4 }}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <Cpu className="text-blue-600 dark:text-blue-400" />
              Expertise Technique
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Infrastructure réseau
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Administration système
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Support utilisateur
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;