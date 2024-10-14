import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-6 md:px-20 py-16"
      style={{
        backgroundImage: "url('./a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-center" data-aos="fade-up">About Me</h1>
        
        <p className="text-lg leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="100">
          I am a recent Computer Science graduate with a blend of technical expertise and hands-on experience in web development and machine learning...
        </p>

        {/* Education Section */}
        <h2 className="text-2xl font-semibold mb-4 text-green-400" data-aos="fade-right">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Central Institute of Technology</h3>
            <p>B.E. in Computer Science and Engineering (2021 – 2024)</p>
            <p>CGPA: 6.52</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Government Polytechnic College</h3>
            <p>Diploma in Computer Science and Engineering (2018 – 2021)</p>
            <p>Percentage: 76%</p>
          </div>
        </div>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold mb-4 text-green-400" data-aos="fade-right">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="font-bold">Programming Languages:</h3>
            <p>C/C++, Python</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="font-bold">Web Development:</h3>
            <p>HTML, Tailwind CSS, JavaScript, React.js</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="font-bold">Databases:</h3>
            <p>MySQL</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="font-bold">Tools:</h3>
            <p>Figma, VS Code, GitHub, Git Bash</p>
          </div>
        </div>

        <a
          href="/resume.pdf"
          className="bg-green-400 text-white py-2 px-6 rounded hover:bg-green-500 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default About;
