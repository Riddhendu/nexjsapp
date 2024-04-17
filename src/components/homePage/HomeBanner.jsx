'use client'
import React from 'react';
import image from '../../assets/image.jpg'
import Image from 'next/image';
const HomeBanner = () => {
    return (
        <div className="relative bg-gray-800 h-96">
            {/* Background image */}
            <Image
                className="object-cover w-full h-full"
                src={image}
                alt="Banner Image"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to Our Website</h1>
                <p className="text-lg md:text-xl text-center mb-8">Explore our amazing features</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none transition duration-300">Get Started</button>
            </div>
        </div>
    );
}

export default HomeBanner;
