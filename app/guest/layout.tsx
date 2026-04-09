import React from 'react'
import Navbar from '../../components/components/Navbar'
import Footer from '../../components/components/Footer'

const Guestlayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Guestlayout