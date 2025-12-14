import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const scrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-[var(--color-neutral-900)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stop Buying Extra CPUs. Turn 1 Computer into 4 Workplaces.
            </motion.h1>
            
            <motion.p 
              className="text-neutral-700 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The #1 Multiseat Software Solution for Indian Schools & Offices. 
              Save <span className="text-[var(--color-alert-orange)]">60% on Hardware</span> and 
              <span className="text-[var(--color-alert-orange)]"> Electricity bills</span> instantly.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button 
                onClick={scrollToForm}
                className="px-8 py-4 bg-[var(--color-alert-orange)] text-white rounded-lg hover:bg-[var(--color-alert-orange-dark)] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Demo
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-white text-[var(--color-trust-blue)] border-2 border-[var(--color-trust-blue)] rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} fill="currentColor" />
                Watch How it Works
              </motion.button>
            </motion.div>

            <motion.div 
              className="pt-6 flex items-center gap-8 text-sm text-neutral-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                No Hardware Required
              </div>
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                ></motion.div>
                Windows 10/11 Compatible
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-8 border border-neutral-200"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1583617806081-08f70a737950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNlcnZlciUyMHRvd2VyfGVufDF8fHx8MTc2NTY1MDA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="One CPU connected to multiple monitors"
                className="w-full h-auto rounded-lg"
              />
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <motion.div 
                  className="text-center p-4 bg-blue-50 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-[var(--color-trust-blue)]">1 CPU</div>
                  <div className="text-sm text-neutral-600">Powers</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-orange-50 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="text-[var(--color-alert-orange)]">4-12 Users</div>
                  <div className="text-sm text-neutral-600">Simultaneously</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-[var(--color-alert-orange)] text-white px-6 py-3 rounded-full shadow-lg"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.8, bounce: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <p className="text-sm">Save ₹60,000+</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}