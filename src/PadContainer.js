import React from 'react'

function PadContainer({ children, className }) {
  return (
    <div className={`w-full px-2 py-5 md:px-10 lg:px-20 xl:px-36 ${className}`}>
      {children}
    </div>
  )
}

export default PadContainer