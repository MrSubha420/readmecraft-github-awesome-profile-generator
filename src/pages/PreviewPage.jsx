import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const socialMediaLogos = {
  GitHub: 'https://img.shields.io/badge/GitHub-black?logo=github&style=flat-square',
  Facebook: 'https://img.shields.io/badge/Facebook-green?logo=facebook&style=flat-square',
  Portfolio : 'https://img.shields.io/badge/Portfolio-purple?logo=globe&style=flat-square',
  LinkedIn: 'https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&style=flat-square',
  Twitter: 'https://img.shields.io/badge/Twitter-skyblue?logo=x&style=flat-square',
  Instagram: 'https://img.shields.io/badge/Instagram-pink?logo=instagram&style=flat-square',
  YouTube: 'https://img.shields.io/badge/YouTube-red?logo=youtube&style=flat-square',
  Reddit: 'https://img.shields.io/badge/Reddit-orange?logo=reddit&style=flat-square',
  StackOverflow: 'https://img.shields.io/badge/Stack%20Overflow-lightgrey?logo=stackoverflow&style=flat-square',
};

const PreviewPage = () => {
  const { data } = useContext(AppContext);
  const navigate = useNavigate();

  const generateMarkdown = () => {
    if (!data || !data.username || !data.technologies) {
      return `# Hi! 👋\n\nPlease complete all steps to see the markdown preview.`;
    }

    const { username, about = '', socialMedia = {}, technologies, githubStats = {}, githubTrophies = {}, contributionHeatmap = {}, topRepoTheme = {} } = data;

    return `
<h2 align="center">
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&pause=1000&center=true&vCenter=true&multiline=true&width=460&lines=Hey+Hi, I'm ${username} 👋+%3C%2F%3E" alt="Typing SVG" /></a>
</h2>

## 👨‍💻 About Me
${about || "I'm a developer passionate about technology and learning new skills."}

## 🤝 Connect with Me
${Object.entries(socialMedia)
  .filter(([, link]) => link)
  .map(([platform, link]) => `[![${platform}](${socialMediaLogos[platform] || ''})](${link})`)
  .join(' ') || "Not provided"}

## 🛠️ Languages and Tools
#### Frontend
${technologies.frontend?.map((tech) => `![${tech}](https://img.shields.io/badge/${tech}-brightgreen?style=flat-square)`).join(' ') || "Not provided"}

#### Backend
${technologies.backend?.map((tech) => `![${tech}](https://img.shields.io/badge/${tech}-yellowgreen?style=flat-square)`).join(' ') || "Not provided"}

#### Programming Languages
${technologies.programming?.map((lang) => `![${lang}](https://img.shields.io/badge/${lang}-blue?style=flat-square)`).join(' ') || "Not provided"}

#### Databases
${technologies.database?.map((db) => `![${db}](https://img.shields.io/badge/${db}-orange?style=flat-square)`).join(' ') || "Not provided"}

#### App Development
${technologies.appDev?.map((app) => `![${app}](https://img.shields.io/badge/${app}-red?style=flat-square)`).join(' ') || "Not provided"}

#### Other Tools
${technologies.others?.map((tool) => `![${tool}](https://img.shields.io/badge/${tool}-purple?style=flat-square)`).join(' ') || "Not provided"}

## 📊 GitHub Stats </b>

<p><img align="left" src="https://github-readme-stats.vercel.app/api?username=${username}&theme=${githubStats.theme || 'default'}&hide_border=false&include_all_commits=false&count_private=false" alt="mrsubha" /></p>

<p>&nbsp;<img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${githubStats.theme || 'default'}&hide_border=false" alt="mrsubha" /></p>

<p><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${githubStats.theme || 'default'}&hide_border=false&include_all_commits=true&count_private=false&layout=compact" alt="MrSubha420" /></p>

## 🏆 GitHub Trophies
![Trophies](https://github-profile-trophy.vercel.app/?username=${username}&theme=${githubTrophies.theme || 'default'})

## 🔥 Top Contributed Repositories
![Top Repositories](https://github-contributor-stats.vercel.app/api?username=${username}&limit=5&theme=${topRepoTheme.theme || 'default'}&combine_all_yearly_contributions=true)
    `;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdown());
    alert('Markdown copied to clipboard!');
  };

  const handleNew = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-900 to-black text-green-400">
      <motion.h2
        className="text-4xl font-extrabold mb-6 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Markdown Preview
      </motion.h2>
      
      <motion.div
        className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-4xl w-full overflow-x-auto border border-green-700"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <pre className="whitespace-pre-wrap text-sm font-mono">
          {generateMarkdown()}
        </pre>
      </motion.div>
      
      <div className="mt-6 flex gap-4">
        <motion.button
          onClick={handleCopy}
          className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Copy Markdown
        </motion.button>
        
        <motion.button
          onClick={handleNew}
          className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Create New
        </motion.button>
      </div>
    </div>
  );
};

export default PreviewPage;
