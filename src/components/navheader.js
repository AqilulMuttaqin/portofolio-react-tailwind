import React, { useState } from "react";

const Navheader = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 w-full flex items-center z-50 transition-all duration-500 ease-in-out ${
        isActive ? "bg-slate-600" : "bg-white"
      }`}
    >
      <div className="container px-9 lg:max-w-screen-lg max-w-screen-md mx-auto">
        <div className="flex items-center justify-between py-4">
          <h1
            className={`font-semibold text-2xl ${
              isActive
                ? "text-slate-100"
                : "text-slate-700"
            }`}
          >
            Aqiluls
          </h1>
          <div className="flex items-center justify-end">
            <button
              id="hamburger"
              name="hamburger"
              className="block focus:outline-none"
              onClick={handleToggle}
            >
              <span
                className={`w-[26px] h-[3px] my-1.5 block rounded-full transition-transform duration-300 ease-in-out ${
                  isActive
                    ? "rotate-45 translate-y-[5px] bg-slate-100"
                    : "bg-slate-700"
                }`}
              ></span>
              <span
                className={`w-[26px] h-[3px] my-1.5 block rounded-full transition-transform duration-300 ease-in-out ${
                  isActive
                    ? "-rotate-45 -translate-y-[5px] bg-slate-100"
                    : "bg-slate-700"
                }`}
              ></span>
            </button>
          </div>
        </div>

        <div
          className={`transform transition-transform duration-300 ease-in-out ${
            isActive ? "translate-y-0" : "translate-y-full"
          } absolute top-16 right-0 w-full bg-slate-700 opacity-90 p-4`}
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <ul className="flex flex-col h-full justify-center items-center gap-4 text-center">
            <h2 className="text-slate-100 font-bold text-5xl mb-5">Menu</h2>
            <li>
              <a
                href="#home"
                className="text-xl font-semibold text-slate-100 hover:text-sky-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-xl font-semibold text-slate-100 hover:text-sky-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-xl font-semibold text-slate-100 hover:text-sky-500"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-xl font-semibold text-slate-100 hover:text-sky-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navheader;
