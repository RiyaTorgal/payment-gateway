import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Image
            src="/logo (2)-min.svg"
            alt="Logo"
            width={100}
            height={75}
            className="object-contain"
          />
        </nav>
    </header>
  )
}

export default Navbar