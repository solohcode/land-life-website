import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Button, Drawer } from 'antd';
import Tada from 'react-reveal/Tada'
import Logo from '../logo';

export function Header() {
  const [spy, setSpy] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const onIsOpen = () => setIsOpen(true)
  const onIsClose = () => setIsOpen(false)

  setInterval(() => {
    setSpy(Math.floor(Math.random() * 100) + 1)
  }, 5000)

  const items = [
    {
      key: "#agency",
      label: "Agency",
    },
    {
      key: "#portfolio",
      label: "Portfolio",
    },
    {
      key: "#services",
      label: "Services",
    },
    {
      key: "#careers",
      label: "Careers",
    },
    {
      key: "#about",
      label: "About",
    },
  ];

  const MenuContent = () => (
    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
      {items.map(({key, label}) => (
        <a href={key} key={key} className='block text-lg font-medium hover:text-blue'>{label}</a>
      ))}
      <div className='w-full'>
        <Tada spy={spy}>
          <Button className='bg-blue hover:!bg-green !rounded-3xl !font-medium' type='primary' size='large'>Hire Us</Button>
        </Tada>
      </div>
    </div>
  )

  return (
    <div id='navbar' className='w-full z-10 top-0 backdrop-blur-xl shadow-md p-5 md:px-10 lg:px-20 xl:px-32 md:flex justify-between items-center'>
      <div className='w-full md:w-auto flex justify-between items-center'>
        <Logo />
        <Button
          size='large'
          onClick={onIsOpen}
          className='md:hidden'
          icon={<AiOutlineMenu />}
        />
      </div>
      <div className='hidden md:block'>
        <MenuContent />
      </div>

      <Drawer
        width={250}
        title={<Logo />}
        placement="left"
        onClose={onIsClose}
        closable={false}
        open={isOpen}
      >
        <MenuContent />
      </Drawer>
    </div>
  )
}

export default Header