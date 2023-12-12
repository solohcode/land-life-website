import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Button, Divider, Form, Input, Rate, notification } from 'antd'
import { Link } from 'react-router-dom'
import { RxRocket } from 'react-icons/rx'
import crown from '../../assets/crown.png'
import Header from '../../components/header'
import { BiSolidMouse } from 'react-icons/bi'
import agency from '../../assets/agency.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import home_top from '../../assets/home-top.png'
import { Bounce, Flip, Fade } from 'react-reveal'
import { TiArrowForwardOutline } from 'react-icons/ti'
import portfolio from '../../assets/portfolio.png'
import vision from '../../assets/icons/vision.png'
import mission from '../../assets/icons/mission.png'
import audit from '../../assets/icons/audit.png'
import design from '../../assets/icons/design.png'
import mobile from '../../assets/icons/mobile.png'
import service from '../../assets/icons/service.png'
import other from '../../assets/icons/other.png'
// import profile1 from '../../assets/icons/user_1.png'
// import profile2 from '../../assets/icons/user_2.png'
// import profile3 from '../../assets/icons/user_3.png'
import saka from '../../assets/team/saka.jpeg'
import kaffo from '../../assets/team/kaffo.png'
import sheriff from '../../assets/team/sheriff.png'
import academy from '../../assets/clients/academy.png'
import cubevest from '../../assets/clients/cubevest.jpg'
import paysmosmo from '../../assets/clients/paysmosmo.jpg'
import sesis from '../../assets/clients/sesis.png'
import zimc from '../../assets/clients/zimc.png'
import gmc from '../../assets/clients/gmc.png'
import Footer from '../../components/footer'

function HomePage() {
  const [isLoading, setIsLoading] = useState(false)
  const handleScroll = () => window.scrollTo({behavior: "smooth", top: 500})
  const services = [
    {
      icon: audit,
      title: "IT Audit and Advisory",
      description: "At TechEnd Ltd, we take pride in offering cutting-edge IT Audit and Advisory services designed to fortify the technological backbone of your business. In an era where digital landscapes evolve rapidly, our commitment is to ensure that your business not only keeps pace but stays ahead.",
    },
    {
      icon: design,
      title: "UX/UI Graphic Design and Prototyping",
      description: "At TechEnd Ltd, we take pride in transforming digital visions into captivating, user-centric realities through our specialized UX/UI Graphic Design and Prototyping services. In an era where user experience is paramount, we understand the significance of seamless, visually appealing interfaces that leave a lasting impression.",
    },
    {
      icon: audit,
      title: "Custom Software Development",
      description: "At TechEnd Ltd, we redefine possibilities through our bespoke Custom Software Development service. As a pioneering force in the tech industry, we understand that off-the-shelf solutions don't always cut it. That's where our commitment to crafting tailor-made software comes into play.",
    },
    {
      icon: mobile,
      title: "Mobile App Development",
      description: "At TechEnd Ltd, we redefine possibilities through our cutting-edge Mobile App Development service. Our commitment is to transform your unique ideas into functional and engaging mobile applications that stand out in the digital landscape.",
    },
    {
      icon: service,
      title: "Software as a service (SaaS)",
      description: "IA pioneering company at the forefront of providing cutting-edge Software as a Service (SaaS) solutions. TechEnd Ltd is committed to revolutionizing the way businesses operate by delivering innovative and scalable software solutions that cater to the evolving needs of the digital landscape.",
    },
    {
      icon: other,
      title: "Other Services",
      description: "At TechEnd Ltd, we believe in going beyond the expected, and our commitment to innovation extends to our comprehensive suite of services. Introducing \"Other Services\" - a category that goes beyond conventional offerings, designed to cater to your unique needs and elevate your experience with us.",
    },
  ]

  const team = [
    {
      img: sheriff,
      // img: profile1,
      name: "OLADEJO SHERIFF",
      title: "Managing Director"
    },
    {
      img: saka,
      // img: profile2,
      name: "NURUDEEN SAKA",
      title: "Chief Tech Officer"
    },
    {
      img: kaffo,
      // img: profile3,
      name: "TAIWO KAFFO",
      title: "Executive Director"
    },
  ]

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
    responsive: {
      desktop: {
        items: 2,
        partialVisibilityGutter: 40,
        breakpoint: {max: 3000, min: 1024},
      },
      mobile: {
        items: 1,
        partialVisibilityGutter: 30,
        breakpoint: {max: 464, min: 0},
      },
      tablet: {
        items: 2,
        partialVisibilityGutter: 30,
        breakpoint: {max: 1024, min: 464},
      }
    },
    rewind: false,
    rewindWithAnimation: false,
    rtl: false,
    shouldResetAutoplay: true,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    swipeable: true,
    ...append,
  })
  const clientResponsive = {
    responsive: {desktop: {
      items: 3,
      partialVisibilityGutter: 40,
      breakpoint: {max: 3000, min: 1024},
    },
    mobile: {
      items: 1,
      partialVisibilityGutter: 30,
      breakpoint: {max: 464, min: 0},
    },
    tablet: {
      items: 2,
      partialVisibilityGutter: 30,
      breakpoint: {max: 1024, min: 464},
    }}
  }

  const slides = [
    {
      url: "www.paysmosmo.com",
      name: "Mr. Sheriff Alubankudi",
      description: "Obviously it’s natural to be skeptical digital presence. After we stumble Paysmosmo idea; the option that was on the table is Techend Incubation which they did in a short while",
    },
    {
      url: "www.avi-ng.org",
      name: "AbdurRauf Oyemala",
      description: "A big thank you for all your effort and dedication to our website design. We were excited for the design and responsiveness the site. Thank you for your professionalis and patience with us throughout this development.",
    },
    {
      name: "Taiwo Kaffo",
      url: "www.grittymindsconcepts.com",
      description: "We thank you for being proficient, ethical and creative in handling GMCs' social media space.",
    }
  ]

  const clients = [
    {img: zimc, name: "ZERO INTEREST MULTIPURPOSE COOPERATIVE"},
    {img: academy, name: "ACADEMY VOLUNTEER INITIATIVE"},
    {img: paysmosmo, name: "PAYSMOSMO E-COMMERCE"},
    {img: gmc, name: "GRITTY MINDS CONCEPTS"},
    {img: cubevest, name: "CUBEVEST FINTECH"},
    {img: sesis, name: "SESIS COOPERATIVE SOCIETY"},
  ]

  const sendEmailRequest = async (data) => {
    setIsLoading(true)
    await emailjs.send('service_r6f0n3c', "template_c8ab9cj", data, 'uCYvyy2Mprs9NYP5Y').then(
      result => {
        notification.success({
          message: 'Success!',
          description: `${result.text}, request sent successfully, response to be received within 24hours.`,
        })
      },
      error => {
        notification.error({
          message: 'Error!',
          description: error.text || 'error sending request, please retry.',
        })
      },
    )
    setIsLoading(false)
  }
  return (
    <div className='w-full'>
      <Header />
      <div className='w-full p-5 md:px-10 lg:px-20 xl:px-36 md:space-y-20'>
        <Bounce bottom>
          <div className='w-full flex flex-col md:flex-row justify-between items-center gap-5 relative pb-20'>
            <div className='w-full md:w-[90%]'>
              <p className='text-2xl font-semibold'>A space where Innovation Meets Excellence!</p>
              <div className='relative py-7'>
                <p className='text-[50px] font-extrabold'>We are kin to turning your idea into reality</p>
                <img alt='crown' src={crown} className='absolute -top-5 -left-20' />
              </div>
              <p className='text-2xl font-semibold'>working with you to overcome your business challenges using technology.</p>
            </div>
            <Flip left>
              <div>
                <img alt='your app' src={home_top} />
              </div>
            </Flip>
            <BiSolidMouse onClick={handleScroll} className='text-5xl absolute bottom-0 right-0 left-0 mx-auto text-blue hover:text-red cursor-pointer' />
          </div>
        </Bounce>

        <div id='about' className='w-full flex flex-col md:flex-row items-center gap-5 md:gap-10 py-20'>
          <Bounce left>
            <div className='w-full md:w-[35%]'>
              <img alt='agency' src={agency} />
            </div>
          </Bounce>
          <Bounce right>
            <div className='w-full md:w-[65%] space-y-5'>
              <p className='md:w-[250px] text-center text-lg font-semibold py-2 bg-blue rounded-3xl text-white'>We are expert team</p>
              <p className='text-4xl font-bold'>Who are we?</p>
              <p className='text-lg font-semibold'>We build custom software that drives innovation and social impact</p>
              <p className='text-base font-normal'>
                Techend LTD is one of the fastest-growing IT companies providing various solutions and services across industries. We provide complete solutions that include the development of mobile apps, web apps, and fin-tech solutions. Our Clientage has grown exponentially within years as we have had the privilege of working with clients from America, Australia, the United Kingdom, Saudi Arabia, Germany, India, Russia, and the Central Republic of Africa. 
                Our current target is to provide cost-effective & user-friendly solutions using the latest technological trends. 
              </p>
            </div>
          </Bounce>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-20'>
          <Bounce left>
            <div className='w-full rounded-3xl bg-[#F7F7F8] p-5 md:p-10 space-y-5'>
              <div className='flex items-center gap-5'>
                <img alt='vision icon' src={vision} className='w-[40px]' />
                <p className='text-2xl font-semibold'>Our vision</p>
              </div>
              <p className='text-lg font-medium'>Crafting Tomorrow's Possibilities</p>
              <p className='text-base font-normal text-[#4E4646]'>We envision a future where technology seamlessly integrates with human potential, transforming challenges into opportunities. At Techend, we strive to redefine industries, elevate experiences, and spark the evolution of possibilities through our innovative solutions.</p>
            </div>
          </Bounce>
          <Bounce right>
            <div className='w-full rounded-3xl bg-[#F7F7F8] p-5 md:p-10 space-y-5'>
              <div className='flex items-center gap-5'>
                <img alt='vision icon' src={mission} className='w-[40px]' />
                <p className='text-2xl font-semibold'>Our mission</p>
              </div>
              <p className='text-lg font-medium'>Innovation, Integrity, Impact</p>
              <p className='text-base font-normal text-[#4E4646]'>Our mission is to drive innovation with unwavering integrity, creating solutions that not only meet the needs of today but anticipate the demands of tomorrow. We aim to make a lasting impact, empowering businesses to thrive in the fast-paced world of technology.</p>
            </div>
          </Bounce>
        </div>

        <div id='services' className='space-y-10 py-20'>
          <Fade bottom>
            <div className='relative py-7'>
              <p className='text-[50px] font-extrabold'>Our Services</p>
              <p className='text-lg font-medium'>The entire cycle of digital transformation effortlessly handled for you.</p>
              <img alt='crown' src={crown} className='absolute -top-5 -left-20' />
            </div>
          </Fade>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>
            {services.map(({title, icon, description}) => (
              <Bounce bottom>
                <div className='space-y-3 p-5 border rounded-xl shadow'>
                  <img alt={title} src={icon} className='w-[45px]' />
                  <p className='text-base font-medium'>{title}</p>
                  <p className='text-sm font-normal'>{description}</p>
                </div>
              </Bounce>
            ))}
          </div>
        </div>

        <div id='portfolio' className='w-full flex flex-col md:flex-row items-center gap-5 md:gap-10 py-20'>
          <Bounce right>
            <div className='w-full md:w-[65%] space-y-3 relative py-7'>
              <img alt='crown' src={crown} className='absolute -top-5 -left-20' />
              <p className='text-[50px] font-extrabold'>Our Portfolio</p>
              <p className='text-lg font-medium'>As a beacon of innovation and a steadfast partner in your technological endeavors.</p>
              <p className='text-lg font-medium'>Want to see our projects?  Click on the Button below!</p>
              <p className='text-base font-normal'>We are delighted to present our portfolio, a testament to our commitment to excellence, innovation, and the relentless pursuit of technological advancements. At TechEnd Ltd, we don't just provide services; we craft transformative solutions that propel businesses into the future.</p>
              <p className='text-base font-normal'>Our portfolio is more than just a collection of projects; it's a testament to our unwavering commitment to excellence, innovation, and the transformative power of technology. Each project in our portfolio represents a unique challenge conquered, a problem ingeniously solved, and a partnership forged.</p>
              <Link to="/portfolio" className='w-[150px] py-2 px-5 bg-blue rounded-3xl text-white hover:bg-green flex justify-center items-center gap-3'>Portfolio <TiArrowForwardOutline /></Link>
            </div>
          </Bounce>
          <Bounce left>
            <div className='w-full md:w-[35%]'>
              <img alt='agency' src={portfolio} />
            </div>
          </Bounce>
        </div>

        <div id='team' className='space-y-5 py-20'>
          <Fade bottom>
            <div className='relative py-7'>
              <p className='text-[50px] font-extrabold'>Meet Our Talented Team</p>
              <p className='text-lg font-medium'>We are already a Family of a vital number of Talented Individuals & Growing.</p>
              <img alt='crown' src={crown} className='absolute -top-5 -left-20' />
            </div>
          </Fade>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>
            {team.map(({img, name, title}) => (
              <Fade bottom>
                <div className='flex flex-col justify-center items-center gap-5'>
                  <img alt={name} src={img} className='w-[200px] rounded-full border-8 border-green' />
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-lg font-normal uppercase'>{name}</p>
                    <Divider className='w-[10px] mx-auto m-0 bg-yellow' />
                    <p className='text-sm font-bold'>{title}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        <div id="clients" className='space-y-5 py-20'>
          <Fade bottom>
            <div className='relative py-7'>
              <p className='text-[50px] font-extrabold'>Our Clients</p>
              <p className='text-lg font-medium'>Here are what our esteemed satisfied clients have to say about us.</p>
              <img alt='crown' src={crown} className='absolute -top-5 -left-20' />
            </div>
          </Fade>
          <Bounce bottom>
            <Carousel {...sliderOptions()}>
              {slides.map(({name, description, url}) => (
                <div className='flex justify-center items-center'>
                  <div className='w-full md:w-[450px] min-h-[300px] mx-auto border-2 border-yellow rounded-xl p-5 flex flex-col space-y-5 text-center'>
                    <p className='text-2xl font-bold'>{name}</p>
                    <Rate disabled defaultValue={5} />
                    <Divider className="m-0" />
                    <p className='text-sm font-normal'>{description}</p>
                    <a className='text-blue hover:text-green' href={`https://${url}`} target='_blank' rel="noreferrer">{url}</a>
                  </div>
                </div>
              ))}
            </Carousel>
          </Bounce>
          <Fade bottom>
          <p className='text-lg font-medium'>Some of our Clients</p>
          </Fade>
          <Bounce bottom>
            <Carousel {...sliderOptions(clientResponsive)}>
              {clients.map(({name, img}) => (
                <div className='w-full'>
                  <img alt={name} title={name} src={img} className='mx-auto' />
                </div>
              ))}
            </Carousel>
          </Bounce>
        </div>

        <Bounce bottom>
          <div id='message' className='w-full bg-[#EDEDED] rounded-xl shadow-xl p-5 md:p-10 space-y-5 pt-20'>
            <Fade bottom>
              <div>
                <p className='text-xl font-bold'>Got a project in mind?</p>
                <p className='text-sm font-normal'>Let's help in bringing your Ideas to Reality.</p>
              </div>
            </Fade>
            <Form onFinish={sendEmailRequest} layout='vertical' className='grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-10'>
              <Form.Item label="Full Name" name="full_name">
                <Input size='large' placeholder='Enter full name' required />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input size='large' placeholder='Enter email' type='email' required />
              </Form.Item>
              <Form.Item label="Message" name="message" className='md:col-span-2'>
                <Input.TextArea size='large' placeholder='Enter message full description' required rows={5} />
              </Form.Item>
              <Button loading={isLoading} className='bg-blue' htmlType='submit' type='primary' size='large' icon={<RxRocket />}>Take off from here</Button>
            </Form>
          </div>
        </Bounce>
      </div>
      <Footer />
    </div>

  )
}

export default HomePage