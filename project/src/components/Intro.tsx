import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className="fixed inset-0 bg-gray-50 dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 px-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gray-900 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
            <span className="text-3xl font-bold text-white">LG</span>
          </div>
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Lucas Gaucher
        </h1>
        <div className="w-20 h-1 bg-gray-900 dark:bg-gray-700 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-light">
          Alternant Infrastructure IT
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block"
        >
          <span className="px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors cursor-default">
            Découvrez mon portfolio
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;