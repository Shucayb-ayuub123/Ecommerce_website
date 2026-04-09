"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
const page = () => {
  const [Active, setActive] = useState<string>("");
  const Products = [
    { id: 1  , name: "T-Shirt", price: "$202.3", url: "/Assets/b1 (1).jpg" },
    { id: 2  , name: "Shirt", price: "$202.3", url: "/Assets/b1 (2).jpg" },
    { id: 3  , name: "Shirts", price: "$202.3", url: "/Assets/b1 (3).jpg" },
    { id: 4  , name: "Watch", price: "$202.3", url: "/Assets/b1 (4).jpg" },
    { id: 5  , name: "HeadPhone", price: "$202.3", url: "/Assets/b1 (5).jpg" },
    { id: 6  , name: "Phone17", price: "$202.3", url: "/Assets/b1 (22).jpg" },
  ];
  return (
    <>
      <div className="w-10/12 mx-auto animate-in fade-in-10  slide-in-from-bottom-5 duration-400">
        <div className="mt-10 mb-5 animate-in fade-in-10  slide-in-from-bottom-5 duration-400">
          <h1 className="font-semibold text-4xl mb-2">Shop</h1>
          <p className="font-light text-gray-600">
            Discover our curated collection
          </p>
        </div>
        {/* Search Item */}
        <div className="flex gap-3 mb-3 animate-in fade-in-10  slide-in-from-bottom-5 duration-400">
          <Input
            className="h-10 px-10 border-2 border-emerald-600 focus:border-none focus:outline-none focus:ring-0"
            placeholder="Search product"
          />
          <select className="border-2 border-gray-500 rounded-lg px-2">
            <option value="">Sorted by</option>
            <option>Price : Low ➡ High</option>
            <option>Price : High ➡ Low</option>
            <option>Top Rated</option>
          </select>
          <Search className="absolute left-36 top-50" />
        </div>
        {/* Category */}

        <div className="flex mb-10 gap-3">
          {[
            "All",
            "🎧 Electronics",
            " 👘Fashion",
            "⌚ Accessories",
            "👟 Footwear",
          ].map((item) => (
            <div
              key={item}
              onClick={() => setActive(item)}
              className={` cursor-pointer px-4 py-3 rounded-2xl ${Active == item ? "bg-emerald-500 text-white" : "bg-gray-200 text-black"}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {/* Cards */}
      <div className="w-12/12 mb-10 animate-in fade-in-10  slide-in-from-bottom-5 duration-400">
        <div className="ml-30 grid grid-cols-4">
          {Products.map((items) => {
            return (
              <Link href={"/guest/ProductDetails"} key={items.id} className="mb-10">
              <div className="relative " >
                <div className="w-[300px] h-[300px] shadow-xl rounded-2xl overflow-hidden">
                  <img
                    src={items.url}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
                    alt=""
                  />
                </div>

                <div className="absolute top-2 right-20 bg-white p-1 rounded-2xl">
                  <Heart size={20}/>
                </div>

                <div className="space-y-2 mt-3">
                  <h5 className="text-md font-semibold hover:underline">{items.name}</h5>
                  <p className="text-xs">⭐ 4.8 (2023)</p>
                  <p className="font-semibold">{items.price}</p>
                </div>
              </div>
              
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
