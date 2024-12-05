import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Slide1 = ({ onNext }) => {
  const { data, setData } = useContext(AppContext);
  const [about, setAbout] = useState(data.about || '');
  const navigate = useNavigate();

  const handleNext = () => {
    setData((prev) => ({ ...prev, about }));
    onNext();
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-br from-gray-800 to-black text-green-300 gap-6">
      {/* Header */}
      <p className="text-center text-3xl my-6 md:my-10 mt-20">
        Add a small introduction
      </p>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row px-2 gap-3">
        {/* Image Section - 4/10 width */}
        <div className="flex w-full md:w-5/12 justify-center items-center">
          <img
            src="/happy.png"
            alt="About"
            className="w-8/12 md:w-full aspect-square select-none pointer-events-none"
            draggable="false"
          />
        </div>

        {/* Text/Input Section - 6/10 width */}
        <div className="flex flex-col w-full md:w-7/12 items-center">
          <motion.h2
            className="text-4xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>

          <motion.textarea
            placeholder="Introduce yourself..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full h-72 p-4 text-green-300 rounded-lg shadow-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-green-400 resize-none"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Preview Section */}
          <motion.div
            className="mt-6 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-center">Preview</h3>
            <div className="p-4 bg-gray-700 rounded-lg shadow-md min-h-[4rem] flex items-center justify-center">
              {about ? (
                <motion.p
                  className="text-green-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {about}
                </motion.p>
              ) : (
                <p className="text-green-400">Your introduction will appear here.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <motion.button
          onClick={handlePrev}
          className="px-6 py-3 bg-green-400 hover:bg-gray-700 text-white font-bold rounded-lg shadow-lg focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Prev
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="px-6 py-3 bg-green-400 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default Slide1;
