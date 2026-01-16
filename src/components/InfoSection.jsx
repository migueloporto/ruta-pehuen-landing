import React from 'react';
import { motion } from 'framer-motion';
import { Map, Clock, AlertCircle, CheckCircle2, Tent, TreePine } from 'lucide-react';

const InfoSection = () => {
    const requirements = [
        "Motocicletas desde 300cc",
        "Dificultad Baja (orientada al Trail)",
        "Equipo de protección personal completo",
        "Set de herramientas básicas",
        "Equipo de camping (carpa, saco, colchoneta)",
        "Pase de ingreso a Parque Nacional Conguillío (día 07 Feb)"
    ];

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
                            Una Aventura <span className="text-brand-orange">Inolvidable</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            ¿Te imaginas hacer un recorrido de más de 400 kilómetros, entre centenarios bosques de Araucarias,
                            cuyo entorno está dominado por volcanes activos, lagos, lagunas y escoriales?
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Eso es La Ruta del Pehuén, un moto-trail que te acercará a lugares de profunda y encantadora belleza,
                            ubicados en la Araucanía Andina, dentro del Geoparque Kutralkura de la Unesco.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        <div className="glass-panel p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all">
                            <Map size={40} className="text-brand-green mb-4" />
                            <h3 className="text-xl font-bold mb-2">400+ KM</h3>
                            <p className="text-sm text-gray-400">De recorrido Trail</p>
                        </div>
                        <div className="glass-panel p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all">
                            <Clock size={40} className="text-brand-orange mb-4" />
                            <h3 className="text-xl font-bold mb-2">2 Días</h3>
                            <p className="text-sm text-gray-400">7 y 8 de Febrero</p>
                        </div>
                        <div className="glass-panel p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all">
                            <AlertCircle size={40} className="text-yellow-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Dificultad Baja</h3>
                            <p className="text-sm text-gray-400">Apto para Trail</p>
                        </div>
                        <div className="glass-panel p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all">
                            <Tent size={40} className="text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Camping</h3>
                            <p className="text-sm text-gray-400">Bajo las estrellas</p>
                        </div>
                    </motion.div>
                </div>

                {/* Requirements */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <CheckCircle2 className="text-brand-orange" /> Requisitos y Seguridad
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {requirements.map((req, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                                <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                                <span className="text-gray-300">{req}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline Program */}
                <div id="program">
                    <h3 className="text-3xl font-bold mb-12 text-center">Itinerario de Ruta</h3>
                    <div className="relative border-l-2 border-white/20 ml-6 md:ml-12 space-y-12">

                        {/* Day 1 */}
                        <div className="relative pl-8 md:pl-12">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-orange shadow-lg shadow-orange-500/50"></span>
                            <h4 className="text-2xl font-bold mb-4 text-brand-orange">Sábado 07 - El Inicio</h4>
                            <div className="space-y-6">
                                <TimelineItem time="08:45" title="Reunión en Motolike, Temuco" desc="Entrega de equipaje de campamento para vehículo de apoyo." />
                                <TimelineItem time="09:15" title="Briefing de Pilotos" desc="Entrega de hidratación y archivo GPX." />
                                <TimelineItem time="09:30" title="Salida a la Ruta" desc="Inicio de la aventura." />
                                <TimelineItem time="21:00" title="Puesta de Sol" desc="Cima del Batea Mahuida." />
                                <TimelineItem time="22:10" title="Cena y Campamento" desc="Asado de camaradería." />
                            </div>
                        </div>

                        {/* Day 2 */}
                        <div className="relative pl-8 md:pl-12">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-orange shadow-lg shadow-orange-500/50"></span>
                            <h4 className="text-2xl font-bold mb-4 text-brand-orange">Domingo 08 - El Regreso</h4>
                            <div className="space-y-6">
                                <TimelineItem time="08:45" title="Desayuno de Campo" desc="Energía para el día." />
                                <TimelineItem time="09:30" title="Segunda Etapa" desc="Salida al recorrido." />
                                <TimelineItem time="19:30" title="Término en Lonquimay" desc="Regreso conjunto a Temuco." />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

const TimelineItem = ({ time, title, desc }) => (
    <div className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors border border-white/5">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-brand-orange font-mono font-bold text-lg">{time}</span>
            <div>
                <h5 className="font-bold text-white">{title}</h5>
                <p className="text-sm text-gray-400">{desc}</p>
            </div>
        </div>
    </div>
);

export default InfoSection;
