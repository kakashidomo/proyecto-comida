import React from 'react'
import SideCategory from './SideCategory'
import SideInput from './SideInput'

export default function SideBar() {
  return (
    <div className='w-96 h-screen rounded-xl bg-[#fee6e2] border-[#cf3721] border-2'>
        <SideInput/>
        <SideCategory/>
    </div>
  )
}
