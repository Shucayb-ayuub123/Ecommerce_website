"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Tilt_Warp } from "next/font/google";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import Link from "next/link";
const TiltWarp = Tilt_Warp({
  subsets: ["latin"],
  weight: "400",
});
const page = () => {
  const [Cart, setCart] = useState<number>(0);
  const router  = useRouter()
  return (
    <div>
      {/* Navbar */}
      <nav className="h-15 pt-4 px-4 py-5    mb-10 bg-gray-500 rounded-b-sm flex top-0 fixed z-10 w-full justify-between items-center">
        <h1
          className={`text-white font-bold text-3xl mx-50 ${TiltWarp.className}`}
        >
          Shopmate
        </h1>

        <div className="mx-50 bg-white h-12 w-12 flex justify-center items-center rounded-3xl relative">
          {Cart  !== 0 ?(
            <span className="bg-red-500 text-white absolute rounded-2xl text-xs px-1 top-0 right-0 ">
              {Cart}
            </span>
          ): (
            ""
          )} 
          <ShoppingCart size={30} />
        </div>
      </nav>

      {/* Search Item */}
      <div className="flex justify-center">
        <Input
          placeholder="Search item "
          className="w-md border-gray-300 border-2 h-9"
        />
      </div>
      {/* Categoreis */}
      <div className="w-100 mt-10">
        <h1 className="text-3xl font-semibold mx-30 mb-7">Categories</h1>
        <div className="flex gap-3 mx-10">
          <h3 className="border-2 px-3 py-1 rounded-2xl font-semibold ">
            Clothes{" "}
          </h3>
          <h3 className="border-2 px-3 py-1 rounded-2xl font-semibold ">
            Electronic
          </h3>
          <h3 className="border-2 px-3 py-1 rounded-2xl font-semibold ">
            Shoes{" "}
          </h3>
          <h3 className="border-2 px-3 py-1 rounded-2xl font-semibold ">
            Watches
          </h3>
          <h3 className="border-2 px-3 py-1 rounded-2xl font-semibold ">
            Tableware
          </h3>
        </div>
      </div>
      {/* divs */}
      <div className="px-20 mt-10 grid grid-cols-3 gap-4">
        <div className="w-[390px]" >
          <div className="rounded-2xl shadow-md hover:shadow-xl transition border-[0.5px] border-gray-400 duration-300 border-[0.5px] border-gray-400 overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-[200px] bg-gray-100">
              <Image
                src="/Assets/clothes1.jpg"
                alt="clothes"
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              {/* Title + Price */}
              <div className="flex justify-between items-center">
                <Link className="text-lg font-semibold" href={"/guest/productDetail"}>Classic Clothes</Link>
                <span className="text-green-600 font-bold">$10</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                a deserunt.
              </p>

              {/* Rating */}
              <div className="flex items-center text-yellow-400 text-sm">
                ⭐⭐⭐⭐☆
                <span className="text-gray-500 ml-2">(4.0)</span>
              </div>

              {/* Button */}
              <button
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                onClick={() => setCart((prev) => prev + 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-[390px]">
          <div className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-[0.5px] border-gray-400 overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-[200px] bg-gray-100">
              <Image
                src="/Assets/clothes1.jpg"
                alt="clothes"
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              {/* Title + Price */}
              <div className="flex justify-between items-center">
                <Link className="text-lg font-semibold hover:underline" href={"/guest/productDetail"}>Classic Clothes</Link>
                <span className="text-green-600 font-bold">$10</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                a deserunt.
              </p>

              {/* Rating */}
              <div className="flex items-center text-yellow-400 text-sm">
                ⭐⭐⭐⭐☆
                <span className="text-gray-500 ml-2">(4.0)</span>
              </div>

              {/* Button */}
              <button
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                onClick={() => setCart((prev) => prev + 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-[390px]">
          <div className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-[0.5px] border-gray-400 overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-[200px] bg-gray-100">
              <Image
                src="/Assets/clothes1.jpg"
                alt="clothes"
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              {/* Title + Price */}
              <div className="flex justify-between items-center">
                <Link className="text-lg font-semibold" href={"/guest/productDetail"}>Classic Clothes</Link>
                <span className="text-green-600 font-bold">$10</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                a deserunt.
              </p>

              {/* Rating */}
              <div className="flex items-center text-yellow-400 text-sm">
                ⭐⭐⭐⭐☆
                <span className="text-gray-500 ml-2">(4.0)</span>
              </div>

              {/* Button */}
              <button
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                onClick={() => setCart((prev) => prev + 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-[390px]">
          <div className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-[0.5px] border-gray-400 overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-[200px] bg-gray-100">
              <Image
                src="/Assets/clothes1.jpg"
                alt="clothes"
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              {/* Title + Price */}
              <div className="flex justify-between items-center">
                <Link className="text-lg font-semibold" href={"/guest/productDetail"}>Classic Clothes</Link>
                <span className="text-green-600 font-bold">$10</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                a deserunt.
              </p>

              {/* Rating */}
              <div className="flex items-center text-yellow-400 text-sm">
                ⭐⭐⭐⭐☆
                <span className="text-gray-500 ml-2">(4.0)</span>
              </div>

              {/* Button */}
              <button
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                onClick={() => setCart((prev) => prev + 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-[390px]">
          <div className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-[0.5px] border-gray-400 overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-[200px] bg-gray-100">
              <Image
                src="/Assets/clothes1.jpg"
                alt="clothes"
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              {/* Title + Price */}
              <div className="flex justify-between items-center">
                <Link className="text-lg font-semibold" href={"/guest/productDetail"}>Classic Clothes</Link>
                <span className="text-green-600 font-bold">$10</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                a deserunt.
              </p>

              {/* Rating */}
              <div className="flex items-center text-yellow-400 text-sm">
                ⭐⭐⭐⭐☆
                <span className="text-gray-500 ml-2">(4.0)</span>
              </div>

              {/* Button */}
              <button
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                onClick={() => setCart((prev) => prev + 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
