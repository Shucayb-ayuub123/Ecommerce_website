"use client"
import { ShoppingCart } from "lucide-react";
import { Poppin } from "../font";
import { Inters } from "../font";
import { Robotos } from "../font";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/Cartcontext";
const page = () => {
  const {setCart} = useCart()
  return (
    <div>
      {/* Navbar */}
      
      {/* Search field */}
      <div className="mt-7 w-md px-2 mx-auto relative">
        <Input
          className=" border-2 px-9 text-md text-black h-9"
          placeholder="Search item"
        />
        <Search className="absolute top-2 left-4 " color="gray" size={20} />
      </div>

      {/* Product list */}

      <div className=" px-10 mt-10 grid grid-cols-3 gap-20">
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
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              culpa obcaecati. Reprehenderit numquam autem <br /> voluptas magni
              quasi non neque, deleniti excepturi reiciendis <br />
            </p>

            <div className="mt-3 flex justify-end">
              <i>⭐</i>
              <i>⭐</i>
              <i>⭐</i>
              <i>⭐</i>
            </div>

            <Button
              className="w-full mt-3"
              onClick={() => setCart((prev) => prev + 1)}
            >
              Add Cart
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;
