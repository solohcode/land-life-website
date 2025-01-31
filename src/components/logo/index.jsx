import React from "react";
import logo from "../../assets/logo-big.png";
import logo2 from "../../assets/logo-small.png";

function Logo() {
  return (
    <a href="/" className="w-fit">
      <img alt="logo" src={logo} height={60} className=" hidden lg:block" />
      <img alt="logo" src={logo} height={20} className=" lg:hidden" />
    </a>
  );
}

export default Logo;
