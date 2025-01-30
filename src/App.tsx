import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, User, Briefcase, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CV from './components/CV';
import Intro from './components/Intro';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      setActiveSection('about');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {!showContent && <Intro />}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <NavBar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeSection === 'about' && (
              <motion.div key="about" {...pageTransition}>
                <About />
              </motion.div>
            )}
            {activeSection === 'competences' && (
              <motion.div key="skills" {...pageTransition}>
                <Skills />
              </motion.div>
            )}
            {activeSection === 'projects' && (
              <motion.div key="projects" {...pageTransition}>
                <Projects />
              </motion.div>
            )}
            {activeSection === 'cv' && (
              <motion.div key="cv" {...pageTransition}>
                <CV />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="mt-20 py-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center space-x-8 mb-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:contact@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              © 2024 Lucas Gaucher. Tous droits réservés.
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

export default App;