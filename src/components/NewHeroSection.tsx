import { ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function NewHeroSection() {
  const scrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Alert Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-orange-500 bg-opacity-20 border border-orange-400 px-4 py-2 rounded-full mb-6"
          >
            <AlertCircle size={18} className="text-orange-400" />
            <span className="text-sm">Trusted by 500+ Indian Schools & Businesses</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5"
          >
            Why Waste ₹35,000 Per Computer When{' '}
            <span className="text-orange-400">One CPU Can Power 12 Users?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto"
          >
            Stop overpaying for hardware, electricity, and maintenance. ASTER's revolutionary multi-seat technology transforms a single computer into multiple independent workstations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <motion.button
              onClick={scrollToForm}
              className="px-10 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all shadow-2xl flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">Get Your Free Demo</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            <motion.button
              onClick={() => {
                const element = document.getElementById('calculator');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 bg-white bg-opacity-10 backdrop-blur-sm text-black border-2 border-white border-opacity-30 rounded-xl hover:bg-opacity-20 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">Calculate Your Savings</span>
            </motion.button>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { value: '60%', label: 'Hardware Cost Saved' },
              { value: '75%', label: 'Less Electricity' },
              { value: '2-12', label: 'Users Per CPU' },
              { value: '₹64K+', label: 'Average Savings' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1, type: 'spring' }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20"
              >
                <div className="text-2xl md:text-3xl text-orange-400 mb-1">{stat.value}</div>
                <p className="text-sm text-blue-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}