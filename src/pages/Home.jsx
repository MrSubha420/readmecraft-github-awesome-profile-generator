import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const [username, setUsername] = useState('');
  const { setData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleNext = () => {
    if (username.trim()) {
      setData((prev) => ({ ...prev, username }));
      navigate('/slides');
    } else {
      alert('Please enter a valid GitHub username.');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-green-300 p-6 gap-8">
      {/* Left Section */}
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <motion.h2
          className="text-5xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          GitHub README Generator
        </motion.h2>

        <motion.input
          type="text"
          placeholder="Enter your GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full max-w-md px-4 py-3 text-green-300 bg-gray-800 border border-green-400 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-green-500"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.button
          onClick={handleNext}
          className="mt-6 px-6 py-3 bg-green-400 text-black font-bold rounded-lg shadow-lg hover:bg-green-500 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Next
        </motion.button>
      </div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 border border-green-400 p-6 rounded-lg bg-gray-800 text-green-300 shadow-lg overflow-y-auto max-h-[80vh]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">How to change GitHub ReadMe?</h2>
        <p className="text-sm mb-4">
          If you already have your personal repository (personal repository name is the same as your GitHub username),
          then you can copy and paste the code generated from ReadmeCraft in your ReadMe file. If you don't have your personal
          repository, then follow this:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            Go to{' '}
            <a
              href="https://github.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              https://github.com/new
            </a>{' '}
            and enter the same name as your GitHub username into the Repository name field.
          </li>
          <li>Leave the repo as a Public repo (by default).</li>
          <li>Also, make sure to initialize it with a README to get started.</li>
          <li>Paste the code generated from this website inside your ReadMe file.</li>
          <li>Commit the changes to add a ReadMe to your GitHub account.</li>
          <li><b className="text-green-300">Note:</b>
          <a
        href="x"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm sm:text-base text-blue-400 underline underline-offset-4 sm:underline-offset-8 mb-6 text-center"
      >
       Need help regarding this? Click here to watch Video.
      </a>
          </li>
        </ol>
      </motion.div>
    </div>
  );
};

export default Home;
