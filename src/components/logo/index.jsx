import React from "react";
import logo from "../../assets/logo-big.png";

function Logo() {
  return (
    <a href="/" className="w-fit">
      <img alt="logo" src={logo} className="max-h-[72px] hidden lg:block" />
      <img alt="logo" src={logo} height={20} className=" lg:hidden" />
    </a>
  );
}

export default Logo;
