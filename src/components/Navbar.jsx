import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineDownload } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-white tracking-wide">MyPortfolio</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map(({ id, text }) => (
            <li key={id}>
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white text-base font-medium hover:text-indigo-400 transition-all duration-300 cursor-pointer"
              >
                {text}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/R.pdf"
              download
              className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300"
            >
              <AiOutlineDownload size={18} /> Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden text-white focus:outline-none"
        >
          {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg">
          <ul className="flex flex-col items-center py-10 space-y-6">
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <Link
                  to={text}
                  onClick={() => setMenu(false)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-white text-lg font-semibold hover:text-indigo-400"
                >
                  {text}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/R.pdf"
                download
                className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300"
              >
                <AiOutlineDownload size={18} /> Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
