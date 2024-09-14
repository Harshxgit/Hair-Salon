import React from 'react'
import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({className , white , px , children ,href,onClick}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-color hover:text-n-14 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`
  const spanclasses = `relative z-10`
  const renderButton = () =>(
    <button className={classes} onClick={onClick}>
      <span className={spanclasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  )

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanclasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href?renderLink() :renderButton()
}

export default Button