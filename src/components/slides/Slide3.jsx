import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

const Slide3 = ({ onNext }) => {
  const { data, setData } = useContext(AppContext);
  const [technologies, setTechnologies] = useState(data.technologies || {});

  const addTechnology = (category, value) => {
    if (value.trim()) {
      setTechnologies((prev) => ({
        ...prev,
        [category]: [...(prev[category] || []), value],
      }));
    }
  };

  const handleNext = () => {
    setData((prev) => ({ ...prev, technologies }));
    onNext();
  };

  const categories = [
    { name: 'frontend', label: 'Frontend Technologies' },
    { name: 'backend', label: 'Backend Technologies' },
    { name: 'programming', label: 'Programming Languages' },
    { name: 'database', label: 'Databases' },
    { name: 'appDev', label: 'App Development' },
    { name: 'others', label: 'Other Tools' },
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-green-300"
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
        Add Your Technologies
      </motion.h2>

      <div className="w-full max-w-3xl">
        {categories.map(({ name, label }) => (
          <motion.div
            key={name}
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * categories.indexOf(({ name: categoryName }) => categoryName === name) }}
          >
            <label className="block text-lg font-semibold mb-2">{label}</label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder={`Add ${label}`}
                className="w-full px-4 py-3 text-green-300 bg-gray-800 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-green-500"
                id={`input-${name}`}
              />
              <button
                className="ml-2 bg-green-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => {
                  const input = document.getElementById(`input-${name}`);
                  if (input.value) {
                    addTechnology(name, input.value);
                    input.value = '';
                  }
                }}
              >
                Add
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {technologies[name] &&
                technologies[name].map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-blue-600 text-white py-1 px-3 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="flex justify-center mt-8">
        <motion.button
          onClick={handleNext}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Slide3;
