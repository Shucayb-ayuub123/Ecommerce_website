import React from "react";
import { LayoutDashboard } from "lucide-react";
import { Box } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Users } from "lucide-react";
import { ChartBarStacked } from "lucide-react";
import Link from "next/link";
const Dashboard = () => {
  const Links = [
    { icon: LayoutDashboard, name: "Dashboard", path: "/Admin" },
    { icon: Box, name: "Products", path: "/Admin/Products" },
    { icon: ShoppingCart, name: "Orders", path: "/Admin/Orders" },
    { icon: Users, name: "Users", path: "/Admin/Users" },
    { icon: ChartBarStacked, name: "Category", path: "/Admin/Category" },
  ];
  return (
    <div className="flex">
      <div className="h-176 bg-gray-300 w-70">
        <div className="h-20 border-[1.5px] flex justify-center items-center mb-5 border-b-black w-full">
          <h1 className="text-xl font-bold">ShopMate</h1>
        </div>
        <ul className="space-y-1 px-4">
          {Links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className="flex items-center gap-x-3.5 hover:bg-gray-200 p-3 rounded-lg  "
                >
                  {" "}
                  <span>
                    <item.icon />{" "}
                  </span>{" "}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-gray-300 border-l-[1.5px] flex justify-start items-center px-4  border-black w-full h-20">
             <p className="font-semibold">welcome back , Admin</p>
      </div>
    </div>
  );
};

export default Dashboard;
