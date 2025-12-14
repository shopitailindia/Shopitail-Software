import { GraduationCap, Building2, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

export function UseCases() {
  const cases = [
    {
      icon: GraduationCap,
      title: 'Schools & Labs',
      description: 'Double your computer lab capacity within the same budget.',
      benefits: ['Reduce hardware costs by 60%', 'Easy maintenance', 'Safe for students'],
      image: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NTY1MDA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'blue'
    },
    {
      icon: Building2,
      title: 'Offices & BPOs',
      description: 'Scale your workforce without cluttering desks with CPU cabinets.',
      benefits: ['Clean workspace', 'Lower electricity bills', 'Quick deployment'],
      image: 'https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTYxOTMxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'orange'
    },
    {
      icon: Wifi,
      title: 'Cyber Cafes/CSCs',
      description: 'Add more browsing terminals in limited shop space.',
      benefits: ['Maximize floor space', 'Lower investment', 'Higher profits'],
      image: 'https://images.unsplash.com/photo-1758410473607-e78a23fd6e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMGNhZmUlMjBpbnRlcm5ldHxlbnwxfHx8fDE3NjU2NTAwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'green'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[var(--color-neutral-900)] mb-4">Perfect For Every Business</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            ASTER is trusted across industries to deliver cost-effective computing solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`${!isEven ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        useCase.color === 'blue' ? 'bg-blue-100' :
                        useCase.color === 'orange' ? 'bg-orange-100' : 'bg-green-100'
                      }`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className={`${
                        useCase.color === 'blue' ? 'text-[var(--color-trust-blue)]' :
                        useCase.color === 'orange' ? 'text-[var(--color-alert-orange)]' : 'text-green-600'
                      }`} size={24} />
                    </motion.div>
                    <h3 className="text-[var(--color-neutral-900)]">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-neutral-700 mb-6">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-3">
                    {useCase.benefits.map((benefit, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          useCase.color === 'blue' ? 'bg-[var(--color-trust-blue)]' :
                          useCase.color === 'orange' ? 'bg-[var(--color-alert-orange)]' : 'bg-green-600'
                        }`}></div>
                        <span className="text-neutral-600">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.div 
                  className={`${!isEven ? 'md:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}