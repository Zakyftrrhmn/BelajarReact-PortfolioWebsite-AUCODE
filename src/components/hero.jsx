import React from "react";
import HeroPic from "../assets/black.png";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

const hero = () => {
  return (
    <section className="flex items-center justify-around p-10 space-x-10 lg:flex-row flex-col space-y-10 text-white">
      <div className="lg:w-1/3 w-fit">
        <p className="text-4xl mb-5 text-slate-300">I'm</p>
        <h1 className="text-6xl">Zaky Fathur Rahman</h1>
        <hr />
        <p className="mt-10 text-xl text-slate-300 font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolores nisi doloremque quae, laboriosam quidem sequi, repellat
          corporis officiis quia deserunt.
        </p>
      </div>
      <div className="w-1/3 items-center w-fit">
        <img
          src={HeroPic}
          alt=""
          width={250}
          height={250}
          className="rounded-full w-full border-8 border-white"
        />
      </div>
      <div className="w-1/3 w-fit">
        <p className="text-4xl mb-4">About Me</p>
        <p className="text-slate-300">
          Let's build quality in programming ad design with our services
        </p>
        <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
          Show More...
        </button>

        <div className="flex items-center space-x-4 mt-5 cursor-pointer">
          <BsFacebook
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsTwitter
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsInstagram
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsPinterest
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default hero;
