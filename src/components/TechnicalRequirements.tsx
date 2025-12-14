import { Monitor, HardDrive, Keyboard, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function TechnicalRequirements() {
  const requirements = [
    {
      icon: Shield,
      title: 'Windows 10/11',
      description: 'Compatible with latest Windows OS'
    },
    {
      icon: HardDrive,
      title: 'SSD Storage',
      description: 'Recommended for optimal performance'
    },
    {
      icon: Monitor,
      title: 'Additional Monitors',
      description: 'One per workplace (2-12 supported)'
    },
    {
      icon: Keyboard,
      title: 'Keyboard/Mouse',
      description: 'USB peripherals for each user'
    }
  ];

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[var(--color-neutral-900)] mb-4">What You Need</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Simple requirements to get started with ASTER multi-seat solution
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
                >
                  <Icon className="text-[var(--color-trust-blue)]" size={28} />
                </motion.div>
                <h4 className="text-[var(--color-neutral-900)] mb-2">{req.title}</h4>
                <p className="text-sm text-neutral-600">{req.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Savings Calculator */}
        <motion.div 
          className="bg-white rounded-xl shadow-xl p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-[var(--color-neutral-900)] mb-6 text-center">Quick Savings Calculator</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Number of Workplaces</label>
                <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)]">
                  <option value="2">2 Workplaces</option>
                  <option value="4">4 Workplaces</option>
                  <option value="6">6 Workplaces</option>
                  <option value="8">8 Workplaces</option>
                  <option value="10">10 Workplaces</option>
                  <option value="12">12 Workplaces</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Traditional PC Cost (Each)</label>
                <input 
                  type="text" 
                  defaultValue="₹35,000"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)]"
                  readOnly
                />
              </div>
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-orange-50 to-blue-50 p-6 rounded-lg space-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div>
                <p className="text-sm text-neutral-600">Traditional Setup Cost</p>
                <motion.p 
                  className="text-2xl text-neutral-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  ₹70,000
                </motion.p>
              </div>
              <div>
                <p className="text-sm text-neutral-600">ASTER Setup Cost</p>
                <motion.p 
                  className="text-2xl text-[var(--color-trust-blue)]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  ₹6,000
                </motion.p>
              </div>
              <div className="pt-4 border-t border-neutral-300">
                <p className="text-sm text-neutral-600">Your Savings</p>
                <motion.p 
                  className="text-3xl text-[var(--color-alert-orange)]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.5 }}
                >
                  ₹64,000
                </motion.p>
                <p className="text-sm text-green-600 mt-1">91% cost reduction!</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}