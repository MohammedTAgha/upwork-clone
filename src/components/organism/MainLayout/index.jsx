"use client";

import React from 'react'


 const MainLayout = ({ children }) => {
  return (
    <div>
        <div > nav</div>
        {children}
        <div > footer</div>
    </div>
  )
}

export default MainLayout;