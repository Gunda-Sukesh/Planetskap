import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';

const ProfileSetupPage = () => {
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your profile setup logic here
        console.log({ username, dob, phone, address });
    };

    return (
        <main className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
            <div className="relative min-h-screen flex items-center justify-center p-4">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating Circles */}
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

                    {/* Additional 3D Shapes */}
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-[100px] rotate-45 animate-[floating_6s_infinite_ease-in-out]" />
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[100px] rotate-45 animate-[floating_6s_infinite_reverse_ease-in-out]" />

                    {/* Cubes */}
                    <div className="absolute top-5 left-10 w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 rounded-md shadow-lg animate-[spin_6s_linear_infinite]" />
                    <div className="absolute bottom-10 right-14 w-16 h-16 bg-gradient-to-br from-red-400 to-yellow-500 rounded-md shadow-xl animate-[spin_8s_reverse_linear_infinite]" />
                    <div className="absolute top-1/3 left-3/4 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md shadow-md animate-[spin_7s_linear_infinite]" />
                    <div className="absolute bottom-1/3 right-3/4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md shadow-2xl animate-[spin_9s_reverse_linear_infinite]" />
                    <div className="absolute top-1/4 right-1/3 w-14 h-14 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-md shadow-xl animate-[spin_10s_linear_infinite]" />

                    {/* More shapes for style */}
                    <div className="absolute top-10 right-20 w-14 h-14 bg-gradient-to-r from-pink-600 to-purple-600 hexagon transform rotate-12 translate-x-6 translate-y-8 shadow-xl animate-[spin_8s_reverse_linear_infinite]" />
                    <div className="absolute top-40 left-40 w-20 h-20 bg-gradient-to-br from-yellow-500 to-purple-600 hexagon transform translate-x-10 translate-y-10 shadow-2xl animate-[spin_5s_linear_infinite]" />
                </div>

                {/* Profile Setup Container */}
                <div className="relative w-full max-w-md">
                    {/* Logo/Brand Section */}
                    <div className="text-center mb-8 mt-8"> {/* Added margin-top for space above the logo */}
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <img
                                src="assets/logo.png" // Updated path for the logo
                                alt="Planetskape Logo"
                                className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"
                            />
                            <Link
                                to="/"
                                className="text-3xl text-white/90 transition-transform duration-500 hover:scale-105 relative group"
                            >
                                P L A N E T S K A P
                            </Link>
                        </div>
                        <p className="text-white/70">Complete your profile details</p>
                    </div>

                    {/* Profile Setup Form */}
                    <div className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 shadow-2xl">
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <form onSubmit={handleSubmit} className="relative space-y-6">
                            {/* Profile Picture */}
                            <div className="flex items-center justify-center mb-6">
                                <label htmlFor="profilePicture" className="relative group cursor-pointer">
                                    <div className="w-24 h-24 bg-white/10 border-2 border-white/20 rounded-full flex items-center justify-center text-white/60 shadow-lg transition-all duration-300 group-hover:bg-white/20">
                                        <FaCamera size={30} />
                                    </div>
                                    <input
                                        type="file"
                                        id="profilePicture"
                                        className="hidden"
                                        accept="image/*"
                                    />
                                </label>
                            </div>

                            {/* Username Field */}
                            <div className="space-y-2">
                                <label htmlFor="username" className="block text-sm font-medium text-white/70">
                                    Username
                                </label>
                                <div className="relative group/input">
                                    <input
                                        type="text"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 
                                                 transition-all duration-300 outline-none shadow-inner
                                                 focus:bg-white/10 focus:border-white/20 focus:ring-2 focus:ring-purple-500/20
                                                 hover:bg-white/10 hover:border-white/20"
                                        placeholder="Choose a username"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Date of Birth Field */}
                            <div className="space-y-2">
                                <label htmlFor="dob" className="block text-sm font-medium text-white/70">
                                    Date of Birth
                                </label>
                                <div className="relative group/input">
                                    <input
                                        type="date"
                                        id="dob"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 
                                                 transition-all duration-300 outline-none shadow-inner
                                                 focus:bg-white/10 focus:border-white/20 focus:ring-2 focus:ring-purple-500/20
                                                 hover:bg-white/10 hover:border-white/20"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone Number Field */}
                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-sm font-medium text-white/70">
                                    Phone Number
                                </label>
                                <div className="relative group/input">
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 
                                                 transition-all duration-300 outline-none shadow-inner
                                                 focus:bg-white/10 focus:border-white/20 focus:ring-2 focus:ring-purple-500/20
                                                 hover:bg-white/10 hover:border-white/20"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Address Field */}
                            <div className="space-y-2">
                                <label htmlFor="address" className="block text-sm font-medium text-white/70">
                                    Address
                                </label>
                                <div className="relative group/input">
                                    <textarea
                                        id="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 
                                                 transition-all duration-300 outline-none shadow-inner
                                                 focus:bg-white/10 focus:border-white/20 focus:ring-2 focus:ring-purple-500/20
                                                 hover:bg-white/10 hover:border-white/20"
                                        placeholder="Enter your address"
                                        rows="2" // Reduced number of rows to decrease the box size
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="group/btn relative w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl 
                                         px-4 py-3 font-medium transition-all duration-300 shadow-lg 
                                         hover:from-purple-500 hover:to-blue-500 hover:shadow-xl hover:shadow-purple-500/40
                                         transform hover:-translate-y-1 hover:scale-105"
                            >
                                <span>Complete Profile</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfileSetupPage;
