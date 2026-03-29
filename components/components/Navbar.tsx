"use client"
import React from 'react'
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from '@/context/Cartcontext';
import { Poppin } from '@/app/font';
const Navbar = () => {
    const {cart} = useCart()
  return (
    <div>
        <nav className="bg-gray-400 flex justify-around h-13 items-center rounded-b-sm">
        <div>
          <h1 className={`text-2xl font-bold ${Poppin.className}`}>Shopmate</h1>
        </div>
        <Link className="relative bg-white w-9 h-9 flex justify-center items-center rounded-full" href={"guest/Carts"}>
          <ShoppingCart size={19} />
          {cart  > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
              {cart}
            </span>
          )}
        </Link>
      </nav>
    </div>
  )
}

export default Navbar