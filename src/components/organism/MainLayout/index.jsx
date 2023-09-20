"use client";
import Navigation  from '@/components/organism/navigation/'
import React from 'react'


 const MainLayout = ({ children }) => {
  return (
    <div>
        <Navigation/>
        {children}
        <div > footer</div>
    </div>
  )
}

export default MainLayout;