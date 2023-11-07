import React from 'react';
import image from "./login.svg";

const Employee = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the Employee logic here
    };

    const backgroundStyle = {
        backgroundImage: 'url("https://vu.edu.bd/uploads/media/images/pcampus1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div style={backgroundStyle} className='min-h-screen flex items-center justify-center'>
            <div className="bg-white bg-opacity-90 px-6 py-8 rounded shadow-xl flex flex-col md:flex-row gap-6 justify-center items-center w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="flex-shrink-0">
                    <img className='w-32 md:w-48 lg:w-64' src={image} alt="Employee Visual" />
                </div>
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <img className="mx-auto w-12 mb-5" src="https://vu.edu.bd/img/iconlogo.png" alt="Varendra University Logo" />
                        <h3 className="text-2xl font-bold text-[#c44c2c]">Varendra University</h3>
                        <p className="text-xl font-bold">EMPLOYEE's PANEL</p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-4">
                            <label className="block" htmlFor="employeeID">Employee ID</label>
                            <input 
                                type="text" 
                                placeholder="Employee ID"
                                id="employeeID"
                                name="employeeID"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block" htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                placeholder="Password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-between">
                            <button type="submit" className="w-full rounded px-5 py-2.5 bg-[#c44c2c] text-white hover:bg-gradient-to-r hover:ring-2 hover:ring-green-400">
                                LOG IN
                            </button>
                            <button type="button" className="text-sm text-blue-600 hover:underline mt-4" >
                                Forgot password?
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Employee;
