import React from 'react'

export default function SideInput() {
  return (
    <div>
        <form /* onSubmit={} */>
        <input 
        type="text" 
        name="category" 
        id="" 
        placeholder='Search Category...' 
        className='rounded-xl m-6 p-2 text-base border-[#cf3721] border-2'
        />
        </form>
    </div>
  )
}
