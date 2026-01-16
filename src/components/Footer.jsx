```javascript
import React from 'react';
import { MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10 text-gray-400">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                            <MapPin className="text-brand-orange" /> Ruta del Pehuén
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Una experiencia única de moto trail en el corazón de la Araucanía Andina.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Mellado Motos</li>
                            <li>Temuco, Chile</li>
                            <li>contacto@obergfotos.cl</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/mtmototrack" className="hover:text-brand-orange transition-colors"><Instagram /></a>
                            <a href="https://www.facebook.com/fotos.oberg/" className="hover:text-brand-orange transition-colors"><Facebook /></a>
                            <a href="https://wa.me/+56994995070" className="hover:text-brand-orange transition-colors"><MessageCircle /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-8 border-t border-white/5 text-sm">
                    <p>© 2026 Ruta del Pehuén. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
