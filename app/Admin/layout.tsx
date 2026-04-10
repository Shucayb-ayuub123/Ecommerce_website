import Dashboard from '@/components/components/Dashboard'
import React from 'react'

const AdminLayout = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='relative'>
      
        <Dashboard />

      <div className='absolute top-25 right-0 left-65'>

      {children}
      </div>
    </div>
  )
}

export default AdminLayout
