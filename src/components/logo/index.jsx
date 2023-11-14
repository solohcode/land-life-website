import React from 'react'
import logo from '../../assets/logo.png'

function Logo() {
  return (
    <a href='/'>
      <img alt='logo' src={logo} className='w-[150px]' />
    </a>
  )
}

export default Logo