import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero.png"
                    alt="Moto Trail en Araucanía"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-dark"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="uppercase tracking-[0.2em] text-sm md:text-base text-brand-orange font-bold mb-4 block">
                        Araucanía Andina - Chile
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        La Ruta del <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Pehuén
                        </span>
                    </h1>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-lg">
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                            <Calendar className="text-brand-orange" size={20} />
                            <span>7 y 8 de Febrero, 2026</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                            <MapPin className="text-brand-orange" size={20} />
                            <span>Geoparque Kutralkura</span>
                        </div>
                    </div>

                    <motion.a
                        href="#registration"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-orange-500/30 transition-all"
                    >
                        Inscribirse Ahora
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
