
import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Heart } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
const Navbar = () => {
    
  return (
    <div>
        <nav className='w-full z-20 '>

            <div className='flex justify-around items-center h-15 border-b-[0.3px] border-gray-300 bg-gray-100'>
            <div>
                <h1 className='font-semibold text-2xl'>ShopMate</h1>
            </div>

                <ul className='flex gap-7'>
                    <Link href={"/"} className='font-semibold text-gray-500 hover:text-black'>Home</Link>
                    <Link href={"/guest/Shop"} className='font-semibold text-gray-500 hover:text-black'>Shop</Link>
                </ul>

                <ul className='flex gap-4'>
                    <Link href={"/guest/Shop"}><Search  size={20} /></Link>
                    <Link href={"/guest/WhishList"}><Heart size={20}/></Link>
                    <Link href={"/guest/Cart"}><ShoppingCart size={20}/></Link>

                </ul>
            </div>

        </nav>
    </div>
  )
}

export default Navbar