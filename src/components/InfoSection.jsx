import React from 'react';
import { motion } from 'framer-motion';
import { TreePine } from 'lucide-react';

const InfoSection = () => {

    return (
        <section id="info" className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">

                {/* Intro Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Navegación <span className="text-brand-orange">Digital</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            El <span className="text-white font-bold">Tour Trail Temuco 2026</span> es un evento de navegación que utiliza un roadbook digital.
                            Con el apoyo del <span className="text-brand-orange font-bold">@deportemunicipaltemuco</span>, nos daremos cita nuevamente en el principal centro deportivo de la Araucanía.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Se trata de un recorrido por caminos vehiculares consolidados donde la experiencia de navegación es lo primordial.
                            La dificultad técnica es apta para todo tipo de pilotos que gustan del moto trail.
                        </p>
                        <p className="text-brand-orange font-bold text-lg italic">
                            No es una carrera. Es un recorrido de navegación donde se busca cometer el mínimo de errores.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="glass-panel p-8">
                            <h3 className="text-2xl font-bold mb-4 text-brand-orange flex items-center gap-3">
                                <TreePine /> Modalidades
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <h4 className="font-bold text-white text-xl">🚀 Pro</h4>
                                    <p className="text-gray-400 text-sm">Para pilotos con experiencia en lectura de roadbook.</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <h4 className="font-bold text-white text-xl">🧭 Navegante</h4>
                                    <p className="text-gray-400 text-sm">Para aquellos que por primera vez prueban esta modalidad.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};


export default InfoSection;
