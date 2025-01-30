import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';

const CV = () => {
  const experiences = [
    {
      title: "Alternant Infrastructure IT",
      company: "SNCF",
      period: "2024 - Présent",
      description: "Maintenance et évolution de l'infrastructure réseau, gestion des systèmes Windows Server, support utilisateur."
    }
  ];

  const education = [
    {
      degree: "BTS SIO option SISR",
      school: "Notre Dame La Riche",
      period: "2024 - 2026",
      description: "Formation en Solutions d'Infrastructure, Systèmes et Réseaux"
    },
    {
      degree: "Baccalauréat",
      school: "Lycée",
      period: "2024",
      description: "Obtention du baccalauréat"
    }
  ];

  const certifications = [
    "Certification PIX"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Curriculum Vitae
        </h2>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Download size={20} />
          <span>Télécharger CV</span>
        </button>
      </div>

      {/* Experience */}
      <motion.section variants={item} className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Briefcase className="text-blue-600 dark:text-blue-400" />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Expérience Professionnelle</h3>
        </div>
        {experiences.map((exp, index) => (
          <div key={index} className="ml-8 mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </motion.section>

      {/* Education */}
      <motion.section variants={item} className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <GraduationCap className="text-blue-600 dark:text-blue-400" />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Formation</h3>
        </div>
        {education.map((edu, index) => (
          <div key={index} className="ml-8 mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                <p className="text-blue-600 dark:text-blue-400">{edu.school}</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400">{edu.period}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
          </div>
        ))}
      </motion.section>

      {/* Certifications */}
      <motion.section variants={item}>
        <div className="flex items-center space-x-2 mb-4">
          <Award className="text-blue-600 dark:text-blue-400" />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
        </div>
        <div className="ml-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <ul className="space-y-2">
            {certifications.map((cert, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CV;