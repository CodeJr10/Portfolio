// import React from "react";

import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-20 top-0 start-0 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto p-4 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-1">
        <a
          href="/"
          className=" hidden md:flex items-center space-x-3 rtl:space-x-reverse "
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <img src={Logo} alt="CodeJr10 Logo" width={100} height={100} />
          </span>
        </a>

        {/* line divider */}
        <div className="hidden md:block border-t border-gray-200 md:mx-6 opacity-30"></div>

        {/*  Nav Links */}
        <div
          className="flex items-center justify-center md:justify-end"
          id="navbar-sticky"
        >
          <ul
            className="flex fixed bottom-5 left-1/2 -translate-x-1/2 
               items-center justify-center 
               p-2 md:p-0 
               font-medium text-sm border border-gray-100 rounded-lg bg-gray-50 
               md:relative md:bottom-auto md:left-auto md:translate-x-0 md:border-0 md:bg-transparent md:space-x-2 md:px-2 md:py-2
               dark:bg-[#080930] md:dark:bg-[#080930] zA"
          >
            {["About", "Projects", "Contact", "Resume"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm 
                     hover:bg-gray-100 md:hover:text-blue-700 
                     dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                     transition-all duration-300 ease-in" // 👈 smooth hover
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
