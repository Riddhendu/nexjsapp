'use cleint'
import React from 'react';
import { toast } from 'react-toastify';

const LogIn = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add your login logic here
    //     if (email && password) {
    //         // Perform login
    //         toast.success('Logged in successfully!');
    //     } else {
    //         toast.error('Please enter email and password.');
    //     }
    // };

    return (
        <div className='grid grid-cols-12 justify-center'>
            <div className='col-span-6 col-start-4 py-10'>
                <div className='border shadow-yellow-300 shadow-sm p-5'>
                    <h1 className='text-3xl mb-5 text-center'>Log In</h1>
                    <form >
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
