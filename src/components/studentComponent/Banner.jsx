import React from "react";

const Banner = () => {
  return (
    <>
    
    <div className="banner bg-gray-800 text-white  text-center md:hidden py-16">
        <img src="https://www.mooc.org/hubfs/what-are-the-pros-and-cons-of-online-learning.jpg" alt="Courses Banner" className="mx-auto mb-8 rounded-lg" />
        <h1 className="text-4xl font-bold">Welcome to  SkillForGe</h1>
        <p className="mt-4 text-lg">Explore a wide range of courses tailored for you</p>
      </div>
    <div className="banner flex bg-gray-800 text-slate-100 py-20 text-center border-b shadow-lg justify-center items-center m-auto border md:block hidden">
      
      
      <div className="flex w-full m-auto justify-evenly  ">
      <img
        src="./assets/adimg2.png"
        alt="Courses Banner"
        className="fade-eff rounded-lg w-60 h-80 hidden md:block"
      />
     
      
      <div className="flex-row welcome-note md:block hidden ">
      <h1 className="text-5xl font-bold grid">Welcome to SkillForGe</h1>
      <p className="mt-4 text-lg welcome-note2">
        Explore a wide range of courses tailored for you
      </p>
      </div>
      <img
        src="./assets/adimg2.png"
        alt="Courses Banner"
        className="fade-eff rounded-lg w-60 h-80 hidden md:block"
      />
      </div>
      
    </div>
    </>
  );
};

export default Banner;
