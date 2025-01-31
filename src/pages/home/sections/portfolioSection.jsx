import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
import { Bounce } from "react-reveal";
import { Link } from "react-router-dom";
import crown from "../../../assets/crown.png";
import portfolio from "../../../assets/portfolio.png";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";

const PortfolioSection = () => {
  const caseStudy = [
    {
      title: "AI-Driven Claims Processing for an Insurance Company",
      challenge: "Manual claims handling was slow and error-prone",
      solution:
        "Implemented an AI-powered document processing and automation workflow",
      impact:
        "70% faster processing, 90% fewer errors, improved customer experience",
    },
    {
      title: "AI Chatbots for E-Commerce Customer Support",
      challenge: "High customer service costs and long wait times",
      solution:
        "AI chatbot with NLP for automated responses and order tracking",
      impact: "24/7 support, 40% cost reduction, customer satisfaction boost",
    },
  ];
  return (
    <div
      id="portfolio"
      className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-10 py-20"
    >
      <Bounce right>
        <div className="w-full  space-y-3 relative py-7 flex flex-col gap-8">
          <img alt="crown" src={crown} className="absolute -top-5 -left-20" />
          <p className="text-[50px] font-extrabold">Case Study and Portfolio</p>
          <p className="text-3xl font-medium">
            How AI is Revolutionizing Businesses
          </p>
          <div className="w-full flex flex-col gap-8 mt-8">
            {caseStudy.map(({ title, challenge, solution, impact }) => (
              <div className="flex flex-col gap-10 w-full">
                <p className="text-2xl font-semibold">Case Study</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                  <div className="p-10 bg-gray-100 rounded-md relative">
                    <p className="text-lg font-medium ">Challenge</p>
                    <p>{challenge}</p>
                    <span className="absolute left-3 -top-8 p-3 bg-yellow rounded-full text-white border-8 border-white">
                      <MdReportProblem size={24} />
                    </span>
                  </div>
                  <div className="p-10 bg-gray-100 rounded-md relative">
                    <p className="text-lg font-medium ">Solution</p>
                    <p>{solution}</p>
                    <span className="absolute left-3 -top-8 p-3 bg-blue rounded-full text-white border-8 border-white">
                      <RiQuestionAnswerFill size={24} />
                    </span>
                  </div>
                  <div className="p-10 bg-gray-100 rounded-md relative">
                    <p className="text-lg font-medium ">Impact</p>
                    <p className="text-medium">{impact}</p>
                    <span className="absolute left-3 -top-8 p-3 bg-green rounded-full text-white border-8 border-white">
                      <BsGraphUpArrow size={24} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="#"
            className="min-w-[150px] max-w-[450px] py-3 px-7 bg-blue rounded-md text-white hover:bg-green flex justify-center items-center gap-3 mt-6"
          >
            Explore More AI-Powered Success Stories <TiArrowForwardOutline />
          </Link>
        </div>
      </Bounce>
    </div>
  );
};

export default PortfolioSection;
