import React from 'react'
import { Metadata } from 'next'
import ProfilePage from '@/components/pages/ProfilePage'

 
export const metadata: Metadata = {
  title: 'Create an Account - Upwork',
  description: 'Upwork is where the world goes to work! We are a leading online workplace,           where savvy businesses hire, manage, and pay an on-demand workforce of talented freelancers.'
}
 
export default function page() {
  return (
    <main className='py-8 px-6 md:px-[80px] mx-auto'>
      <ProfilePage/>
    </main>
  )
}
