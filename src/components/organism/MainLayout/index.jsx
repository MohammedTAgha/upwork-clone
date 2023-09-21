"use client";
import Navigation  from '@/components/organism/navigation/'
import React from 'react'
import Footer from '@/components/organism/Footer'

 const MainLayout = ({ children }) => {
  return (
    <div>
        <Navigation/>
        {children}
        <Footer/>
    </div>
  )
}

export default MainLayout;