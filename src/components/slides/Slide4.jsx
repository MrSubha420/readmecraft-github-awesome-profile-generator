import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import themes from '../../data/theme';
import { motion } from 'framer-motion';

const Slide4 = ({ onNext }) => {
  const { data, setData } = useContext(AppContext);
  const [theme, setTheme] = useState(data.githubStats.theme || themes[0]);

  const handleNext = () => {
    setData((prev) => ({
      ...prev,
      githubStats: { theme },
    }));
    onNext();
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-green-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        GitHub Stats
      </motion.h2>

      <motion.div className="mb-6 w-full max-w-lg">
        <label className="block text-lg font-semibold mb-4">Choose Theme</label>
        <select
          className="w-full px-4 py-3 bg-gray-800 border border-green-500 rounded-lg text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themes.map((themeOption, idx) => (
            <option key={idx} value={themeOption} className="bg-gray-700 text-green-400">
              {themeOption}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div className="mt-6 flex flex-col items-center gap-6">
        <h3 className="text-2xl font-semibold mb-4">Preview</h3>

        <motion.img
          src={`https://github-readme-stats.vercel.app/api?username=${data.username}&theme=${theme}`}
          alt="GitHub Stats"
          className="rounded-lg shadow-lg border border-green-700"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${data.username}&theme=${theme}&hide_border=false`}
          alt="GitHub Streaks"
          className="rounded-lg shadow-lg border border-green-700"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        />

        <motion.img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${data.username}&theme=${theme}&hide_border=false&include_all_commits=true&count_private=false&layout=compact`}
          alt="Top Languages"
          className="rounded-lg shadow-lg border border-green-700"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      <motion.button
        onClick={handleNext}
        className="mt-8 px-6 py-3 bg-green-400 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default Slide4;
