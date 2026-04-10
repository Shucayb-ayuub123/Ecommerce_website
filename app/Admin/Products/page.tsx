import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Delete, DeleteIcon, Pencil, Trash2 } from 'lucide-react';
const page = () => {
  return (
    <div>
      {/* Heading */}
      <div className=" mb-10 flex justify-between items-center ">
        <div>
          <h1 className="font-bold text-3xl">Products</h1>
          <p className="text-gray-600">7 products</p>
        </div>

        <Button className={"mr-5 h-10 font-bold bg-emerald-700"}>+ Add Product</Button>
      </div>
      
      {/* Table */}

      <div className="mx-10">

         <Table className="bg-gray-100 rounded-lg">
            <TableHeader>
        <TableRow className="py-2">
          <TableHead className="font-semibold text-md text-gray-600">Product</TableHead>
          <TableHead className="font-semibold text-md text-gray-600">Category</TableHead>
          <TableHead className="font-semibold text-md text-gray-600">Price</TableHead>
          <TableHead className="font-semibold text-md text-gray-600">Rating</TableHead>
          <TableHead className="font-semibold text-md text-gray-600 text-left">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="py-3">
       
          <TableRow className="h-15">
            <TableCell className="flex items-center gap-2 mx-2">
                 <div className="w-[50px] h-[40px]">

                <Image src={"/Assets/b1 (5).jpg"} alt="" className="w-full h-full" width={40} height={40} />
                 </div>
                Studio HeadPhones
                
                </TableCell>
            <TableCell> Electornics </TableCell>
            <TableCell>$282.2</TableCell>
            <TableCell>4.8 ⭐</TableCell>
            <TableCell className="flex justify-center items-center gap-3"><Pencil color="gray" size={20} /> <Trash2 color="red" size={20}/></TableCell>
          </TableRow>
          <TableRow className="h-15">
            <TableCell className="flex items-center gap-2">
                 <div className="w-[50px] h-[40px]">

                <Image src={"/Assets/b1 (8).jpg"} alt="" className="w-full h-full" width={40} height={40} />
                 </div>
                Studio HeadPhones
                
                </TableCell>
            <TableCell> Electornics </TableCell>
            <TableCell>$282.2</TableCell>
            <TableCell>4.8 ⭐</TableCell>
            <TableCell className="flex justify-center items-center gap-3"><Pencil color="gray" size={20} /> <Trash2 color="red" size={20}/></TableCell>
          </TableRow>
          <TableRow className="h-15">
            <TableCell className="flex items-center gap-2 mx">
                 <div className="w-[50px] h-[40px]">

                <Image src={"/Assets/b1 (6).jpg"} alt="" className="w-full h-full" width={40} height={40} />
                 </div>
                Studio HeadPhones
                
                </TableCell>
            <TableCell> Electornics </TableCell>
            <TableCell>$282.2</TableCell>
            <TableCell>4.8 ⭐</TableCell>
            <TableCell className="flex justify-center items-center gap-3"><Pencil color="gray" size={20} /> <Trash2 color="red" size={20}/></TableCell>
          </TableRow>
       
      </TableBody>
    
    </Table>

      </div>
    </div>
  );
};

export default page;
