import { Heart,  } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center space-y-5 h-100'>
            <Heart size={50} color='gray' />
            <h1 className='text-4xl font-semibold'>Your WhishList is empty</h1>
            <p className='text-lg text-gray-500'>Save items you love faster</p>
           <Link href='/guest/Shop'  className="h-10 w-40 bg-emerald-700 font-bold rounded-xl text-center py-2 text-white ">Browser Product</Link>
        </div>

    </div>
  )
}

export default page
