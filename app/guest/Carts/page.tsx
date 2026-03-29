import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <div className="px-3 mt-3">
      <Card className="w-sm px-10 ">
        <div className="relative  w-full h-[240px] bg-gray-200 rounded-md">
          <Image
            src="/Assets/clothes1.jpg"
            alt="Clothes"
            fill
            className="object-cover object-center object-fill rounded-md transition duration-200 group-hover:scale-100"
          />
        </div>
         <div className="flex justify-between">
            <Link
              className="font-semibold text-lg hover:underline"
              href={"guest/productDetail"}
            >
              Clothes
            </Link>
            <p className="text-green-600 font-semibold text-lg">$20</p>
          </div>

        <div className="flex  w-full space-x-3">
          <Button className="bg-black text-md font-semibold">Add Cart</Button>

          <Button className="bg-green-600 text-md font-semibold">+ Quantity</Button>

          <Button className="bg-red-600 text-md font-semibold">- Quantity</Button>
        </div>
      </Card>

      <div className="bg-amber-400 mt-57 w-lg mx-auto mb-3 h-10  flex justify-around items-center rounded-lg">
         <h1 className="font-semibold text-xl">Total</h1>

         <div className="flex justify-around items-center space-x-5">
            <p className="font-semibold">$ 10293</p>
            <Button>Pay</Button>
         </div>
      </div>
    </div>
  );
};

export default page;
