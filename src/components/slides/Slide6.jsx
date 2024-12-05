import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import themes from '../../data/theme';
import { motion } from 'framer-motion';

const Slide6 = ({ onNext }) => {
  const { data, setData } = useContext(AppContext);
  const [theme, setTheme] = useState(data.topRepoTheme.theme || themes[0]);
  const [repoImageUrl, setRepoImageUrl] = useState('');

  // Update the repo image URL whenever the theme or username changes
  useEffect(() => {
    const getRepoImageUrl = () => {
      setRepoImageUrl(
        `https://github-contributor-stats.vercel.app/api?username=${data.username}&limit=5&theme=${theme}&combine_all_yearly_contributions=true`
      );
    };
    getRepoImageUrl();
  }, [theme, data.username]);

  const handleNext = () => {
    setData((prev) => ({
      ...prev,
      topRepoTheme: { theme },
    }));
    onNext();
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-green-400"
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
        Top Contributed Repositories
      </motion.h2>

      <motion.div
        className="mb-6 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <label className="block text-lg font-semibold mb-4">Choose Theme</label>
        <select
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
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

      <motion.div
        className="mt-6 flex flex-col items-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Preview</h3>
        <motion.img
          src={repoImageUrl}
          alt="GitHub Top Contributed Repositories"
          className="rounded-lg shadow-lg border-2 border-green-500 max-w-full"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      <motion.button
        onClick={handleNext}
        className="mt-8 px-6 py-3 bg-green-400 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default Slide6;
