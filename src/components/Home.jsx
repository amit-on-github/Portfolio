import React from "react";
import pic from "../../public/code.avif";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5"; // Updated icon import path for IoLogoGithub

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      style={{
        backgroundImage: "url('./b.jpg')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
      }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
            <h2 className="text-2xl text-gray-700">Welcome to My Portfolio</h2>
            <div className="flex space-x-1 text-3xl md:text-5xl font-bold text-gray-800">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-600"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
              />
            </div>
            <p className="text-md md:text-lg text-gray-600 text-justify mt-4">
              I'm Amit Kumar. My portfolio showcases my journey through projects, skills, and experiences that reflect my dedication to continuous learning and problem-solving. Let's connect and explore how I can contribute to your next big idea.
            </p>
            <div className="flex flex-col items-center md:flex-row justify-between mt-6">
              <h1 className="font-bold text-lg text-center">Connect with me</h1>
              <ul className="flex space-x-5 mt-2 md:mt-0">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaSquareFacebook className="text-3xl text-gray-700 hover:text-red-600 transition duration-300" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/amit-kumar-073480220/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl text-gray-700 hover:text-blue-600 transition duration-300" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/amit-on-github" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub className="text-3xl text-gray-700 hover:text-black transition duration-300" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-16 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[400px] shadow-lg"
              alt="Amit Kumar"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
