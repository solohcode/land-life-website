import React from 'react'
import { Collapse } from 'antd'
import PadContainer from './PadContainer'
import { IoLogoWhatsapp } from 'react-icons/io'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { BsFacebook, BsPinterest, BsTwitter } from 'react-icons/bs'
import playStoreIcon from './assets/icons/play-store-full.png'
import appStoreIcon from './assets/icons/app-store-full.png'

function Footer() {

  const socials = [
    {
      url: "https://www.facebook.com",
      icon: <BsFacebook />,
    },
    {
      url: "https://www.twitter.com",
      icon: <BsTwitter />,
    },
    {
      url: "https://www.pinterest.com",
      icon: <BsPinterest />,
    },
    {
      url: "https://www.instagram.com",
      icon: <PiInstagramLogoFill />,
    },
    {
      url: "https://www.whatsapp.com",
      icon: <IoLogoWhatsapp />
    }
  ]

  const stores = [
    {
      url: "",
      icon: playStoreIcon
    },
    {
      url: "",
      icon: appStoreIcon
    },
  ]

  const menus = [
    {
      title: "Support",
      children: [
        {label: "Order Tracking", path: "/orders"},
        {label: "Contact Us", path: "/page/contact"},
        {label: "Customer Service", path: "/page/customer-service"},
        {label: "Email our CEO", path: "/page/email-ceo"},
      ],
    },
    {
      title: "Medical Trials",
      children: [
        {label: "Coming Soon", path: "/coming-soon"},
        {label: "Coming Soon", path: "/coming-soon"},
        {label: "Coming Soon", path: "/coming-soon"},
      ],
    },
    {
      title: "Scholarship Initiatives",
      children: [
        {label: "Coming Soon", path: "/coming-soon"},
        {label: "Coming Soon", path: "/coming-soon"},
        {label: "Coming Soon", path: "/coming-soon"},
      ],
    },
    {
      title: "Partnerships",
      children: [
        {label: "Zygomed Influencers", path: "/page/influencers"},
        {label: "Affiliate Program", path: "/page/affiliate-program"},
        {label: "Student Organisations", path: "/page/student-organizations"},
      ],
    },
    {
      title: "About Us",
      children: [
        {label: "About Zygomed", path: "/page/about"},
        {label: "Investor Relations", path: "/page/investor-relations"},
        {label: "Wholesale", path: "/page/wholesale"}
      ],
    }
  ]

  const feet = [
    {
      label: "Terms of Use",
      path: "/page/terms-of-use"
    },
    {
      label: "Privacy Policy",
      path: "/page/privacy-policy"
    },
    {
      label: "Cookies Preferences",
      path: "/page/cookies"
    }
  ]
  return (
    <div className='w-full space-y-3 pt-5'>
      <PadContainer className="flex flex-col md:flex-row bg-white justify-between items-center gap-5">
        <div className='flex items-center gap-5'>
          <p className='text-base font-normal'>Follow us:</p>
          <div className='flex items-center space-x-4 text-xl'>
            {socials?.map(({ url, icon }) => (
              <a key={url} href={url} target='_blank' rel="noreferrer" className='hover:text-blue'>{icon}</a>
            ))}
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <p className='text-base font-normal text-blue'>Download our app and earn 50 ZY Points</p>
          <div className='flex items-center space-x-4'>
            {stores?.map(({icon, url}) => (
              <a key={url} href={url} target='_blank' rel="noreferrer" className='px-5 py-3 shadow-lg rounded-lg'>
                <img alt={url} src={icon} />
              </a>
            ))}
          </div>
        </div>
      </PadContainer>
      <PadContainer className="bg-white space-y-10 py-10">
        <div className='block md:hidden'>
          <Collapse className='!bg-transparent' bordered={false} expandIconPosition='end' items={[...menus.map(({title, children}) => ({
            key: title,
            label: title,
            children: (<div className='space-y-3 text-dark' key={title}>
              {children?.map(({label, path}) => (
                <a className='block text-sm font-normal hover:text-blue' href={path} key={path}>{label}</a>
              ))}
            </div>)
          }))]} />
        </div>
        <div className='w-full hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center'>
          {menus?.map(({title, children}) => (
            <div className='space-y-3 text-dark' key={title}>
              <p className='text-base font-semibold'>{title}</p>
              {children?.map(({label, path}) => (
                <a className='block text-sm font-normal hover:text-blue' href={path} key={path}>{label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className='w-full flex flex-col justify-center items-center text-center gap-3 text-xs font-normal text-[#999999]'>
          <div className='flex justify-center items-center divide-x'>
            {feet?.map(({path, label}) => (
              <a className='px-2 md:px-3 whitespace-nowrap' href={path} key={path}>{label}</a>
            ))}
          </div>
          <p>{`Copyright ©${new Date().getFullYear()} ZYGOMED.COM LTD. All rights reserved.`}</p>
        </div>
      </PadContainer>
    </div>
  )
}

export default Footer