import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

const Slide2 = ({ onNext }) => {
  const { data, setData } = useContext(AppContext);
  const [socialMedia, setSocialMedia] = useState(data.socialMedia || {});

  const handleInputChange = (platform, value) => {
    setSocialMedia((prev) => ({ ...prev, [platform]: value }));
  };

  const handleNext = () => {
    setData((prev) => ({ ...prev, socialMedia }));
    onNext();
  };

  const platforms = [
    { name: 'GitHub', color: 'black', logo: 'github' },
    { name: 'Facebook', color: 'blue', logo: 'facebook' },
    { name: 'Portfolio', color: 'purple', logo: 'portfolio' },
    { name: 'LinkedIn', color: 'blue', logo: 'linkedin' },
    { name: 'Twitter', color: 'skyblue', logo: 'x' },
    { name: 'Instagram', color: 'pink', logo: 'instagram' },
    { name: 'YouTube', color: 'red', logo: 'youtube' },
    { name: 'Reddit', color: 'orange', logo: 'reddit' },
    { name: 'StackOverflow', color: 'yellow', logo: 'stackoverflow' },
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-800 to-black text-green-300"
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
        Social Media Links
      </motion.h2>

      <div className="w-full max-w-3xl">
        {platforms.map(({ name, color, logo }) => (
          <motion.div
            key={name}
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * platforms.indexOf(({ name }) => name === name) }}
          >
            <label className="block text-lg font-semibold mb-2 flex items-center">
              <img
                src={`https://img.shields.io/badge/${name}-${color}?logo=${logo}&style=flat-square`}
                alt={`${name} logo`}
                className="mr-3 h-8"
              />
            </label>
            <input
              type="url"
              placeholder={`Enter ${name} link`}
              className="w-full px-4 py-3 text-green-300 bg-gray-800 border border-green-700 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-green-500"
              value={socialMedia[name] || ''}
              onChange={(e) => handleInputChange(name, e.target.value)}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-center">Preview</h3>
        <div className="p-6 bg-gray-700 border border-green-700 rounded-lg shadow-lg">
          {Object.entries(socialMedia).map(([platform, link], idx) => (
            <motion.div
              key={idx}
              className="flex items-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <strong className="text-lg">{platform}:</strong>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-green-400 hover:underline truncate"
              >
                {link || 'Not provided'}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Button Container */}
      <div className="flex justify-center mt-8">
        <motion.button
          onClick={handleNext}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Slide2;
