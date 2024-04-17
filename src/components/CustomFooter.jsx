 'use client';

 import React from 'react'

 const CustomFooter =()=>{
    return (
        <footer className='h-20 bg-blue-600 '>
            <div className='flex justify-between'>
                <div>
                    <h1>Welcome to work manager</h1>
                </div>
                <div >
                    <h1>Importent Links</h1>
                    <ul className='flex justify-between space-x-3'>
                        <li>Facebook</li>
                        <li>Linkedin</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
 }

 export default CustomFooter