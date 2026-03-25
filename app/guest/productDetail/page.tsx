import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mx-100 mt-10">
        <div className="flex flex-col justify-center w-full mt-5">
          <Image
            src={"/Assets/clothes1.jpg"}
            alt=""
            width={"500"}
            height={"500"}
            className="rounded-lg px-2 w-full"
          />
          <h1 className="text-2xl mt-5 font-semibold">clasic</h1>
        </div>

        <div className="mt-4">
          <p className="font-medium text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Molestias
            nulla veniam cupiditate laborum commodi excepturi, nesciunt ipsam <br />
            placeat pariatur hic, a ea aliquam labore soluta similique! Ea <br />
            beatae repudiandae totam?
            <br />
            Illum accusantium voluptatibus, ipsa nam quibusdam impedit.
          </p>

          <div>
            <i>⭐</i>
            <i>⭐</i>
            <i>⭐</i>
            <i>⭐</i>
          </div>
        </div>

        <Button className={"mt-3 mb-10 bg-black  py-4  text-white font-bold text-md ml-100"}>
          Add cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default page;
