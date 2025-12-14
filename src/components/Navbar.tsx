import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-[var(--color-trust-blue)] cursor-pointer">ASTER India</h3>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button 
              onClick={() => scrollToSection('features')}
              className="text-neutral-700 hover:text-[var(--color-trust-blue)] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Features
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-neutral-700 hover:text-[var(--color-trust-blue)] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              How it Works
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('pricing')}
              className="text-neutral-700 hover:text-[var(--color-trust-blue)] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Pricing
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('calculator')}
              className="text-neutral-700 hover:text-[var(--color-trust-blue)] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Calculator
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="text-neutral-700 hover:text-[var(--color-trust-blue)] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-trust-blue)] text-white rounded-lg hover:bg-[var(--color-trust-blue-dark)] transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download Free Trial
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 space-y-3 overflow-hidden"
            >
              <motion.button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded"
                whileTap={{ scale: 0.98 }}
              >
                Features
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded"
                whileTap={{ scale: 0.98 }}
              >
                How it Works
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded"
                whileTap={{ scale: 0.98 }}
              >
                Pricing
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('calculator')}
                className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded"
                whileTap={{ scale: 0.98 }}
              >
                Calculator
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded"
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-[var(--color-trust-blue)] text-white rounded-lg"
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Download Free Trial
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}