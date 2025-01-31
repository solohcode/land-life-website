import React from "react";
import ImageSlider from "../../../components/slider/imageSlide";
import { Bounce, Fade } from "react-reveal";
import { Carousel, Divider, Rate } from "antd";
import academy from "../../../assets/clients/academy.png";
import cubevest from "../../../assets/clients/cubevest.jpg";
import paysmosmo from "../../../assets/clients/paysmosmo.jpg";
import sesis from "../../../assets/clients/sesis.png";
import zimc from "../../../assets/clients/zimc.png";
import gmc from "../../../assets/clients/gmc.png";
import crown from "../../../assets/crown.png";

const ClientSection = () => {
  const slides = [
    {
      url: "www.paysmosmo.com",
      name: "Mr. Sheriff Alubankudi",
      description:
        "Obviously it’s natural to be skeptical digital presence. After we stumble Paysmosmo idea; the option that was on the table is Techend Incubation which they did in a short while",
    },
    {
      url: "www.avi-ng.org",
      name: "AbdurRauf Oyemala",
      description:
        "A big thank you for all your effort and dedication to our website design. We were excited for the design and responsiveness the site. Thank you for your professionalis and patience with us throughout this development.",
    },
    {
      name: "Taiwo Kaffo",
      url: "www.grittymindsconcepts.com",
      description:
        "We thank you for being proficient, ethical and creative in handling GMCs' social media space.",
    },
  ];

  const sliderOptions = (append) => ({
    arrows: true,
    autoPlay: true,
    additionalTransfrom: 0,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "container-with-dots",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    pauseOnHover: true,
    renderArrowsWhenDisabled: false,
    renderButtonGroupOutside: false,
    renderDotsOutside: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 464,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
    rewind: false,
    rewindWithAnimation: false,
    rtl: false,
    shouldResetAutoplay: true,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    swipeable: true,
    ...append,
  });

  const clients = [
    { img: zimc, name: "ZERO INTEREST MULTIPURPOSE COOPERATIVE" },
    { img: academy, name: "ACADEMY VOLUNTEER INITIATIVE" },
    { img: paysmosmo, name: "PAYSMOSMO E-COMMERCE" },
    { img: gmc, name: "GRITTY MINDS CONCEPTS" },
    { img: cubevest, name: "CUBEVEST FINTECH" },
    { img: sesis, name: "SESIS COOPERATIVE SOCIETY" },
  ];
  return (
    <div id="clients" className="space-y-5 py-20">
      <Fade bottom>
        <div className="relative py-7">
          <p className="text-[50px] font-extrabold">Our Clients</p>
          <p className="text-lg font-medium">
            Here are what our esteemed satisfied clients have to say about us.
          </p>
          <img alt="crown" src={crown} className="absolute -top-5 -left-20" />
        </div>
      </Fade>
      <Bounce bottom>
        <Carousel {...sliderOptions()}>
          {slides.map(({ name, description, url }) => (
            <div className=" flex justify-center items-center m-2 w-full md:!w-[450px]">
              <div className="w-full min-h-[300px] border-2 border-yellow rounded-xl p-5 flex flex-col space-y-5 text-center mx-4 lg:mx-auto">
                <p className="text-2xl font-bold">{name}</p>
                <Rate disabled defaultValue={5} />
                <Divider className="m-0" />
                <p className="text-sm font-normal">{description}</p>
                <a
                  className="text-blue hover:text-green"
                  href={`https://${url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {url}
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </Bounce>
      <div className=" w-full flex flex-col gap-8">
        <Fade bottom>
          <p className="text-lg font-semibold !mt-4">Some of our Clients</p>
        </Fade>
        <Bounce bottom>
          <ImageSlider images={clients} />
        </Bounce>
      </div>
    </div>
  );
};

export default ClientSection;
