import React from "react";
import { Bounce, Fade } from "react-reveal";
import audit from "../../../assets/icons/audit.png";
import design from "../../../assets/icons/design.png";
import mobile from "../../../assets/icons/mobile.png";
import service from "../../../assets/icons/service.png";
import other from "../../../assets/icons/other.png";
import crown from "../../../assets/crown.png";

const ServiceSection = () => {
  const services = [
    {
      icon: audit,
      title: "AI Automation & Intelligent Workflows",
      branch: [
        {
          title: "No-Code Automation ",
          desc: "Automate repetitive business tasks for customer acquisition, retention and process automation.",
        },
        {
          title: "AI-Driven Workflow Optimization  ",
          desc: "Streamline operations with smart automation",
        },
        {
          title: "Intelligent Chatbots & Virtual Assistants ",
          desc: "24/7 AI-powered customer engagement",
        },
        {
          title: "AI-Powered Document Processing ",
          desc: "Extract, categorize, and analyze data instantly",
        },
      ],
    },
    {
      icon: design,
      title: "Predictive Analytics & Machine Learning",
      branch: [
        {
          title: "AI-Powered Business Intelligence  ",
          desc: "Get insights that drive profitability",
        },
        {
          title: "Real-Time Predictive Analytics ",
          desc: "Anticipate trends and optimize decision-making",
        },
        {
          title: "Custom Machine Learning Models  ",
          desc: "AI tailored to your unique business needs",
        },
      ],
    },
    {
      icon: audit,
      title: "AI-Driven Software Development",
      branch: [
        {
          title: "AI-Powered Web & Mobile Apps ",
          desc: "Smart, scalable applications with AI capabilities",
        },
        {
          title: "Enterprise AI Solutions ",
          desc: "Automate operations, enhance efficiency",
        },
        {
          title: "API Development & AI Integration  ",
          desc: "AI-enhanced interoperability",
        },
      ],
    },
    {
      icon: mobile,
      title: "Cloud & DevOps for AI Workflows",
      branch: [
        {
          title: "Cloud-Based AI Deployments ",
          desc: "Scalable AI models in AWS, Azure, GCP",
        },
        {
          title: "CI/CD Pipelines for AI Applications ",
          desc: "Faster, automated AI model deployment",
        },
        {
          title: "Serverless AI & Microservices ",
          desc: "Reduce infrastructure costs with lightweight AI solutions",
        },
      ],
    },
  ];
  return (
    <div>
      <div id="services" className="space-y-10 py-20">
        <Fade bottom>
          <div className="relative py-7">
            <p className="text-[50px] font-extrabold">Our Services</p>
            {/* <p className="text-lg font-medium">
              The entire cycle of digital transformation effortlessly handled
              for you.
            </p> */}
            <img alt="crown" src={crown} className="absolute -top-5 -left-20" />
          </div>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {services.map(({ title, icon, branch }) => (
            <Bounce bottom>
              <div className="space-y-3 p-5 border rounded-xl shadow">
                <img alt={title} src={icon} className="w-[45px]" />
                <p className="text-xl font-semibold">{title}</p>
                <div className="flex flex-col justify-start items-center w-full gap-4">
                  {branch.map((br) => (
                    <div className="w-full rounded-md bg-gray-100 p-3">
                      <p className="text-lg font-medium">{br.title}</p>
                      <p className="text-gray-700">{br.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Bounce>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
