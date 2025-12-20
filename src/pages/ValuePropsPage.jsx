import React from 'react'
import ValueProps from '../components/ValueProps'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ValuePropsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ValueProps />
      <Contact />
      <Footer />
    </div>
  )
}

export default ValuePropsPage