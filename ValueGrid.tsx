import { Cpu, Zap, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

export function ValueGrid() {
  const values = [
    {
      icon: Cpu,
      title: 'Hardware Savings',
      description: 'Zero Client Cost. No need to buy CPUs, Motherboards, or HDDs for every user. Just add a monitor.',
      highlight: '₹40,000+ saved per seat'
    },
    {
      icon: Zap,
      title: 'Electricity Bachat',
      description: 'Slash Power Bills. Running 1 CPU consumes 75% less electricity than running 4 CPUs.',
      highlight: '75% less power consumption'
    },
    {
      icon: Gauge,
      title: 'Performance',
      description: 'Better Than Thin Clients. ASTER utilizes the main GPU, allowing HD video playback and graphic design without lag.',
      highlight: 'Full GPU acceleration'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[var(--color-neutral-900)] mb-4">Why ASTER?</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Transform your workspace with intelligent multi-seat technology that saves money and boosts productivity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-neutral-200 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-[var(--color-trust-blue)] rounded-lg flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                
                <h3 className="text-[var(--color-neutral-900)] mb-3">{value.title}</h3>
                
                <p className="text-neutral-600 mb-4">
                  {value.description}
                </p>
                
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-sm text-[var(--color-alert-orange)]">
                    {value.highlight}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}