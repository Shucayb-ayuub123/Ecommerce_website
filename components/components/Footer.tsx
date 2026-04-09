import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 p-10'>

    <div className='w-full bg-gray-100 flex gap-60 p-8 border-b-[1.5px] border-gray-400'>
        <div>
            <h2 className='font-semibold'>SHOPMATE</h2>
            <p className='font-medium text-sm text-gray-700'>Curated premium products for the modern <br /> lifestyle. Quality meets elegance.</p>
        </div>
        <div>
            <h2 className='font-semibold'>SHOP</h2>
            <p className='text-sm mt-2'>All Products</p>
            <p className='text-sm mt-2'>Electronics</p>
            <p className='text-sm mt-2'>Fashion</p>
            <p className='text-sm mt-2'>Accessories</p>
        </div>
        <div>
            <h2 className='font-semibold'>Supports</h2>
            <p className ='text-sm mt-2'>Contact us</p>
            <p className ='text-sm mt-2'>Shipping info</p>
            <p className ='text-sm mt-2'>Returns </p>
            <p className='text-sm mt-2'>FAQ</p>
        </div>
        <div>
            <h2 className='font-semibold'>Newsletter</h2>
            <p>Get 10% off your first order.</p>
            <div className='flex mt-4'>

            <input type="text" className='h-10 px-2 border-[1.5px] border-gray-200 bg-gray-300 rounded-tl-md rounded-bl-md' placeholder='youremail@.com' />
            <button className='bg-green-600 px-3 text-white font-semibold text-sm rounded-tr-md rounded-br-md'>Join</button>
            </div>

        </div>

        

    </div>
      <p className='text-center mt-7 text-xs text-gray-600'>© 2026 LUXE. All rights reserved.</p>
    </div>
  )
}

export default Footer