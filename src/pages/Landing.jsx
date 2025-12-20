import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Hero />
      <Footer />
    </div>
  )
}

export default Landing