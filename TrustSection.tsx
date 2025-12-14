import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function TrustSection() {
  const stats = [
    { icon: Users, value: '500+', label: 'Institutes in India' },
    { icon: TrendingUp, value: '10,000+', label: 'Active Workplaces' },
    { icon: Award, value: '4.8/5', label: 'Customer Rating' },
    { icon: Shield, value: '5 Years', label: 'In Business' }
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--color-trust-blue)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-4">Trusted Across India</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Join hundreds of schools, offices, and businesses that have transformed their computing infrastructure
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                <motion.div 
                  className="text-3xl text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Partner Logos */}
        <motion.div 
          className="border-t border-blue-700 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-center text-blue-100 mb-8">Trusted by leading institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
            {['Delhi Public School', 'Kendriya Vidyalaya', 'TechCorp Solutions', 'CSC Centers'].map((partner, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-20 px-8 py-4 rounded-lg text-white text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <p>{partner}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}