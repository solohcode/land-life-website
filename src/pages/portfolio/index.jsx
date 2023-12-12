import React from 'react'
import Header from '../../components/header'
import { Bounce } from 'react-reveal'
import crown from '../../assets/crown.png'
import paysmosmo from '../../assets/portfolio/paysmosmo.jpg'
import paysmosmo_admin from '../../assets/portfolio/paysmosmo-admin.jpg'
import zero_admin from '../../assets/portfolio/zero-admin.jpg'
import sesis from '../../assets/portfolio/sesis.jpg'
import zero from '../../assets/portfolio/zero.jpg'
import cubevest from '../../assets/portfolio/cubevest.jpg'
import estate_plus from '../../assets/portfolio/estate-plus.jpg'
import { FaLink } from 'react-icons/fa'

function PortfolioPage() {
  const portfolio = [
    {
      img: paysmosmo,
      name: "Paysmosmo",
      url: "www.paysmosmo.com",
      title: "Convenient Payment E-commerce",
    },
    {
      img: paysmosmo_admin,
      name: "Paysmosmo Admin",
      url: "admin.paysmosmo.com",
      title: "Paysmosmo E-commerce Admin Directory",
    },
    {
      img: zero,
      name: "ZIMC (Zero)",
      url: "www.zimcserver.com",
      title: "Zero Interest Multipurpose Cooperative",
    },
    {
      img: zero_admin,
      name: "ZIMC (Zero) Admin",
      url: "admin.zimcserver.com",
      title: "Zero Interest Admin Directory",
    },
    {
      img: sesis,
      name: "Sesis Coop",
      url: "www.sesiscoop.com",
      title: "Sesis Cooperative Society Platform",
    },
  ]

  const products = [
    {
      img: estate_plus,
      name: "Estate Plus",
      url: "www.estateplusng.com",
      title: "Enjoy Simplified Estate Services with us",
      description: "Estate plus is a property management (Prop-Tech) software as a service that works well for property owners and developer to solving the problems of irregularities with regards residential estates and other property types or community.",
    },
    {
      img: cubevest,
      name: "Cubevest",
      url: "www.cubevest.com",
      title: "Cultivate a habit of Savings and Finance Management",
      description: "Say bye-bye to high interest rates. Get access to zero (non) interest Personal or Business loans to take care of your most pressing needs, loans with workable payback periods. Build your credit ratings to unlock larger loan amounts.",
    },
  ]
  return (
    <div className='w-full'>
      <Header />
      <div className='w-full p-5 md:px-10 lg:px-20 xl:px-36 space-y-20'>
        <div>
          <Bounce right>
            <div className='w-full space-y-3 relative py-7'>
              <img alt='crown' src={crown} className='absolute -top-5 -left-20' />
              <p className='text-[50px] font-extrabold'>Our Products</p>
              <p className='text-lg font-medium'>We don't just build custom softwares as a company whose vision is to innovate, we therefore have our very own products that have played to be very useful in an everyday life scenario.</p>
            </div>
          </Bounce>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-10'>
            {products.map(({img, name, title, url, description}) => (
              <Bounce bottom>
                <div className='w-full rounded-3xl bg-[#F7F7F8] shadow'>
                  <img alt={name} src={img} className='w-full rounded-3xl' />
                  <div className='p-5 md:px-10 space-y-3'>
                    <p className='text-2xl font-semibold'>{name}</p>
                    <p className='text-lg font-medium'>{title}</p>
                    <p className='text-base font-normal text-[#4E4646]'>{description}</p>
                    <a href={`https://${url}`} target='_blank' rel="noreferrer" className='flex items-center gap-3 text-[#4E4646] hover:text-blue'>
                      <FaLink className='text-sm' />
                      <p className='text-sm'>{url}</p>
                    </a>
                  </div>
                </div>
              </Bounce>
            ))}
          </div>
        </div>

        <div>
          <Bounce right>
            <div className='w-full space-y-3 relative py-7'>
              <img alt='crown' src={crown} className='absolute -top-5 -left-20' />
              <p className='text-[50px] font-extrabold'>Our Portfolio</p>
              <p className='text-lg font-medium'>As a beacon of innovation and problem solving, here are some ideas that have been brought to reality by our team.</p>
            </div>
          </Bounce>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-10'>
            {portfolio.map(({img, name, title, url}) => (
              <Bounce bottom>
                <div className='w-full rounded-3xl bg-[#F7F7F8] shadow'>
                  <img alt={name} src={img} className='w-full rounded-3xl' />
                  <div className='p-5 md:px-10 space-y-3'>
                    <p className='text-2xl font-semibold'>{name}</p>
                    <p className='text-lg font-medium'>{title}</p>
                    <a href={`https://${url}`} target='_blank' rel="noreferrer" className='flex items-center gap-3 text-[#4E4646] hover:text-blue'>
                      <FaLink className='text-sm' />
                      <p className='text-sm'>{url}</p>
                    </a>
                  </div>
                </div>
              </Bounce>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage