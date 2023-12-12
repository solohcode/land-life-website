import React from 'react'
import Logo from '../logo'
import { LuMapPin } from 'react-icons/lu'
import { FiPhone, FiMail } from 'react-icons/fi'
import { RiInstagramFill } from 'react-icons/ri'
import { FaSquareTwitter } from 'react-icons/fa6'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { Divider } from 'antd'
import { Bounce } from 'react-reveal'

function Footer() {
  return (
    <div className='w-full bg-[#fffbe5] p-5 sm:p-10 md:p-20 lg:px-40 !pb-5'>
      <Bounce bottom>
        <div className='w-full grid grid-cols-1 md:grid-cols-4'>
          <div className='md:col-span-2 space-y-5'>
            <Logo />
            <ul className='text-sm font-normal list-disc space-y-1'>
              {[
                "IT Audit and Advisory",
                "Mobile App Development",
                "Custom Software Development",
                "Software as a service (SaaS)",
                "UX/UI Graphic Design and Prototyping",
                "IT training and development mentorship",
              ].map((idx) => (
                <li>{idx}</li>
              ))}
            </ul>
          </div>
          <div className='space-y-5'>
            <p className='text-xl font-medium'>Connect With Us</p>
            <div className='space-y-3'>
              {[
                {name: "Twitter", icon: <FaSquareTwitter />, url: "https://twitter.com/techendinc"},
                {name: "Facebook", icon: <FaFacebookSquare />, url: "https://web.facebook.com/techendinc"},
                {name: "Instagram", icon: <RiInstagramFill />, url: "https://www.instagram.com/techendinc"},
                {name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/company/thetechend"},
              ].map(({name, icon, url}) => (
                <a href={url} target='_blank' rel="noreferrer" className='flex items-center gap-3 hover:text-blue'>
                  <p className='text-xl'>{icon}</p>
                  <p className='text-lg'>{name}</p>
                </a>
              ))}
            </div>
          </div>
          <div className='space-y-5'>
            <p className='text-xl font-medium'>Contact Us</p>
            <div className='space-y-3'>
              {[
                {name: "40b Seinde Calisto Crescent, Oshodi, Lagos.", icon: <LuMapPin />},
                {name: "connect@techend.com.ng", icon: <FiMail />, url: "mailto:connect@techend.com.ng"},
                {name: "+234 805 607 4893", icon: <FiPhone />, url: "tel:+2348056074893"},
                {name: "+234 706 974 1474", icon: <FiPhone />, url: "tel:+2347069741474"},
                {name: "+234 802 237 6729", icon: <FiPhone />, url: "tel:+2348022376729"},
              ].map(({name, icon, url}) => (
                <a href={url} target='_blank' rel="noreferrer" className='flex items-center gap-3 hover:text-blue'>
                  <p className='text-xl'>{icon}</p>
                  <p className='text-sm'>{name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Bounce>
      <Divider />
      <Bounce bottom>
        <p className='text-base text-center'>{`© Copyright ${new Date().getFullYear()}. Powered by Techend Limited`}</p>
      </Bounce>
    </div>
  )
}

export default Footer