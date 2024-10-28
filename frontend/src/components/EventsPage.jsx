import React, { useState, useEffect } from 'react';
import {
    CalendarPlus,
    Ticket,
    Mail,
    WalletCards,
    Calendar,
    Lock,
    Globe
} from 'lucide-react';

const EventsPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const events = [
        { id: 1, title: 'Summer Music Festival', date: '2024-07-15' },
        { id: 2, title: 'Tech Conference 2024', date: '2024-08-20' },
        { id: 3, title: 'Art Exhibition', date: '2024-07-30' },
        { id: 4, title: 'Food & Wine Festival', date: '2024-08-05' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % events.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [events.length]);

    return (
        <main className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-[100px] rotate-45 animate-[floating_6s_infinite_ease-in-out]" />
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[100px] rotate-45 animate-[floating_6s_infinite_reverse_ease-in-out]" />
            </div>

            {/* Content Container */}
            <div className="relative min-h-screen p-4">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full" />
                    <div>
                        <h2 className="text-xl font-bold text-white/90">Welcome</h2>
                        <p className="text-white/70">UserName</p>
                    </div>
                    <div className="ml-auto flex items-center gap-3">
                        <img
                            src="assets/logo.png"
                            alt="Logo"
                            className="w-12 h-12 rounded-full transition-transform duration-300 hover:scale-110"
                        />
                        <span className="text-xl font-medium text-white tracking-widest">
                            P L A N E T S K A P
                        </span>
                    </div>
                </div>

                {/* Events Carousel */}
                <div className="bg-white/10 backdrop-blur-xl border-0 shadow-2xl p-6 rounded-lg">
                    <h1 className="text-2xl font-bold text-center text-white/90 mb-6">Current Events Posters</h1>

                    {/* Carousel Container */}
                    <div className="relative h-[400px] overflow-hidden rounded-xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out h-full"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {events.map((event) => (
                                <div
                                    key={event.id}
                                    className="min-w-full h-full flex flex-col items-center justify-center p-4"
                                >
                                    <div className="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden group">
                                        <img
                                            src={`/api/placeholder/400/600`}
                                            alt={`Event poster for ${event.title}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <h3 className="text-white font-semibold text-xl">{event.title}</h3>
                                            <p className="text-white/70">{event.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {events.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                                        }`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                    {/* Organize Event Dropdown */}
                    <div className="relative col-span-2 md:col-span-1">
                        <button
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                            onClick={() => setShowDropdown((prev) => !prev)}
                        >
                            <CalendarPlus className="w-5 h-5" />
                            <span>Organize an event</span>
                        </button>

                        {/* Dropdown Menu */}
                        {showDropdown && (
                            <div
                                className="absolute top-full left-0 w-full mt-2 bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden transition-all duration-300 z-10"
                            >
                                <button className="w-full px-4 py-2 text-white/90 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                                    <Lock className="w-4 h-4" />
                                    <span>Private</span>
                                </button>
                                <button className="w-full px-4 py-2 text-white/90 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    <span>Public</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Other Navigation Buttons */}
                    <button className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                        <Ticket className="w-5 h-5" />
                        <span>Buy Tickets</span>
                    </button>
                    <button className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5" />
                        <span>Invitations</span>
                    </button>
                    <button className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                        <WalletCards className="w-5 h-5" />
                        <span>Transactions</span>
                    </button>
                    <button className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>My events</span>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default EventsPage;