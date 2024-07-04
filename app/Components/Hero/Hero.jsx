"use client"

import React from 'react'
import "./Hero.css"
import EmblaCaraousel from '../Caraousel/EmblaCaraousel'
import Link from 'next/link'

const Hero = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h1>MV Tours and Travels</h1>
      </div>
        <h3 className='text-2xl text-zinc-50'>Giving Unforgettable Travelling Experience</h3>
      <div className="mt-11">
        <Link href={"/"}>
          <button className="button p-3 text-zinc-50 rounded-md text-lg" role="button">Make Payments</button>
        </Link>
        </div>
        <div className='mt-10'>
            <EmblaCaraousel />
        </div>
    </main>
  )
}

export default Hero