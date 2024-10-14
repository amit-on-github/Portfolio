import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-6 md:px-20 py-16"
      style={{
        backgroundImage: "url('./c.jpg')", // Replace with your image URL
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
      <div className="bg-black bg-opacity-60 p-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        
        <p className="text-lg leading-relaxed mb-8">
          I am a recent Computer Science graduate with a blend of technical expertise and hands-on experience in web development and machine learning. I have worked on impactful projects like developing a T20 cricket score prediction model and creating a secure image-sharing system using blockchain encryption. My journey includes industrial training in web programming and machine learning, equipping me with the tools to solve complex problems. I am passionate about technology, driven by a love for learning, and eager to contribute to innovative projects that make a difference.
        </p>

        {/* Education Section */}
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="font-bold">Fundamentals:</h3>
            <p>Data Structures, OOPS, Operating Systems, DBMS, Software Engineering</p>
          </div>
        </div>

        {/* Training Section */}
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="font-bold">Web Programming</h3>
            <p>Jharkhand IT Services (Nov 2020 - Dec 2020)</p>
            <p>Hands-on experience in web programming technologies and tools.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="font-bold">Machine Learning</h3>
            <p>NIELIT (June 2023 - July 2023)</p>
            <p>Trained in machine learning algorithms and Python libraries.</p>
          </div>
        </div>

        {/* Mission Statement */}
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Mission Statement</h2>
        <div className="bg-gray-800 p-5 rounded-lg shadow-lg mb-8">
          <p className="text-lg leading-relaxed">
            My mission is to leverage my skills and creativity to deliver innovative solutions in the field of Computer Science that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
