import React, { useState } from "react";
import Button from "../Design/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { navigation } from "../constant/index";
import { enablePageScroll,disablePageScroll } from "scroll-lock";
import { useLocation } from "react-router-dom";

const Header = () => {
    const pathname = useLocation()
  const [openNavigation, setNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setNavigation(false);
      enablePageScroll()
    } else {
      setNavigation(true);
      disablePageScroll()
    }
  };
  const handleClick = ()=>{
    if(!openNavigation) return;
    enablePageScroll()
    setNavigation(false)
  }
  return (
    // useScroll Value
    <div className={`top-0  fixed w-full z-50 ${openNavigation?"bg-n-8":""}`}>
      <div className="flex text-white px-4  lg:px-28 lg:-mt-4 justify-between items-center font-playfair">
        <a href="nav" className="block w-[12rem]">
            {/* <img src={Cologo} alt="" /> */}
            CLASS-ONE
        </a>
      <nav className={`${openNavigation?"flex":"hidden"}   fixed top-[2rem] bottom-0 right-0 left-0 bg-n-8 lg:flex lg:static  lg:bg-transparent `}> 
        <div className="flex flex-col items-center justify-center m-auto lg:flex-row z-2">
        {navigation.map((item)=>(
            <a key={item.id} href={item.url} onClick={handleClick} className={`block relative text-n-1 font-playfair text-2xl hover:text-n-14 transition-colors px-4 py-10 ${item.url==pathname.hash ? "z-2 lg:text-n-14":"lg:text-n-1/50"}`}>
                {item.title}
            </a>
        ))
        }
        </div>
      </nav>
      <Button onClick={toggleNavigation} className="ml-auot lg:hidden " px="px-3">
        <MenuSvg openNavigation={openNavigation} />
      </Button>
      {/* <Button className="text-2xl text-n-1/50 hidden lg:block">
        Contact Us
      </Button> */}
      </div>
    </div>
  );
};

export default Header;
