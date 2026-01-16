import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileText } from 'lucide-react';

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
                        Asegura tu cupo en esta aventura en dos simples pasos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Step 1: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 border border-white/20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-xl">1</div>
                            <h3 className="text-2xl font-bold">Registro</h3>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Completa tus datos personales y de tu motocicleta en el formulario de inscripción.
                        </p>

                        {/* Google Form Placeholder */}
                        <div className="bg-white/5 rounded-xl border border-white/10 h-96 flex items-center justify-center relative overflow-hidden group">
                            <div className="text-center p-6">
                                <FileText size={48} className="mx-auto text-gray-500 mb-4" />
                                <p className="text-gray-400 mb-4">Formulario de Google</p>
                                <a
                                    href="https://docs.google.com/forms/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white/10 hover:bg-white/20 text-white py-2 px-6 rounded-lg transition-colors text-sm"
                                >
                                    Abrir Formulario (Ejemplo)
                                </a>
                                <p className="text-xs text-brand-orange mt-2">* Debes configurar el enlace correcto</p>
                            </div>
                            {/* 
                    Note: To embed properly, replace the above div contents with:
                    <iframe src="YOUR_GOOGLE_FORM_EMBED_URL" className="w-full h-full" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                 */}
                        </div>
                    </motion.div>

                    {/* Step 2: Payment */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 border border-white/20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xl">2</div>
                            <h3 className="text-2xl font-bold">Pago</h3>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Una vez registrado, realiza el pago de tu inscripción mediante MercadoPago para confirmar tu cupo.
                        </p>

                        <div className="bg-white/5 rounded-xl border border-white/10 h-96 flex flex-col items-center justify-center p-8">
                            <CreditCard size={64} className="text-brand-green mb-6" />
                            <h4 className="text-xl font-bold mb-4">Reserva tu Cupo</h4>
                            <p className="text-gray-400 text-center mb-8 text-sm">
                                Haz clic en el botón para pagar de forma segura con tarjetas de crédito, débito o prepago.
                            </p>
                            <div className="flex justify-center w-full">
                                <motion.a
                                    href={paymentLink}
                                    target="_blank"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-3 transition-colors w-full justify-center max-w-xs"
                                >
                                    <span>Pagar con MercadoPago</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
