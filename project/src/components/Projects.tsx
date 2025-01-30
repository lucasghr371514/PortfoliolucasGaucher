import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Database, Code2, Rss } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Infrastructure Windows Server",
      description: "Mise en place d'un environnement Windows Server avec Active Directory, gestion des GPO et services DNS/DHCP",
      icon: Server,
      tags: ["Windows Server", "Active Directory", "GPO", "DNS", "DHCP"],
      type: "Professionnel"
    },
    {
      title: "Virtualisation Debian",
      description: "Création et configuration de machines virtuelles Debian, installation de services et sécurisation",
      icon: Code2,
      tags: ["Debian", "Virtualisation", "Linux", "Sécurité"],
      type: "Académique"
    },
    {
      title: "Base de données & Apache",
      description: "Configuration d'un serveur web Apache avec Webmin et mise en place d'une base de données",
      icon: Database,
      tags: ["Apache", "MySQL", "Webmin", "Linux"],
      type: "Académique"
    },
    {
      title: "Veille Technologique",
      description: "Mise en place d'un système de veille informatique sur les nouvelles technologies et la cybersécurité",
      icon: Rss,
      tags: ["Cybersécurité", "Cloud Computing", "DevOps", "Innovation"],
      type: "Personnel",
      details: [
        "Suivi des tendances IT et cybersécurité",
        "Analyse des nouvelles technologies cloud",
        "Veille sur les bonnes pratiques DevOps",
        "Surveillance des vulnérabilités"
      ]
    }
  ];

  const experiences = [
    {
      company: "SNCF",
      period: "Septembre 2024 - Présent",
      role: "Alternant Infrastructure IT",
      description: "Gestion de l'infrastructure réseau et système"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        duration: 1
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        Projets & Expériences
      </h2>

      {/* Projets */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            whileHover={{ y: -4 }}
          >
            <div className="p-6">
              <project.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.details && (
                <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <ul className="space-y-2">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expériences */}
      <motion.div variants={item} className="space-y-6">
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Parcours Professionnel
        </h3>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            whileHover={{ y: -2 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.company}</h4>
                <p className="text-blue-600 dark:text-blue-400">{exp.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;