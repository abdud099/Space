import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-between flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-8 md:mb-0">
            <div className="font-bold text-[16px] mb-4">Community</div>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-yellow-500 transition"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-gray-400 transition"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-indigo-500 transition"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-8 md:mb-0">
            <div className="font-bold text-[16px] mb-4">Social Media</div>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-pink-500 transition"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-500 transition"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-700 transition"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-4">About</div>
            <a
              href="/become-sponsor"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-yellow-500 transition"
            >
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </a>
            <a
              href="/about"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-yellow-500 transition"
            >
              <span className="text-[15px] ml-[6px]">Learn About Me</span>
            </a>
            <a
              href="mailto:abdud099@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-yellow-500 transition"
            >
              <span className="text-[15px] ml-[6px]">abdud099@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; WebDev 2023 Inc. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
