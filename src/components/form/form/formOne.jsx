import React from 'react'

function FormOne() {
  return (
    <main>
        <h1 className='w-10/12 text-4xl font-bold m-auto text-center mt-8'>Personal info</h1>
        <p className='mt-2 text-slate-600 font-normal m-auto text-center mt-4'>Please provide your name, email address, and phone number.</p>
        <div className='mt-8 flex flex-col gap-4'>
            <div className='w-10/12 m-auto'>
            <label className="font-medium" htmlFor="name">Name</label>
            <input className=' block border-[0.1rem] w-9/12 py-2 rounded-md  pl-4'
             type="text" id="name" name="name" placeholder='e.g. Stephen King' />
            </div>
            <div className='w-10/12 m-auto'>
            <label className="font-medium" htmlFor="email">Email Address</label>
            <input className=' block border-[0.1rem] w-9/12 py-2 rounded-md  pl-4'
             type="email" id="email" name="email" placeholder='e.g. stephenking@gmail.com' />
            </div>
            <div className='w-10/12 m-auto'>
            <label className="font-medium" htmlFor="name">Phone Number</label>
            <input className=' block border-[0.1rem] w-9/12 py-2 rounded-md pl-4'
             type="text" id="phoneNumber" name="phoneNumber" placeholder='e.g +1 234 567 8900' />
            </div>
        </div>
    </main>
  )
}

export default FormOne