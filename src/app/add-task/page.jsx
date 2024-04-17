'use client'
import React, { useState } from 'react';
import login from '../../assets/login.svg'
import Image from 'next/image';
import { addTask } from '@/services/taskServices';
import { toast } from 'react-toastify';


const AddTask = () => {

    const [task, setTask] = useState({
        title: '',
        content: '',
        status: 'none',
        userId: '661bef24369171f3f1618191'
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await addTask(task)
            console.log(result)
            toast.success("Task craeted succesfully", {
                position: 'top-center'
            })
            setTask({
                title: '',
                content: '',
                status: '',
                userId: ''
            })
        } catch (error) {
            console.log(error)
            toast.error("Task craeted succesfully", error, {
                position: 'top-center'
            })
        }
    }
    return (
        <div className='grid grid-cols-12 justify-center'>
            <div className='col-span-6 col-start-4 py-10'>
                <div className='border shadow-gray-100 shadow-sm p-5'>
                    {/* <Image  className='text-center w-50'  src={login}/> */}
                    <h1 className='text-3xl mb-5 text-center'>Add Task</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                            <input type="text" name="title" id="title" className="mt-1 p-2 border rounded-md w-full" value={task.title} onChange={(e) => { setTask({ ...task, title: e.target.value }) }} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                            <textarea name="content" id="content" rows="3" className="mt-1 p-2 border rounded-md w-full" value={task.content} onChange={(e) => { setTask({ ...task, content: e.target.value }) }}></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                            <select name="status" id="status" className="mt-1 p-2 border rounded-md w-full" value={task.status} onChange={(e) => { setTask({ ...task, status: e.target.value }) }}>
                                <option value="none" disabled>Selected---Status</option>
                                <option value="todo">Pending</option>
                                <option value="inProgress">Completed</option>
                            </select>
                        </div>

                        <div className="flex justify-between">
                            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Clear</button>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Task</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default AddTask;
