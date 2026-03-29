"use client"
import { useContext , useState , createContext } from "react";

export type CartType = {
    cart:number,
    setCart: React.Dispatch<React.SetStateAction<number>>
}

export const Cartcontext = createContext<CartType|null>(null)


export const CartProvider = ({children} : {children:React.ReactNode}) =>  {
   const [cart , setCart] = useState(0)
    return(
        <Cartcontext.Provider value={{cart , setCart}} >
            {children}
        </Cartcontext.Provider>
    )
}


export const useCart = () => {
  const context = useContext(Cartcontext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};