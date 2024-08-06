import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
// import {products} from '../assets/Hero'


const Text = ["Hair cut", "Make-up", "Spa", "Beard"];
const Hero = () => {
  return (
    <section className="pt-[12rem] -mt-[5.25rem] lg:mt-[2rem] ">
      <div className="relative ">
        <div className="text-n-1 font-playfair text-3xl lg:text-8xl px-6 lg:px-16">
          <h1>Welcome to Our salon</h1>
          <div className="text-n-1 font-playfair text-xl lg:text-8xl mt-2 ml-1 lg:ml-2 flex">
            We Do{" "}
            <span className="lg:text-8x  text-n-14">
              <Render />
            </span>
          </div>
           {/* <div><img src={products} height={44} width={44} /></div>  */}
        </div>
      </div>
    </section>
  );
};
const Render = () => {
  const [index, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(()=>{
     console.log("second")
      setTextIndex((index)=>index+1)
    },3000)
    //unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <TextTransition className=" ml-2 lg:ml-4" springConfig={presets.gentle}>
        {Text[index % Text.length]}
      </TextTransition>
    </>
  );
};

export default Hero;
