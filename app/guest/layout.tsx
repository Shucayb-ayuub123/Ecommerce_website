import React from "react";
import { CartProvider } from "@/context/Cartcontext";
import Navbar from "@/components/components/Navbar";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        {children}
        </CartProvider>
    </div>
  );
};

export default layout;
