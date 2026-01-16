import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

const Registration = () => {
    const paymentLink = "https://www.mercadopago.cl/payment-link/v1/redirect?link-id=569199fb-7320-41d1-9aab-2c8d5d63ce04&source=link";

    return (
        <section id="registration" className="py-20 relative overflow-hidden bg-brand-dark">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-brand-dark z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Inscripción y <span className="text-brand-orange">Reserva</span></h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Asegura tu cupo en esta aventura realizando tu pago de forma segura.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 md:p-12 border border-white/20 text-center"
                    >
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center">
                                <CreditCard size={40} className="text-brand-green" />
                            </div>
                        </div>

                        <h3 className="text-3xl font-bold mb-4">Pago de Inscripción</h3>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
                            Haz clic en el botón a continuación para ir a la pasarela de pago segura de MercadoPago.
                            Aceptamos tarjetas de crédito, débito y prepago.
                        </p>

                        <div className="flex flex-col items-center gap-4">
                            <motion.a
                                href={paymentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-3 transition-colors text-lg"
                            >
                                <span>Pagar con MercadoPago</span>
                            </motion.a>
                            <span className="text-xs text-gray-500 mt-2">Serás redirigido a mercadopago.cl</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
