// components/Header.jsx

import React from "react";

const Header = () => {
  return (
    <header className="  z-40 right-0 fixed top-0 flex w-full justify-center items-center p-2 bg-blue-900">
      <div className="flex items-center w-96 bg-white rounded-md max-w-md ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-black ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m1.34-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none p-2 text-black"
        />
      </div>
    </header>
  );
};

export default Header;
