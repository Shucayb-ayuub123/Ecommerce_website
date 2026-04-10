import { Box, DollarSign, ShoppingCart, Users } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
    {/* Heading */}
      <div className=' mb-10 '>
           <h1 className='font-bold text-3xl'>Dashboard</h1>
           <p className='text-gray-600'>Overview of your store performance</p>
      </div>
  {/* Cards */}
    <div className='grid grid-cols-4 gap-4 mr-9'>
      <div className='bg-gray-200 h-25 w-70 rounded-lg shadow-lg'>
        <div className='flex justify-between items-center px-3 py-4'>
          <p className='font-semibold text-sm text-gray-500'>Total Revenue</p>

          <DollarSign color='green'/>
        </div>
        <h2 className='px-3 font-bold text-xl'>$1,3423</h2>
      </div>
      <div className='bg-gray-200 h-25 w-70 rounded-lg shadow-lg'>
        <div className='flex justify-between items-center px-3 py-4'>
          <p className='font-semibold text-sm text-gray-500'>Total Orders</p>

          <ShoppingCart color='green'/>
        </div>
        <h2 className='px-3 font-bold text-xl'>6</h2>
      </div>
      <div className='bg-gray-200 h-25 w-70 rounded-lg shadow-lg'>
        <div className='flex justify-between items-center px-3 py-4'>
          <p className='font-semibold text-sm text-gray-500'>Total Users</p>

          <Users color='green'/>
        </div>
        <h2 className='px-3 font-bold text-xl'>7</h2>
      </div>
      <div className='bg-gray-200 h-25 w-70 rounded-lg shadow-lg'>
        <div className='flex justify-between items-center px-3 py-4'>
          <p className='font-semibold text-sm text-gray-500'>Total Products</p>

          <Box color='green'/>
        </div>
        <h2 className='px-3 font-bold text-xl'>7</h2>
      </div>
     
    </div>
    </div>
  )
}

export default page