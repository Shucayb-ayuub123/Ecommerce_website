
import React from 'react'

const page = () => {
  return (
    <div className='w-full '>
        <div>
          <h1>Create account</h1>
            <form action="" >
                <div>
                    <label htmlFor="">username</label>
                     <Input type='text' placeholder='username' />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                     <Input  type='text' placeholder='Email'/>
                </div>
                <div>
                    <label htmlFor="">password</label>
                     <Input type='password' placeholder='Password' />
                </div>
               
            </form>
        </div>
    </div>
  )
}

export default page