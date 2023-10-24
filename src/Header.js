import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import logo from './assets/logo.png'
import { AiOutlineMenu } from 'react-icons/ai'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

  const menu = [
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Features",
      path: "/features",
    },
    {
      label: "Multimedia",
      path: "/multimedia",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ]

  const Logo = () => <img alt="logo" src={logo} />
  const Menu = () => (
    <div className="flex flex-col md:flex-row md:items-center gap-7">
      {menu.map(({label, path}) => (
        <p key={path} className=''>{label}</p>
      ))}
      {/* <button className='py-2 px-5 rounded-lg bg-[#173759] text-white hover:bg-[#a4d1ec] uppercase'>SHOP NOW</button> */}
    </div>
  )
  return (
    <div className='w-full'>
      <div id='navbar' className="w-full bg-white z-10 shadow md:flex justify-between items-center py-3 px-5 sm:py-3 sm:px-10 md:px-20">
        <div className='w-full flex justify-between items-center md:w-auto'>
          <Logo />
          <Button onClick={onOpen} className='block md:hidden' size='large' icon={<AiOutlineMenu />} />
        </div>
        <div className='hidden md:block'>
          <Menu />
        </div>
      </div>

      <Drawer
        width={250}
        title={<Logo />}
        placement="left"
        onClose={onClose}
        closable={false}
        open={isOpen}
      >
        <Menu />
      </Drawer>
    </div>
  )
}

export default Header