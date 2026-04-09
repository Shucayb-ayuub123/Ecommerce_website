import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
const page = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="w-full relative h-130 mb-10">
        <Image
          src="/Assets/b1 (10).jpg"
          alt="hero banner"
          className="brightness-70 z-0"
          fill
        />
        <div className="absolute z-20 mt-40 ml-10 space-y-5">
          <h1 className="text-5xl font-bold text-white">
            Elevate Your <br /> Everyday
          </h1>
          <p className="text-white">
            Curated essentials crafted with intention. Discover pieces <br />{" "}
            that define modern elegance.
          </p>

          <div className="flex gap-x-10 ">
            <button className="bg-emerald-700 font-semibold px-5 py-2 text-sm text-white rounded-2xl">
              shop now
            </button>
            <button className="bg-transparent font-semibold text-sm border-[1.5px] text-white border-white px-3 rounded-2xl ">
              Explore Fashion
            </button>
          </div>
        </div>
      </div>

      {/* Shop by Category */}

      <div className="mb-10">
        <h1 className="text-center font-bold text-3xl mb-7">
          Shop by Category
        </h1>
        <div className="flex justify-center gap-6">
          <div className="flex flex-col justify-center items-center bg-gray-100 w-2/12 h-30 shadow-md">
            <p className="text-3xl">🎧</p>
            <p className="font-semibold mt-2">Electronics</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-100 w-2/12 h-30 shadow-md">
            <p className="text-3xl">👘</p>
            <p className="font-semibold mt-2">Fashion</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-100 w-2/12 h-30 shadow-md">
            <p className="text-3xl">⌚</p>
            <p className="font-semibold mt-2">Accessories</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-100 w-2/12 h-30 shadow-md">
            <p className="text-3xl">👟</p>
            <p className="font-semibold mt-2">Footwear</p>
          </div>
        </div>
      </div>

      {/* Featured */}

      <div className="flex justify-between items-center">
        <h1 className="ml-30 mb-2 font-bold text-2xl mt-10">Featured</h1>
        <Link
          href={"#"}
          className=" mr-30 mt-10 mb-2 cursor-pointer hover:space-x-2 text-green-700 text-md"
        >
          View All ➡
        </Link>
      </div>
      {/* Cards */}
      <div className="ml-30 grid grid-cols-4">
        <div className="relative">
          <div className="w-[300px] h-[300px] shadow-xl rounded-2xl overflow-hidden">
            <img
              src="/Assets/b1 (11).jpg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
              alt=""
            />
          </div>

          <div className="absolute top-2 right-20">
            <Heart />
          </div>

          <div className="space-y-2 mt-3">
            <h5 className="text-md font-semibold">Watches</h5>
            <p className="text-xs">⭐ 4.8 (2023)</p>
            <p className="font-semibold">$288.33</p>
          </div>
        </div>
        <div className="relative">
         <div className="w-[300px] h-[300px] shadow-xl rounded-2xl overflow-hidden">
  <img
    src="/Assets/b1 (9).jpg"
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
    alt=""
  />
</div>

          <div className="absolute top-2 right-20">
            <Heart />
          </div>

          <div className="space-y-2 mt-3">
            <h5 className="text-md font-semibold">T-shirts</h5>
            <p className="text-xs">⭐ 4.8 (2023)</p>
            <p className="font-semibold">$288.33</p>
          </div>
        </div>
        <div className="relative">
         <div className="w-[300px] h-[300px] shadow-xl rounded-2xl overflow-hidden">
  <img
    src="/Assets/b1 (5).jpg"
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
    alt=""
  />
</div>

          <div className="absolute top-2 right-20">
            <Heart />
          </div>

          <div className="space-y-2 mt-3">
            <h5 className="text-md font-semibold">Studio Pro Headphones</h5>
            <p className="text-xs">⭐ 4.8 (2023)</p>
            <p className="font-semibold">$288.33</p>
          </div>
        </div>
        <div className="relative">
          <div className="w-[300px] h-[300px] shadow-xl rounded-2xl overflow-hidden">
  <img
    src="/Assets/b1 (20).jpg"
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
    alt=""
  />
</div>

          <div className="absolute top-2 right-20">
            <Heart />
          </div>

          <div className="space-y-2 mt-3">
            <h5 className="text-md font-semibold">Shoes</h5>
            <p className="text-xs">⭐ 4.8 (2023)</p>
            <p className="font-semibold">$288.33</p>
          </div>
        </div>
      </div>

      {/* Discount Banner */}

      <div className="mt-20 w-10/12 h-50 rounded-2xl flex justify-center items-center bg-emerald-600 mx-auto mb-40">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-white font-bold text-4xl">
            Seasonal Sale
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Up to 25% off selected items
          </p>
          <button className="bg-white w-30 py-2 rounded-2xl font-semibold">
            Shop sales{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
