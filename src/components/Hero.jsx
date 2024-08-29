import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import Button from "../Design/Button";
import View from "../assets/img/View.jpg";
import Onepng from '../assets/img/Onepng.png'
const Text = ["Hair cut", "Make-up", "Spa", "Beard"];
const Hero = () => {
  return (
    <section className="  mt-[10rem]   lg:mt-[10rem]" id="hero">
      <div className="relative ">
        <div className=" relattive flex item-start z-0 w-1/3">
          <div className="text-n-1 font-playfair  p-2 lg:w-1/2 fixed lg:right-6 flex flex-col items-start ">
            <div className="text-5xl lg:text-7xl text-n-2 mt-28 lg:mt-0">We Love</div>

            <div className=" font-playfair text-7xl lg:text-8xl  right-28 ml-2 lg:text-[125px]  text-n-14">
              <Render />
            </div>
            <div className="lg:text-2xl text-sm  lg:p-2 lg:mr-6 text-n-10 ml-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              in adipisci sint possimus quo inventore amet corrupti fuga, error,
              alias{" "}
            </div>
            <Button className=" ml-2 mt-2 lg:ml-4 text-bold text-xl border-n-4 border-2 rounded-lg">
              Contact US
            </Button>
          </div>
        </div>
        <div className="absolute -top-[7rem]">
          <img src={Onepng} className=" mix-blend-soft-light" height={300} width={300} alt="bg"/>
        </div>
      </div>
    </section>
  );
};
const Render = () => {
  const [index, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("second");
      setTextIndex((index) => index + 1);
    }, 4000);
    //unmounted
    //bcz memory leak
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    {/* component render */}
      <TextTransition springConfig={presets.gentle}>
        {Text[index % Text.length]}
      </TextTransition>
    </>
  );
};
// i m checking the git command
export default Hero;
