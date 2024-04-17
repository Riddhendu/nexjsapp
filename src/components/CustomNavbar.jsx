'use client';

import Link from 'next/link';
 import React from 'react'

 const CustomNavbar =()=>{
    return(
        
        <nav className='bg-blue-600 h-12 py-2 px-3 flex justify-between items-center'> 
          <div className='brand'>
            <h1 className='text-2xl font-semibold'> <Link href='/' className='hover:text-blue-200'>Work Manager</Link></h1>
            
          </div>
          <div>
            <ul className='flex space-x-5'>
                <li><Link href='/' className='hover:text-blue-200'>Home</Link></li>
                <li><Link href='/add-task' className='hover:text-blue-200'>Add Task</Link></li>
                <li><Link href='/show-task' className='hover:text-blue-200'>Show Task</Link></li>
            </ul>
          </div>
          <div>
          <ul className='flex space-x-4'>
                <li><Link href='/sing-up' className='hover:text-blue-200'>SignUp</Link></li>
                <li><Link href='/log-in' className='hover:text-blue-200'>Login</Link></li>
            </ul>
          </div>
        </nav>
        
    )
 }

 export default CustomNavbar