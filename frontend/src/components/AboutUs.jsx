import React from 'react';
import { ArrowUpRight, Users, Target, Rocket } from 'lucide-react';

const HomeButton = () => (
    <a
        href="/"
        className="group  top-6 left-6 flex items-center space-x-2 text-white/70 transition-colors duration-500 hover:text-white/90"
        style={{ zIndex: 50 }} // Ensures it's above other elements
    >
        <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-500 ease-out">
            <img src="/assets/logo.png" alt="PlanetSkap logo" className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <span className="text-2xl transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:scale-105">
            P L A N E T S K A P
        </span>
    </a>
);

const AboutSection = ({ title, children, icon: Icon }) => (
    <section className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ease-out hover:bg-white/10 will-change-transform hover:shadow-2xl">
        {/* Apple-style subtle gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="flex items-start gap-4 relative z-10">
            <div className="p-3 bg-white/10 rounded-lg transition-all duration-500 ease-out group-hover:bg-white/20">
                <Icon className="w-6 h-6 text-white/80 transition-colors duration-500" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 transition-colors duration-500">
                        {title}
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-white/50 transition-all duration-500 ease-out group-hover:text-white/90 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="text-lg text-white/70 leading-relaxed transition-colors duration-500 group-hover:text-white/90">{children}</p>
            </div>
        </div>
    </section>
);

const AboutUs = () => {
    return (
        <main className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 md:px-8 lg:px-16">
            <HomeButton />
            <div className="max-w-5xl mx-auto">
                <header className="relative mb-16">
                    <div className="text-center relative group mt-8">
                        <div className="absolute inset-0 -top-32 bg-purple-500/10 blur-3xl rounded-full transition-all duration-700 ease-out group-hover:bg-purple-500/20" />
                        <h1 className="relative text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 transition-transform duration-700 ease-out hover:scale-[1.02]">
                            Who We Are
                        </h1>
                        <p className="relative text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                            At Planetskap, we are passionate about creating unforgettable events that bring people together in meaningful ways.
                        </p>
                    </div>
                </header>

                <div className="relative">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl transition-all duration-700 ease-out" />
                        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-all duration-700 ease-out" />
                    </div>

                    <div className="grid gap-8">
                        <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ease-out hover:bg-white/10">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <p className="relative z-10 text-lg md:text-xl text-white/70 leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                                As an event management company, we specialize in crafting experiences that are not just well-executed but also leave
                                a lasting impact on our clients and their guests. Our approach combines innovative technology with personalised service
                                to deliver exceptional results.
                            </p>
                        </div>

                        <AboutSection title="Why We Started" icon={Users}>
                            Planetskap was born from a vision to simplify event planning while elevating the quality and creativity behind every detail.
                            Our founders realised the challenges people face in managing events and wanted to offer a streamlined solution that makes the
                            entire process more enjoyable and efficient.
                        </AboutSection>

                        <AboutSection title="Our Vision and Mission" icon={Target}>
                            Our vision is to become the go-to platform for event management, where every event—be it a small gathering or a grand celebration—is
                            handled with expertise, care, and attention to detail. We aim to transform how events are planned and executed through innovative
                            solutions and exceptional service.
                        </AboutSection>

                        <AboutSection title="How We Plan to Grow" icon={Rocket}>
                            As we look to the future, we are committed to expanding our services and reaching new heights. Planetskape aims to leverage emerging trends
                            and technology in event management, continuously improving our platform to offer our users an even more seamless experience. We grow through
                            building lasting relationships and delivering exceptional results.
                        </AboutSection>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;
