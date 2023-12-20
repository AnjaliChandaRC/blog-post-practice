import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden-while-loading");
    } else if (!isMobileMenuOpen) {
      document.body.classList.remove("overflow-hidden-while-loading");
    }
  }, [isMobileMenuOpen]);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const path = useLocation();
  return (
    <nav className="bg-gray-800">
      <div className="container xl:max-w-[1100px] pt-10 lg:pt-[36px] px-4 sm:px-8 xl:px-0 mx-auto flex items-center justify-between">
        <Link to="/">
          <h2 className="font-black font-Merriweather text-blue text-2xl">
            Food Ninja
          </h2>
        </Link>
        <div className="hidden md:flex items-center">
          <a
            href="/blog-post"
            className={`${
              path.pathname === "/" ? "text-gray" : "text-blue font-bold"
            } text-lg font-Roboto transition-all duration-300 ease-in-out hover:text-black`}
            onClick={closeMobileMenu}
          >
            Blog
          </a>
          <a
            href="#about"
            className="text-lg font-Roboto text-gray transition-all duration-300 ease-in-out hover:text-black px-5"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-lg font-Roboto text-gray transition-all duration-300 ease-in-out hover:text-black"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="text-lg font-Roboto text-white rounded-[29px] bg-light_blue pt-[3px] pb-[6px] px-4 ms-5 transition-all duration-300 ease-in-out common_btn"
          >
            Log in
          </a>
        </div>
        <div className="md:hidden custom_index">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex justify-center items-center transition-all  duration-300">
          <div className="bg-gray-800 text-black py-4 flex justify-center items-center navbar_custom_height">
            <ul className="flex flex-col items-center animate-fadeIn">
              <li>
                <a
                  href="/blog-post"
                  className="text-lg font-Roboto text-gray transition-all duration-300 ease-in-out hover:text-black"
                  onClick={closeMobileMenu}
                >
                  Blog
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#about"
                  className="text-lg font-Roboto text-gray transition-all duration-300 ease-in-out hover:text-black"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#contact"
                  className="text-lg font-Roboto text-gray transition-all duration-300 ease-in-out hover:text-black"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </li>
              <a
                href="#contact"
                className="text-lg font-Roboto text-white rounded-[29px] bg-light_blue pt-[3px] pb-[6px] px-4 mt-3 transition-all duration-300 ease-in-out common_btn"
                onClick={closeMobileMenu}
              >
                Log in
              </a>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
