import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield, Network, Code2, Link, BookOpen, Lock } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Infrastructure & Réseaux",
      skills: [
        "Configuration de switches et routeurs",
        "Administration Windows Server",
        "Gestion Active Directory",
        "Configuration DHCP/DNS",
        "Maintenance du parc informatique",
        "Virtualisation (VMware)",
      ]
    },
    {
      title: "Sécurité & Systèmes",
      skills: [
        "Gestion des droits utilisateurs",
        "Configuration de pare-feu",
        "Sécurisation des accès réseaux",
        "Sauvegarde et restauration",
        "Support utilisateur",
        "Gestion des incidents",
      ]
    },
    {
      title: "Outils & Technologies",
      skills: [
        "Suite Microsoft Office",
        "Gestion de tickets (GLPI)",
        "Environnement Windows",
        "Outils de diagnostic réseau",
        "Documentation technique",
        "Support utilisateur",
      ]
    }
  ];

  const usefulLinks = [
    {
      category: "Veille Technologique",
      icon: BookOpen,
      links: [
        { 
          name: "ANSSI", 
          url: "https://www.ssi.gouv.fr/",
          logo: "https://www.ssi.gouv.fr/uploads/2014/11/anssi.png"
        },
        { 
          name: "ZDNet France", 
          url: "https://www.zdnet.fr/",
          logo: "https://www.zdnet.fr/assets/zdnet/img/logos/logo-zdnet-284x160.png"
        },
        { 
          name: "Le Monde Informatique", 
          url: "https://www.lemondeinformatique.fr/",
          logo: "https://www.lemondeinformatique.fr/images/logo_lmi.png"
        }
      ]
    },
    {
      category: "Cybersécurité",
      icon: Lock,
      links: [
        { 
          name: "CERT-FR", 
          url: "https://www.cert.ssi.gouv.fr/",
          logo: "https://www.cert.ssi.gouv.fr/images/cert-fr.png"
        },
        { 
          name: "CVE", 
          url: "https://cve.mitre.org/",
          logo: "https://cve.mitre.org/images/cvebanner.png"
        },
        { 
          name: "Kaspersky Cybermap", 
          url: "https://cybermap.kaspersky.com/",
          logo: "https://media.kaspersky.com/uk/images/logo.svg"
        }
      ]
    },
    {
      category: "Documentation Technique",
      icon: Link,
      links: [
        { 
          name: "Microsoft Docs", 
          url: "https://docs.microsoft.com/",
          logo: "https://docs.microsoft.com/favicon.ico"
        },
        { 
          name: "Cisco Learning", 
          url: "https://learningnetwork.cisco.com/",
          logo: "https://learningnetwork.cisco.com/c/blf/skins/learningnetwork/images/cisco-logo.png"
        },
        { 
          name: "VMware Docs", 
          url: "https://docs.vmware.com/",
          logo: "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/images/company/vmware-logo-grey.svg"
        }
      ]
    }
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Compétences Techniques
      </h2>

      <div className="grid gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={container}
            initial="hidden"
            animate="show"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={item}
                  className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Liens Utiles */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Ressources & Liens Utiles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {usefulLinks.map((section, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <section.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {section.category}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                      >
                        <img 
                          src={link.logo} 
                          alt={`${link.name} logo`} 
                          className="w-6 h-6 object-contain filter dark:invert group-hover:brightness-110"
                        />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Compétences Transversales</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Travail en équipe',
              'Communication',
              'Organisation',
              'Autonomie',
              'Adaptabilité',
              'Rigueur'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg text-center text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;