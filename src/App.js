import Footer from './Footer'
import Header from './Header'
import banner from './assets/banner.png'
import { Form, Input, Button } from 'antd'
import { FiArrowRight } from 'react-icons/fi'
import aboutBanner from './assets/about-banner.png'
import appBanner from './assets/app-banner.png'
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
      title: "Medical facility construction & Facility management",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      list: ["Feasibility Assessment & Planning", "Operation & Management", "Medical stuff & training", "Facility Refurbishment"],
    },
    {
      img: feature2,
      title: "Medical Supply and Equipment Procurement",
      description: "In successful business feasibility study of projects is a critical factor. Therefore, the basic features in any feasibility study must be ensuring that we are working with accurate information, exact statement, and the latest financial records. The main objective of feasibility study is to evaluate five types of feasibility; technical, economic, operational and scheduling feasibility.",
      list: ["Assessment & Consulting", "Supplier Contact & Procurement", "Installation & Training", "Maintenance & Support"],
    },
    {
      img: feature3,
      title: "Healthcare Technology",
      description: "Zygomed e-pharmacy and market place let you buy medicine online and also access related information regarding your prescription drugs. You can know about dosage, side effects, and other details about your medicines through the app. We offer",
      list: ["Online delivery service dedicated to prescription drugs, supplements and vitamins.", "Intravenous therapy vials", "Direct seller and a third-party registered pharmacies marketplace.", "Installation & Training"],
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

      <div className='w-full min-h-screen home-top-bg md:flex justify-between items-center gap-10 px-3 py-10 md:py-0 md:px-10 lg:px-20'>
        <div className='w-full space-y-5'>
          <button className='p-0.5 md:!pr-5 gap-1 md:gap-3 flex items-center rounded-3xl bg-[#FDE05B]'>
            <p className='text-sm font-medium p-2 md:px-3 text-[#173759] bg-white rounded-3xl'>What’s new?</p>
            <p className='text-sm font-medium text-[#173759]'>Our e-commerce platform</p>
            <FiArrowRight className='text-white' />
          </button>
          <p className='text-[58px] leading-[72px] font-semibold text-[#173759]'>Delivering healthcare of the future</p>
          <p className='text-xl font-normal text-[#667085]'>We offer the most prolific of International Standards and Guidelines for Healthcare Design customized for different regions of the continent</p>
          <button className='py-2 px-5 my-20 rounded-lg bg-[#173759] text-white hover:bg-[#a4d1ec]'>Get Started</button>
        </div>
        <div className='w-full'>
          <img alt='banner' src={banner} />
        </div>
      </div>

      <div className='w-full bg-[#173759] text-white pt-10 text-center space-y-5'>
        <p className='text-base font-semibold px-5'>About us</p>
        <p className='text-4xl font-semibold px-5'>Increasing focus on health and wellbeing</p>
        <p className='text-xl font-normal md:px-60 px-5'>The prevailing notion is that you can never be too healthy over the coming years, an increasing amount of personal and public resources will be spent on health and longevity: including regulation and awareness campaigns that will focus on preventive measure.</p>
        <img alt='about banner' src={aboutBanner} className='mx-auto' />
      </div>

      <div className='w-full text-[#173759] px-5 py-20 text-center space-y-5'>
        <p className='text-base font-semibold'>Features</p>
        <p className='text-4xl font-semibold'>What Zygomed Offers</p>
        <p className='text-xl font-normal md:px-60 lg:px-80 xl:px-96 text-[#667085]'>Provision of fully intreated design, construction, medical planning, procurement, operation and technical support to the healthcare facilities all over the world.</p>
      </div>

      <div className='w-full p-5 sm:p-10 md:px-20 space-y-20'>
        {features.map(({img, description, list, title}, ind) => (
          <div className={`w-full md:flex justify-between items-center gap-5 md:gap-10 ${!(ind%2) && "md:flex-row-reverse"}`} key={title}>
            <div className='w-full'>
              <img alt={title} src={img} className='w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] mx-auto' />
            </div>
            <div className='w-full space-y-5'>
              <p className='text-3xl font-semibold text-[#173759]'>{title}</p>
              <p className='text-lg font-normal text-[#667085]'>{description}</p>
              <div className='space-y-2'>
                {list.map((idx) => (
                  <div className='flex gap-3' key={idx}>
                    <div><img alt={idx} src={checkIcon} className='!max-w-[50px]' /></div>
                    <p className='text-lg font-normal text-[#667085]'>{idx}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='md:p-5 sm:p-10'>
        <div className='w-full home_app_bg p-5 md:p-10 rounded-xl text-white bg-[#173759] !relative space-y-5'>
          <p className='w-full md:w-[50%] leading-[65px] text-[55px] font-black'>Closer look at the healthcare system in Nigeria</p>
          <p className='w-full md:w-[50%] text-xl font-normal'>Download our brochure and read our latest research on the Nigerian healthcare system</p>
          <button className='py-2 px-5 rounded-lg text-[#173759] bg-[#FDE05B] hover:bg-[#a4d1ec]'>Download our Brochure</button>
          <img alt='app banner' src={appBanner} className='w-auto md:!w-[650px] md:absolute -top-5 right-0' />
        </div>
      </div>

      <div className='w-full text-[#173759]  p-5 sm:p-10 md:px-20 lg:px-32 space-y-5'>
        <p className='text-base font-semibold'>Contact us</p>
        <p className='text-4xl font-semibold'>We’d love to hear from you</p>
        <p className='text-xl font-normal text-[#667085]'>Our friendly team is always here to chat.</p>
      </div>

      <div className='w-full text-[#173759] p-5 sm:p-10 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-4 gap-5'>
        {contacts.map(({description, img, title, url, value}) => (
          <div className='space-y-10 border border-[#f8f8f8] shadow rounded-lg p-5' key={title}>
            <img alt={title} src={img} />
            <div className='pb-5'>
              <p className='text-xl font-medium'>{title}</p>
              <p className='text-base font-normal'>{description}</p>
            </div>
            <a className='text-base font-medium' href={url}>{value}</a>
          </div>
        ))}
      </div>

      <div className='w-full p-5 sm:p-10 md:px-20 lg:px-32 bg-[#FDE05B] text-[#101828] flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10'>
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

      <Footer />
    </div>
  );
}

export default App;
