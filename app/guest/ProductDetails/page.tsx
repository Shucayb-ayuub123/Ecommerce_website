"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const page = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const url = searchParams.get("url");
  return (
    <div>
      <div className="mt-15 ml-17 mb-20">
        <Link
          href={"/guest/Shop"}
          className="font-semibold text-sm text-gray-500 space-x-10"
        >
          {" "}
          ⬅ Back to shop
        </Link>
      </div>
      {/* Product */}
      <div className="flex  justify-center mb-40 gap-10 items-center">
        <div className="w-[600px] h-[700px] rounded-2xl ">
          <img
            src={url}
            className="w-full h-full rounded-2xl shadow-xl"
            alt=""
          />
        </div>

        <div className="space-y-5">
          <h1 className="font-bold text-6xl ">{name}</h1>
          <p>⭐⭐⭐⭐(4.8)</p>
          <h3 className="text-4xl font-bold">{price}</h3>
          <p className="font-semibold text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Laborum nemo quae officia <br />
            deleniti voluptates! Praesentium, iure quos nesciunt id <br />
            minus expedita <br />
            alias optio odit aliquam quibusdam, aspernatur ab sit esse.
          </p>
          <div className="flex justify-center items-center gap-5">
            <span className="border-[1.5px] border-gray-400 gap-x-4 w-20 flex justify-center rounded-2xl ">
              <button>+</button> 1 <button>-</button>
            </span>
            <Button className={"w-sm bg-emerald-700 py-6 font-semibold text-md"}><ShoppingCart /> Add Cart</Button>
            <Heart  size={31}/>
          </div>
        </div>
      </div>
      {/* Review */}

      <div className="ml-42 mb-10">
        <h1 className="font-semibold text-3xl mb-7">Reviews</h1>

        <div className="bg-gray-200 w-11/12 p-4 shadow-lg rounded-xl">
          <div className="flex justify-between ">
          <h1 className="font-semibold text-md mb-2">Emma L.</h1>
          <p>2026-3-10</p>
          </div>
          <p className="text-md mb-2">⭐⭐⭐⭐⭐</p>
           <p>Beautiful craftsmanship. The leather gets better with age.</p>
        </div>
      </div>

      {/* Items may you like */}

      <div className="ml-42 mt-40">
       
        <h1 className="font-bold text-3xl mb-7">
          You May Also Like
        </h1>
         <Link
                href={{
                  pathname: "/guest/ProductDetails"}}
                
                className="mb-20"
              >
                <div className="relative">
                  <div className="w-[300px] h-[300px] shadow-xl rounded-2xl overflow-hidden">
                    <Image
                      src={url}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
                      alt=""
                    />
                  </div>

                  <div className="absolute top-2 left-51 bg-white p-1 rounded-2xl">
                    <Heart size={20} />
                  </div>
                  <div className="absolute bottom-6 right-5 bg-emerald-600 text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-2xl">
                    <ShoppingCart size={20} />
                  </div>

                  <div className="space-y-2 mt-3">
                    <h5 className="text-md font-semibold hover:underline">
                      {name}
                    </h5>
                    <p className="text-xs">⭐ 4.8 (2023)</p>
                    <p className="font-semibold">{price}</p>
                  </div>
                </div>
              </Link>
      </div>
    </div>
  );
};

export default page;
