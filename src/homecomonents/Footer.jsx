import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center pt-6 pb-4 bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Social Links */}
      <div className="flex flex-row flex-wrap space-x-3">
        {/* X */}
        <a
          className="bg-white hover:bg-gray-900 p-2 m-2 rounded-full shadow-md transition-transform transform hover:scale-110 ease-in-out duration-200"
          href="X"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="t.png" alt="X Logo" className="w-6 h-6" />
        </a>
        {/* GitHub */}
        <a
          className="bg-white hover:bg-gray-900 p-2 m-2 rounded-full shadow-md transition-transform transform hover:scale-110 ease-in-out duration-200"
          href="https://github.com/MrSubha420"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/git.png" alt="GitHub Logo" className="w-6 h-6" />
        </a>
        {/* LinkedIn */}
        <a
          className="bg-white hover:bg-gray-900 p-2 m-2 rounded-full shadow-md transition-transform transform hover:scale-110 ease-in-out duration-200"
          href="https://www.linkedin.com/in/subhadip-manna-504686321"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linked.png" alt="LinkedIn Logo" className="w-6 h-6" />
        </a>
        {/* Facebook */}
        <a
          className="bg-white hover:bg-gray-900 p-2 m-2 rounded-full shadow-md transition-transform transform hover:scale-110 ease-in-out duration-200"
          href="https://www.facebook.com/subhadip.manna.18294"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="f.png" alt="Facebook Logo" className="w-6 h-6" />
        </a>
      </div>

      {/* Contact Email */}
      <div className="mt-4">
        <a
          href="mailto:codewithsubh2.0@gmail.com"
          className="flex items-center gap-0.5 text-gray-300 hover:text-white transition-opacity"
          title="Contact us for any business, service, or query."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <span className="hover:underline">connect-me</span>
        </a>
      </div>

      {/* Additional Text Section */}
      <div className="mt-4 text-sm text-gray-400">
        Created By{" "}
        <a
          href="https://codewithsubhadip.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-white font-bold underline"
        >
          SubhadipManna
        </a>{" "}
        | ©2024 All rights reserved
      </div>
    </div>
  );
}
