import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import tailwind from "../../public/tailwind.png";
import html from "../../public/html.png";
import react from "../../public/react.png";
import javascript from "../../public/javascript.png";
import css from "../../public/css.jpg";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 5,
      logo: react,
      name: "React",
    },
    {
      id: 6,
      logo: python,
      name: "Python",
    },
    {
      id: 7,
      logo: java,
      name: "Java",
    },
  ];

  return (
    <div
      name="Projects"
      className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      style={{
        backgroundImage: "url('/z.jpg')", // Ensure the correct path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative text-center z-10">
        <h1 className="text-4xl font-bold mb-10 text-white">Projects</h1>
        <p className="text-lg text-gray-300 mb-10">
          Explore the technologies I've worked with.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="border-[2px] rounded-lg shadow-lg p-5 cursor-pointer hover:shadow-2xl hover:scale-105 duration-300 transform transition bg-white bg-opacity-80"
              key={id}
            >
              <div className="flex justify-center">
                <img
                  src={logo}
                  className="w-[100px] h-[100px] p-2 rounded-full border-[2px]"
                  alt={name}
                />
              </div>
              <div className="text-center mt-5">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                  {name}
                </h2>
                <p className="text-gray-600">
                  I've worked extensively with {name} to create efficient and scalable projects.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
