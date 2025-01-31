import React from "react";
import { Button, Form, Input } from "antd";
import crown from "../../assets/crown.png";
import Header from "../../components/header";
import "react-multi-carousel/lib/styles.css";
import { Bounce, Flip } from "react-reveal";
import { BsFillPatchCheckFill } from "react-icons/bs";
import AiImage from "../../assets/ai-image.png";
import Footer from "../../components/footer";
import AboutSection from "./sections/aboutSection";
import ServiceSection from "./sections/serviceSection";
import PortfolioSection from "./sections/portfolioSection";
import BlogSection from "./sections/blogSection";
import MesageSection from "./sections/mesageSection";
import ImageSlider from "../../components/slider/imageSlide";
import academy from "../../assets/clients/academy.png";
import cubevest from "../../assets/clients/cubevest.jpg";
import paysmosmo from "../../assets/clients/paysmosmo.jpg";
import sesis from "../../assets/clients/sesis.png";
import zimc from "../../assets/clients/zimc.png";
import gmc from "../../assets/clients/gmc.png";
import { FaCircleArrowUp } from "react-icons/fa6";

function HomePage() {
  const handleScroll = () => window.scrollTo({ behavior: "smooth", top: 0 });
  const clients = [
    { img: zimc, name: "ZERO INTEREST MULTIPURPOSE COOPERATIVE" },
    { img: academy, name: "ACADEMY VOLUNTEER INITIATIVE" },
    { img: paysmosmo, name: "PAYSMOSMO E-COMMERCE" },
    { img: gmc, name: "GRITTY MINDS CONCEPTS" },
    { img: cubevest, name: "CUBEVEST FINTECH" },
    { img: sesis, name: "SESIS COOPERATIVE SOCIETY" },
  ];

  return (
    <div className="w-full">
      <Header />
      <div className="w-full p-5 md:px-10 lg:px-20 xl:px-36 lg:py-20 md:space-y-20">
        <Bounce bottom>
          <div className="relative">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 relative pb-20 gap-x-40">
              <div className="w-full md:w-[90%] lg:max-w-[800px]">
                {/* <p className="text-2xl font-semibold">
                A space where Innovation Meets Excellence!
              </p> */}
                <div className="relative py-7">
                  <p className="text-[50px] font-extrabold">
                    AI-Driven Automation for the Future of Business
                  </p>
                  <img
                    alt="crown"
                    src={crown}
                    className="absolute -top-5 -left-20"
                  />
                </div>
                <p className="text-2xl font-semibold">
                  Unlock the power of AI automation to streamline operations,
                  cut costs, and drive efficiency. Our intelligent software
                  solutions leverage machine learning, predictive analytics, and
                  process automation to help businesses scale faster.
                </p>
                <div className="mt-8">
                  <p className="text-lg font-medium mb-5">
                    🚀 Get a Free AI Consultation Today!
                  </p>
                  <Form
                    layout="horizontal"
                    className="w-full flex justify-start items-center gap-5"
                  >
                    <Form.Item className="!m-0 !p-0 w-full">
                      <Input
                        size="large"
                        placeholder="Email address"
                        className="h-[60px] text-lg "
                      />
                    </Form.Item>
                    <Button className="h-[60px] bg-blue text-white px-6 hover:!text-white">
                      Request Demo
                    </Button>
                  </Form>
                </div>
              </div>
              <Flip left>
                <div className="relative rounded-full overflow-hidden bg-blue">
                  <img alt="your app" src={AiImage} />
                </div>
              </Flip>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5">
              {[
                {
                  title: "AI-Powered Business Process Automation ",
                  desc: "Reduce manual effort and boost efficiency",
                },
                {
                  title: "Smart Decision-Making with Predictive AI  ",
                  desc: "Gain insights before problems arise",
                },
                {
                  title: "Seamless AI Integration  ",
                  desc: "Enhance your existing systems with intelligent automation",
                },
              ].map((value) => (
                <div className="w-full rounded-lg relative py-8 px-10 bg-gray-100 hover:scale-105 cursor- transition duration-300">
                  <p className="text-xl font-semibold mb-2">{value.title}</p>
                  <p>{value.desc}</p>
                  <span className="absolute -left-4 -top-2">
                    <BsFillPatchCheckFill size={28} className="text-green" />
                  </span>
                </div>
              ))}
            </div>
            <Bounce bottom>
              <h2 className="w-full text-center text-2xl font-bold mt-24">
                Trusted by Industry Leaders
              </h2>
              <ImageSlider images={clients} />
            </Bounce>
          </div>
        </Bounce>
        <AboutSection />
        <ServiceSection />
        <PortfolioSection />
        <BlogSection />
        <MesageSection />
      </div>
      <Footer />
      <span
        className="fixed bottom-10 right-10 p-5 rounded-full bg-blue shadow-xl shadow-black/20 text-white hover:scale-105 transition duration-300 cursor-pointer"
        onClick={handleScroll}
        title="Scroll to top"
      >
        <FaCircleArrowUp size={25} />
      </span>
    </div>
  );
}

export default HomePage;
