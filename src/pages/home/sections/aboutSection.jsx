import React from "react";
import { Bounce } from "react-reveal";
import agency from "../../../assets/agency.png";
import vision from "../../../assets/icons/vision.png";
import mission from "../../../assets/icons/mission.png";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Button } from "antd";

const AboutSection = () => {
  return (
    <>
      <div
        id="about"
        className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-10 lg:gap-32 py-20"
      >
        <Bounce left>
          <div className="w-full md:w-[35%]">
            <img alt="agency" src={agency} />
          </div>
        </Bounce>
        <Bounce right>
          <div className="w-full md:w-[65%] space-y-5 flex flex-col gap-4 lg:max-w-4xl">
            <p className="text-4xl font-bold">
              Transforming Businesses with AI & Automation
            </p>
            <p className="text-lg font-semibold">
              At Spatial Global Technology , we specialize in AI-driven
              automation, intelligent software solutions, and cloud-native
              architectures that empower businesses to scale effortlessly.
            </p>
            <div className="flex flex-col gap-6">
              <p className="md:w-[250px] text-center text-lg font-semibold py-2 bg-blue rounded-md text-white">
                Why choose us?
              </p>
              <div className="w-full flex flex-col gap-4 justify-start items-start">
                {[
                  {
                    title: "AI-First Approach ",
                    desc: "Automation at the core of everything we build",
                  },
                  {
                    title: "End-to-End AI & Software Development ",
                    desc: "From AI strategy to full deployment",
                  },
                  {
                    title: "Custom AI Models & Machine Learning ",
                    desc: "Tailored solutions for maximum efficiency",
                  },
                  {
                    title: "Data-Driven Decision Making ",
                    desc: "Actionable insights to optimize your business",
                  },
                  {
                    title: "Security & Compliance ",
                    desc: "AI solutions built with enterprise-grade security",
                  },
                ].map((value) => (
                  <p className="w-full flex gap-4 border-b-2 py-3">
                    <BsFillPatchCheckFill size={26} className="text-green" />
                    <p className="flex flex-col gap-1">
                      <span className="text-lg font-medium">{value.title}</span>
                      <span className="text-gray-700">{value.desc}</span>
                    </p>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Bounce>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center p-10 rounded-lg bg-blue gap-y-6">
        <p className="text-xl font-semibold max-w-xl text-white">
          Let’s Build the Future of AI-Powered Business!
        </p>
        <Button
          href="#message"
          className="border-none bg-white w-full md:w-64 !py-3 min-h-[50px] rounded-md text-blue font-semibold hover:scale-105 hover:!border-none xl:text-lg transition duration-300"
        >
          Contact us
        </Button>
      </div>
    </>
  );
};

export default AboutSection;
