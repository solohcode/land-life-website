import React from "react";
import { Fade } from "react-reveal";
import crown from "../../../assets/crown.png";
import { Link } from "react-router-dom";
import { TiArrowForwardOutline } from "react-icons/ti";
const BlogSection = () => {
  const blogs = [
    {
      image:
        "https://images.prismic.io/codiste-website/Zg-lIRrFxhpPBUvd_AIinBusinessProcessAutomation.webp?auto=format,compress",
      title: "How AI is Transforming Business Automation",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDWP1cWMmsBo6u06g_Drefv6SKy2JJG89yw&s",
      title: "5 Ways AI Can Cut Your Operational Costs by Half",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVqpR-Hz0DCBUHUVhqC9DS2c1q49_gZBI4g&s",
      title: "The Future of AI-Driven Software Development",
    },
  ];
  return (
    <div id="blog" className="space-y-5 py-20">
      <Fade bottom>
        <div className="relative py-7">
          <p className="text-[50px] font-extrabold">AI Insights & Blog</p>
          <div className="flex justify-between items-center">
            <p className="w-full md:w-fit text-lg font-medium">
              Stay Ahead with AI & Automation Trends
            </p>
            <Link to="#" className="hidden md:block hover:underline">
              Read more &gt;
            </Link>
          </div>
          <img alt="crown" src={crown} className="absolute -top-5 -left-20" />
        </div>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog) => (
          <div className="relative w-full flex-col gap-5 rounded-md shadow-lg shadow-gray-300 p-10 hover:scale-105 transition duration-300">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[300px] object-cover rounded-md mb-7 shadow"
            />
            <p className=" text-lg font-bold">{blog.title}</p>

            <span
              className="absolute bottom-5 right-5 rounded-full p-3 bg-blue text-white cursor-pointer hover:rotate-[360deg] transition duration-300"
              title={`Open ${blog.title}`}
            >
              <TiArrowForwardOutline size={22} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
