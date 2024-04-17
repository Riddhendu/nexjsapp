import React from 'react';

const FeatureSection = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-center">
                            <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm0 0v6m0 0v-6m0 0h-6m6 0h-6M3 12a9 9 0 0118 0v6h-6v-6H3z"></path>
                            </svg>
                            <h3 className="text-xl font-bold mb-2">Task Management</h3>
                            <p className="text-gray-700">Organize your tasks efficiently with our intuitive task management system.</p>
                        </div>
                    </div>
                    {/* Feature 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-center">
                            <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                            <p className="text-gray-700">Work together with your team by sharing tasks and collaborating seamlessly.</p>
                        </div>
                    </div>
                    {/* Feature 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-center">
                            <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <h3 className="text-xl font-bold mb-2">Reminders</h3>
                            <p className="text-gray-700">Set reminders and never miss a deadline again.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;
