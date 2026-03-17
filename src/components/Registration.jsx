import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, AlertCircle } from 'lucide-react';

const Registration = () => {
    const paymentLink = "https://mpago.la/1JLgmZM";

    return (
        <section id="registration" className="py-20 relative overflow-hidden bg-brand-dark">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-brand-dark z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Inscripción y <span className="text-brand-orange">Reserva</span></h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                        Asegura tu cupo en esta aventura realizando tu registro y pago de forma segura.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-brand-orange/10 border border-brand-orange/30 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto backdrop-blur-sm"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            ¡REGÍSTRATE E INSCRÍBETE!
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Completa tu registro oficial para el evento en la plataforma de Roadbook Rally.
                        </p>
                        <a
                            href="https://roadbookrally.com/event/23LE6/tour-trail-temuco-2026/information"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full shadow-lg shadow-orange-500/20 transition-all text-lg"
                        >
                            Ir al formulario de inscripción
                        </a>
                    </motion.div>
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
                            Pronto se abrirán las inscripciones. Si deseas puedes pagar en 2 cuotas.
                            Consulta como coordinarlo directamente por mensaje a Moto Track.
                        </p>

                        <div className="text-left bg-black/30 p-6 rounded-xl border border-white/10 mb-8">
                            <h4 className="text-brand-orange font-bold mb-4 flex items-center gap-2">
                                <AlertCircle size={20} /> IMPORTANTE
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-300 list-disc pl-5">
                                <li><strong>Categoría Pro:</strong> Al inscribirte, declaras haber participado en: Taller Avanzado de roadbook (Moto Track), Tour Trail Temuco 2025 o 2 fechas de Trail Trophy.</li>
                                <li>Se requiere puntualidad estricta el día del evento.</li>
                                <li>Documentación completa y al día (moto y piloto).</li>
                                <li>La moto debe estar en óptimas condiciones mecánicas.</li>
                                <li>Salud compatible con conducción off-road.</li>
                                <li>Conducción prudente y responsable de acuerdo a la ley.</li>
                                <li>Liberación de responsabilidad a la organización en caso de accidentes.</li>
                            </ul>
                        </div>

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
