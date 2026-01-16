import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'lucide-react';

const Gallery = () => {
    const images = [
        { src: '/assets/volcano.png', alt: 'Volcán y Lago', colSpan: 'md:col-span-2' },
        { src: '/assets/hero.png', alt: 'Ruta en Moto', colSpan: 'md:col-span-1' },
        { src: '/assets/campfire.png', alt: 'Campamento Nocturno', colSpan: 'md:col-span-3' },
    ];

    return (
        <section id="gallery" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Galería de <span className="text-brand-orange">Experiencias</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Descubre los paisajes que recorreremos. Desde bosques milenarios hasta volcanes imponentes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative group overflow-hidden rounded-xl ${img.colSpan} h-64 md:h-80`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-lg">{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-4 text-sm">¿Quieres ver más?</p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-brand-orange hover:text-white transition-colors"
                    >
                        <Image size={20} />
                        <span>Ver álbum completo en Google Photos</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
