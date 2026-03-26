"use client"
import { useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"
type ProtectRouteProp ={
  Authentification : boolean,
  children  : React.ReactNode
}
const ProtectRoute = ({Authentification , children}  : ProtectRouteProp) => {
    const router = useRouter()
    useEffect(() => {
         
        if (!Authentification) {
            router.push("/Login")
        }
    } , [Authentification , children])
 

    if (!Authentification) {
        return <div>
            Loading...
        </div>
    }

    return (
        <>{children}</>
    )
}

export default ProtectRoute