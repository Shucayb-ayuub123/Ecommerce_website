"use client";
import React from 'react'
import ProtectRoute from '../ProtectRout'

const page = () => {
  const Authentication = document.cookie.includes("token")
  return (
    <ProtectRoute Authentification={Authentication}>

    <div>
        <h1>Welcome to dashboard</h1>
    </div>

    </ProtectRoute>
  )
}

export default page