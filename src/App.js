import Header from './Header'
// import Footer from './Footer'
import banner from './assets/banner.png'
import { Form, Input, Button } from 'antd'
// import { FiArrowRight } from 'react-icons/fi'
import appBanner from './assets/app-banner.png'
import aboutBanner from './assets/about-banner.png'
import checkIcon from './assets/icons/check-icon.png'
import feature1 from './assets/features/feature-1.png'
import feature2 from './assets/features/feature-2.png'
import feature3 from './assets/features/feature-3.png'
import phoneIcon from './assets/icons/phone-icon.png'
import mailIcon from './assets/icons/mail-icon.png'
import chatIcon from './assets/icons/chat-icon.png'
import pinIcon from './assets/icons/pin-icon.png'

function App() {
  const features = [
    {
      img: feature1,
      title: "Medical facility construction & <br /> Facility management",
      description: "Whether you have a team of 2 or 200, our shared team inboxes <br /> keep everyone on the same page and in the loop.",
      list: ["Feasibility Assessment & Planning", "Operation & Management", "Medical stuff & training", "Facility Refurbishment"],
    },
    {
      img: feature2,
      title: "Medical Supply and Equipment <br /> Procurement",
      description: "In successful business feasibility study of projects is a critical factor. Therefore, <br /> the basic features in any feasibility study must be ensuring that we are working <br /> with accurate information, exact statement, and the latest financial records. <br /> The main objective of feasibility study is to evaluate five types of feasibility; <br /> technical, economic, operational and scheduling feasibility.",
      list: ["Assessment & Consulting", "Supplier Contact & Procurement", "Installation & Training", "Maintenance & Support"],
    },
    {
      img: feature3,
      title: "Healthcare Technology",
      description: "Zygomed e-pharmacy and market place let you buy medicine online and <br /> also access related information regarding your prescription drugs. You <br /> can know about dosage, side effects, and other details about your <br /> medicines through the app. We offer",
      list: ["Digital consumer application", "E -commerce. Zygomed Pharma-online shopping - Discover our wide range of health and beauty products, supplements, and much more, all available at the click of a button", "Consume Health platform", "Private label apothecary", "Med-tech device innovation", "Retail", "Wholesale", "Loyalty program"],
    },
  ]

  const contacts = [
    {
      img: mailIcon,
      title: "Send us an email",
      description: "Speak to our friendly team.",
      value: "info@zygomed.com",
      url: "mailto:info@zygomed.com",
    },
    {
      img: chatIcon,
      title: "WhatsApp support",
      description: "We’re here to help.",
      value: "+000000000000",
      url: "https://wa.me/+23400000000000",
    },
    {
      img: pinIcon,
      title: "Visit us",
      description: "Visit our office HQ.",
      value: "Lagos, Nigeria",
      url: "",
    },
    {
      img: phoneIcon,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      value: "+00000000000",
      url: "tel:+00000000000",
    },
  ]

  const pharma = [
    {
      title: "Retail",
      description: "Health, beauty and pharmacy chain.",
    },
    {
      title: "E commerce market place",
      description: "Online shopping - Discover our wide range of health <br /> and beauty products, supplements, and much more, <br /> all available at the click of a button.",
    },
    {
      title: "Loyalty Program",
      description: "Zygomed Elite club Card, rewards customers with ZM Points that <br /> can be used towards purchases made at on sale points. Not only <br /> do rewards customers with points to spend on treats, but also <br /> entitles them to a free Health & Beauty blog, multimedia content <br /> ,and a lot more personalized information offers",
    },
    {
      title: "Wholesale",
      description: "Zygomed extends its wholesale business into the distribution <br /> business whereby it would service both the wholesalers and <br /> retailers. We embraced pharmacist and offer supply of services <br /> to a wide number of sectors, including hospitals, doctors, the <br /> FMCG market, emergency medical services, specialised medical <br /> and veterinary services and clinics.",
    }
  ]

  window.addEventListener("scroll", () => {
    const scrollHeight = Math.ceil(window.scrollY)
    const bodyHeight = document.body.offsetHeight
    const menu = document.getElementById("navbar")?.classList
    if(scrollHeight >= 130 && bodyHeight >= 1200){
      menu?.add("fixed")
    }else {
      menu?.remove("fixed")
    }
  })
  return (
    <div className="w-full">
      <Header />

      <div id="/home" className='w-full min-h-screen home-top-bg md:flex justify-between items-center gap-10 px-3 py-10 md:py-0 md:px-10 lg:px-20'>
        <div className='w-full space-y-5'>
          {/* <button className='p-0.5 md:!pr-5 gap-1 md:gap-3 flex items-center rounded-3xl bg-[#FDE05B]'>
            <p className='text-sm font-medium p-2 md:px-3 text-[#173759] bg-white rounded-3xl'>What’s new?</p>
            <p className='text-sm font-medium text-[#173759]'>Our e-commerce platform</p>
            <FiArrowRight className='text-white' />
          </button> */}
          <p className='text-[58px] leading-[72px] font-semibold text-[#173759]'>Delivering healthcare <br /> of the future</p>
          <p className='text-xl font-normal text-[#667085] md:pr-20'>We offer the most prolific of International Standards <br /> and Guidelines for Healthcare Design customized for <br /> different regions of the continent</p>
          {/* <button className='py-2 px-5 my-20 rounded-lg bg-[#173759] text-white hover:bg-[#a4d1ec]'>Get Started</button> */}
        </div>
        <div className='w-full'>
          <img alt='banner' src={banner} />
        </div>
      </div>

      <div id="/about" className='w-full bg-[#173759] text-white pt-40 text-center space-y-5'>
        <p className='text-base font-semibold text-[#F5F2F2]'>About us</p>
        <p className='text-4xl font-semibold'>Increasing focus on health and wellbeing</p>
        <p className='text-sm font-normal leading-8 px-5 sm:px-60 md:px-80 text-[#FFFCFC]'>The prevailing notion is that you can never be too healthy over the coming years, an increasing amount of personal and public resources will be spent on health and longevity: including regulation and awareness campaigns that will focus on preventive measure.</p>
        <img alt='about banner' src={aboutBanner} className='mx-auto' />
      </div>

      <div id="/features" className='w-full text-[#173759] px-5 pt-40 text-center space-y-5'>
        <p className='text-base font-semibold'>Features</p>
        <p className='text-4xl font-semibold'>What Zygomed Offers</p>
        <p className='text-sm font-normal leading-8 md:px-60 lg:px-80 xl:px-96 text-[#667085]'>Provision of fully intreated design, construction, medical planning, procurement, operation and technical support to the healthcare facilities all over the world.</p>
      </div>

      <div className='w-full p-5 sm:p-10 md:px-20 lg:px-32 !pb-40 space-y-20'>
        {features.map(({img, description, list, title}, ind) => (
          <div className={`w-full md:flex justify-between items-center gap-5 md:gap-10 ${!(ind%2) && "md:flex-row-reverse"}`} key={title}>
            <div className='w-full'>
              <img alt={title} src={img} className='w-full' />
            </div>
            <div className={`w-full space-y-5 ${!(ind%2) ? "md:pr-24" : "md:pl-9"}`}>
              <p className='text-3xl font-semibold text-[#173759]' dangerouslySetInnerHTML={{__html:title}} />
              <p className='text-sm leading-7 font-normal text-[#667085]' dangerouslySetInnerHTML={{__html:description}} />
              <div className='space-y-3'>
                {list.map((idx) => (
                  <div className='flex gap-3' key={idx}>
                    <div><img alt={idx} src={checkIcon} className='!max-w-[20px]' /></div>
                    <p className={`${idx.length>40 ? "text-sm !leading-7" : "text-lg "}font-normal text-[#667085]`}>{idx}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full home_app_bg bg-contain p-5 md:p-10 lg:p-20 xl:px-28 text-[#F5F5F5] bg-[#173759] space-y-20'>
        <div className='text-center space-y-10'>
          <p className='w-full leading-[65px] text-[55px] font-bold text-white'>Zygomed Pharma+</p>
          <p className='w-full text-sm font-normal !leading-8 text-[#F5F5F5]'>
            Beyond being just a pharmacy and retail store; we deliver healthcare in various ways, extending our services, products, and initiatives to <br />
            encompass community clinics, feeding programs, the Zygomed Foundation, and health insurance products. With the momentum of <br />
            initiatives like these driving Zygomed forward, we hope to lead a movement in Africa , becoming the champions of better health for all. <br />
            This shift in perspective allows us to see the bigger picture and take a more holistic view of health and wellness in today's world. It aligns <br />
            with the growth of our offerings, which we have developed and implemented over the years.
          </p>
        </div>
        <div className='!relative'>
          <div className='w-full p-5 grid grid-cols-1 gap-x-5 gap-y-10'>
            {pharma?.map(({title, description}) => (
              <div className='border-l-4 border-white space-y-3 pl-5' key={title}>
                <p className='text-xl font-medium text-[#F5C143]' dangerouslySetInnerHTML={{__html:title}} />
                <p className='text-sm font-normal !leading-6' dangerouslySetInnerHTML={{__html:description}} />
              </div>
            ))}
          </div>
          {/* <button className='py-2 px-5 rounded-lg text-[#173759] bg-[#FDE05B] hover:bg-[#a4d1ec]'>Download our Brochure</button> */}
          <img alt='app banner' src={appBanner} className='w-auto md:!w-[530px] md:absolute -top-20 right-0' />
        </div>
      </div>

      <div id='/contact' className='w-full text-[#173759]  p-5 !pb-0 sm:p-10 md:pt-40 md:px-20 lg:px-32 space-y-5'>
        <p className='text-base font-semibold'>Contact us</p>
        <p className='text-5xl font-semibold text-[#101828]'>We’d love to hear from you</p>
        <p className='text-xl font-normal text-[#667085]'>Our friendly team is always here to chat.</p>
      </div>

      <div className='w-full text-[#173759] p-5 sm:p-10 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-4 gap-5'>
        {contacts.map(({description, img, title, url, value}) => (
          <div className='space-y-10 border border-[#f8f8f8] shadow rounded-lg p-5' key={title}>
            <img alt={title} src={img} />
            <div className='space-y-5'>
              <p className='text-xl font-medium'>{title}</p>
              <p className='text-base font-normal'>{description}</p>
              <a className='text-base font-medium' href={url}>{value}</a>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full p-5 !py-20 sm:p-10 md:px-20 lg:px-32 bg-[#FDE05B] text-[#101828] flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10'>
        <div className='space-y-3'>
          <p className='text-4xl font-semibold'>Sign up for our newsletter</p>
          <p className='text-xl font-normal'>Be the first to know about releases and industry news and insights.</p>
        </div>
        <div className='w-full md:w-[40%] space-y-3'>
          <Form className='w-full flex items-center gap-3'>
            <Form.Item name="email" className='w-full !p-0 !m-0'>
              <Input className='w-full !ring-0 !border-0' size='large' placeholder='Enter your email' required type='email' />
            </Form.Item>
            <Button className='bg-[#173759] hover:!bg-[]' htmlType='submit' type='primary' size='large'>Subscribe</Button>
          </Form>
          <p className='text-sm font-normal'>
            <span>We care about your data in our </span>
            <a className='underline' href='#privacy'>privacy policy</a>
          </p>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
