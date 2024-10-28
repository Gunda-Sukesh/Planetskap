import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Ensure Link is imported

const Open = () => {
    const [changingText, setChangingText] = useState("Events");
    const textOptions = ["Events", "Parties", "Concerts", "Workshops", "Meetups"];
    let textIndex = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            textIndex = (textIndex + 1) % textOptions.length;
            setChangingText(textOptions[textIndex]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen text-white font-agrandir"> {/* Applied Agrandir globally */}
            {/* Sticky Header */}
            <div className="sticky top-0 w-screen bg-white bg-opacity-20 py-2 px-8 rounded-lg shadow-lg z-10">
                <header className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        {/* Responsive logo size */}
                        <img src="/assets/logo.png" alt="PlanetSkap logo" className="w-8 h-8 md:w-10 md:h-10 mr-2" />
                        <span className="text-lg md:text-2xl">P L A N E T S K A P</span>
                    </div>
                    <nav>
                        {/* Increased space between nav items */}
                        <ul className="flex space-x-8 md:space-x-15 items-center">
                            <li className="flex items-center group">
                                <a href="/signup" className="font-bold text-sm md:text-base transition-all duration-300 transform group-hover:text-xl">
                                    SIGN UP
                                </a>
                            </li>
                            <li className="flex items-center group">
                                <a href="/login" className="font-bold text-sm md:text-base transition-all duration-300 transform group-hover:text-xl">
                                    LOGIN
                                </a>
                            </li>
                            <li className="flex items-center group">
                                <Link to="/about-us" className="font-bold text-sm md:text-base transition-all duration-300 transform group-hover:text-xl">
                                    ABOUT US
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>

            {/* First Section: Manage Your Events */}
            <div className="min-h-screen bg-cover bg-center bg-no-repeat snap-start" style={{ backgroundImage: `url('/assets/open.png')` }}>
                <div className="min-h-screen bg-indigo-600 bg-opacity-60 flex items-center justify-center">
                    <main className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                            <span className="block md:inline font-extrabold text-5xl md:text-8xl">Manage your </span><br />
                            <span className="ml-32 md:ml-48 text-6xl md:text-9xl transition-opacity duration-1000">{changingText}</span>
                        </h1>
                        <Link
                            to="/signup"
                            className="bg-transparent border border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300 mt-8 md:mt-16"
                        >
                            SIGN UP
                        </Link>
                    </main>
                </div>
            </div>

            {/* Second Section: Helping You to Plan Your Event */}
            <motion.div
                className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-900 text-white flex flex-col items-center justify-between snap-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="text-center px-6 md:px-8 py-8 md:py-12 flex-grow flex items-center justify-center"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6">HELPING YOU TO PLAN YOUR EVENT IS OUR PASSION</h2>
                        <p className="text-base md:text-lg">
                            "To achieve great things, two things are needed: a plan and not quite enough time."<br />
                            –Leonard Bernstein
                        </p>
                    </div>
                </motion.div>

                {/* Contact Us Section */}
                <motion.div
                    className="w-full bg-white text-indigo-700 py-4 px-6 md:px-8"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center mb-2">
                            <h3 className="text-lg md:text-2xl font-bold">CONTACT US</h3>
                        </div>
                        <a href="mailto:support@planetskap.org" className="text-indigo-700 text-base md:text-lg">
                            support@planetskap.org
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Open;
