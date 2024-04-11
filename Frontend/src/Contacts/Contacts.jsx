import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../Footer'


const Contacts = () => {
  return (
    <>
  
    <Navbar/>
   <div className='min-h-screen'>
   <Contact/>
   </div>
    <Footer/>
    </>
  )
}

export default Contacts