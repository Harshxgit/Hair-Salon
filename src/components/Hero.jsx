import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const Text = ["Hair cut", "Make-up", "Spa", "Beard"];
const Hero = () => {
  return (
    <section className=" ">
      <div className="relative ">
        <div className=" -mt-[5.25rem]   lg:mt-[10rem]  z-0">

     
        <div className="text-n-1 font-playfair text-3xl  w-1/2 fixed right-6 flex flex-col items-start ">
          <div className="text-7xl text-n-2">We Love</div>

          <div className=" font-playfair text-xl lg:text-8xl  right-28 lg:ml-2 lg:text-[125px]  text-n-14">
            <Render />
          </div>
          <div className="text-2xl p-4 mr-6 text-n-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in adipisci sint possimus quo inventore amet corrupti fuga, error, alias </div>
          {/* <div><img src={products} height={44} width={44} /></div>  */}
        </div>
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
      <TextTransition springConfig={presets.gentle}>
        {Text[index % Text.length]}
      </TextTransition>
    </>
  );
};

export default Hero;
