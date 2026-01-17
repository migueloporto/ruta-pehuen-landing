import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Dynamically import all images from src/assets/gallery
    // Note: We use eager: true to import the modules directly to get the URLs
    const galleryImages = import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true });

    // Convert module object to array of objects with metadata
    const images = Object.values(galleryImages).map((mod, index) => {
        const src = mod.default;
        return {
            src: src,
            alt: `Imagen de la galería ${index + 1}`
        };
    });

    return (
        <section id="gallery" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Galería de <span className="text-brand-orange">Experiencias</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Descubre los paisajes que recorreremos. Desde bosques milenarios hasta volcanes imponentes.
                    </p>
                </div>

                <div className="columns-1 md:columns-3 gap-4 space-y-4">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ cursor: 'pointer' }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            onClick={() => setSelectedImage(img.src)}
                            className="relative group overflow-hidden rounded-xl break-inside-avoid"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-lg flex items-center gap-2">
                                    <Image size={24} /> Ver
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            src={selectedImage}
                            alt="Imagen Ampliada"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image itself
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-white/10"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
