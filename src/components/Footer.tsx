import { Youtube, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white mb-4">ASTER India</h3>
            <p className="text-neutral-400 mb-4 max-w-md leading-relaxed">
              India's leading multi-seat software solution provider. Helping businesses and educational institutions save costs and increase productivity.
            </p>
            <div className="flex items-center gap-2 text-neutral-400">
              <MapPin size={18} />
              <span>Kerala, India</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <motion.button
                  onClick={() => scrollToSection('features')}
                  className="text-neutral-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Features
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('pricing')}
                  className="text-neutral-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Pricing
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-neutral-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Use Cases
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="text-neutral-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Contact
                </motion.button>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <motion.a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle size={20} />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="mailto:info@asterindia.com"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-[var(--color-trust-blue)] transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-neutral-800 pt-8 text-center text-neutral-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; 2025 ASTER India. All rights reserved.</p>
          <p className="text-sm mt-2">
            Made with ❤️ for Indian Businesses
          </p>
        </motion.div>
      </div>
    </footer>
  );
}