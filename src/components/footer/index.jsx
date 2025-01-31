import React from "react";
import logo from "../../assets/logo-big.png";
import { LuMapPin } from "react-icons/lu";
import { FiPhone, FiMail } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { Divider } from "antd";
import { Bounce } from "react-reveal";

function Footer() {
  return (
    <div className="w-full bg-[#fffbe5] p-10 md:p-20 lg:px-40 !pb-5">
      <Bounce bottom>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-center items-center md:justify-start md:items-start gap-y-10">
          <div className="md:col-span-2 space-y-5">
            <div className="w-full flex justify-center items-center lg:justify-start">
              <img alt="logo" src={logo} className="h-[60px]" />
            </div>
            <ul className="w-full text-sm font-normal list-disc space-y-1 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
              {[
                "AI Automation & Intelligent Workflows",
                "Predictive Analytics & Machine Learning",
                "AI-Driven Software Development",
                "Cloud & DevOps for AI Workflows",
                "And many more...",
              ].map((idx) => (
                <li className="text-center lg:text-left ">{idx}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <p className="w-full text-xl font-medium text-center md:text-left">
              Connect With Us
            </p>
            <div className="space-y-3 flex flex-row flex-wrap md:flex-col gap-y-3 gap-x-10 justify-center">
              {[
                {
                  name: "Twitter",
                  icon: <FaSquareTwitter />,
                  url: "https://twitter.com/techendinc",
                },
                {
                  name: "Facebook",
                  icon: <FaFacebookSquare />,
                  url: "https://web.facebook.com/techendinc",
                },
                {
                  name: "Instagram",
                  icon: <RiInstagramFill />,
                  url: "https://www.instagram.com/techendinc",
                },
                {
                  name: "LinkedIn",
                  icon: <FaLinkedin />,
                  url: "https://www.linkedin.com/company/thetechend",
                },
              ].map(({ name, icon, url }) => (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 hover:text-blue"
                >
                  <p className="text-xl">{icon}</p>
                  <p className="text-lg">{name}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-xl font-medium w-full text-center md:text-left">
              Contact Us
            </p>
            <div className="space-y-3">
              {[
                // {
                //   name: "40b Seinde Calisto Crescent, Oshodi, Lagos.",
                //   icon: <LuMapPin />,
                // },
                {
                  name: "info@spatialglobaltechnology.com",
                  icon: <FiMail />,
                  url: "mailto:info@spatialglobaltechnology.com",
                },
                {
                  name: "+44 7916637129",
                  icon: <FiPhone />,
                  url: "tel:+447916637129",
                },
              ].map(({ name, icon, url }) => (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center md:justify-start items-center gap-3 hover:text-blue"
                >
                  <p className="text-xl">{icon}</p>
                  <p className="text-sm">{name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Bounce>
      <Divider />
      <Bounce bottom>
        <p className="text-base text-center">{`© Copyright ${new Date().getFullYear()}. Powered by Techend Limited`}</p>
      </Bounce>
    </div>
  );
}

export default Footer;
