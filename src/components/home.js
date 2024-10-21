import React from "react";
import Typewriter from "typewriter-effect";
import ProfileImage from "../assets/img/profile.jpg";

const Home = () => {
  return (
    <section id="home">
      <div className="container px-9 h-screen lg:max-w-screen-lg max-w-screen-md mx-auto">
        <div className="flex flex-col-reverse lg:flex-row h-full items-center">
          <div className="basis-full lg:basis-2/3">
            <h1 className="font-light text-xl md:text-3xl text-slate-500 text-center lg:text-start tracking-widest mb-3 md:mb-7">
              Muhammad Aqilul Muttaqin
            </h1>
            <h2 class="font-bold md:font-semibold text-2xl md:text-7xl text-center lg:text-start bg-gradient-to-r from-slate-900 to-sky-800 bg-clip-text text-transparent md:absolute">
              <Typewriter
                options={{
                  strings: ["Fullstack Developer", "UI/UX Enthusiast"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                }}
              />
            </h2>
            <p className="font-normal text-sm md:text-base text-center lg:text-start text-slate-500 mt-3 md:mt-32 mb-10">
              A junior full-stack developer currently focusing on Web
              Development. In addition, I am also interested in UX/UI Design. I
              love learning new things and am always open to new opportunities.
            </p>
            <div className="flex justify-center">
              <button className="font-normal text-slate-100 bg-gradient-to-r from-slate-900 to-sky-800 px-5 py-2 rounded-full shadow cursor-pointer transform transition-transform duration-300 hover:scale-105">
                Download CV
              </button>
            </div>
          </div>
          <div className="basis-full lg:basis-1/3 flex items-center justify-end">
            <div className="h-60 w-60 md:h-80 md:w-80 lg:h-72 lg:w-60 rounded-full overflow-hidden animate-uneven-border-radius">
              <img
                src={ProfileImage}
                alt="profile"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
