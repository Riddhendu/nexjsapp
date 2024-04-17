'use client'
import { addUser } from '@/services/taskServices';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
const signup = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        about: '',
        profileUrl:''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await addUser(user)
            console.log(result)
            toast.success("User craeted succesfully", {
                position: 'top-center'
            })
            setUser({
                name: '',
                email: '',
                password: '',
                about: '',
                profileUrl:''
            })
        } catch (error) {
            console.log(error)
            toast.error("Error in creating of user", error, {
                position: 'top-center'
            })
        }
    }
  return (
    <div className='grid grid-cols-12 justify-center'>
        <div  className= 'col-span-6 col-start-4 py-10'>
            <div className='border shadow-yellow-300 shadow-sm p-5' >
                <h1 className='text-3xl'>Create user</h1>
                <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" name="name" id="name" className="mt-1 p-2 border rounded-md w-full" value={user.name} onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" className="mt-1 p-2 border rounded-md w-full" value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="password" id="password" className="mt-1 p-2 border rounded-md w-full" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
                            <textarea name="about" id="about" rows="3" className="mt-1 p-2 border rounded-md w-full" value={user.about} onChange={(e) => { setUser({ ...user, about: e.target.value }) }}></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="profileUrl" className="block text-sm font-medium text-gray-700">Profile URL</label>
                            <input type="text" name="profileUrl" id="profileUrl" className="mt-1 p-2 border rounded-md w-full" value={user.profileUrl} onChange={(e) => { setUser({ ...user, profileUrl: e.target.value }) }} />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create User</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default signup