import { AlertTriangle, TrendingUp, Wrench, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Skyrocketing Hardware Costs',
      problem: 'Buying separate CPUs, motherboards, RAM, and hard drives for each workstation drains your budget.',
      realExample: '"We needed 20 computers for our school lab. The quote came to ₹7 lakhs. We simply couldn\'t afford it."',
      author: '- Rajesh K., School Principal, Mumbai',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Crushing Electricity Bills',
      problem: 'Running 10 computers means 3000W power consumption. Your monthly electricity bill keeps climbing.',
      realExample: '"Our cyber cafe\'s electricity bill was ₹18,000/month. We were barely breaking even."',
      author: '- Priya S., Cyber Cafe Owner, Bangalore',
      color: 'yellow'
    },
    {
      icon: Wrench,
      title: 'Maintenance Nightmare',
      problem: 'More computers = more breakdowns, more repairs, more headaches. One technician can\'t handle it all.',
      realExample: '"3 out of 8 PCs were always under repair. Students complained, we lost productivity."',
      author: '- Amit D., Training Institute, Delhi',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Limited Growth Capacity',
      problem: 'Want to expand? You need more space, more capital, more infrastructure. Scaling is expensive and slow.',
      realExample: '"We wanted to hire 5 more employees but couldn\'t afford 5 new computer setups."',
      author: '- Sneha M., Call Center Manager, Pune',
      color: 'blue'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            The Reality You Face Daily
          </motion.span>
          <h2 className="text-neutral-900 mb-4">
            Are These Problems Keeping You Up at Night?
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            You're not alone. Thousands of schools, offices, and training centers across India face the same challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const colorClasses = {
              red: 'bg-red-100 text-red-600',
              yellow: 'bg-yellow-100 text-yellow-600',
              purple: 'bg-purple-100 text-purple-600',
              blue: 'bg-blue-100 text-blue-600'
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-neutral-200 cursor-pointer"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colorClasses[problem.color as keyof typeof colorClasses]}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={28} />
                </motion.div>

                <h3 className="text-neutral-900 mb-3">{problem.title}</h3>
                
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  {problem.problem}
                </p>

                <motion.div 
                  className="bg-neutral-50 border-l-4 border-orange-500 p-4 rounded-r-lg"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-neutral-800 italic mb-2 leading-relaxed">
                    {problem.realExample}
                  </p>
                  <p className="text-sm text-neutral-600">{problem.author}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white shadow-2xl cursor-pointer"
        >
          <h3 className="text-white mb-3">
            The True Cost? More Than Just Money.
          </h3>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Lost opportunities. Frustrated students. Stressed employees. Delayed growth. 
            Every day you continue with traditional setups, you're paying a hidden price.
          </p>
        </motion.div>
      </div>
    </section>
  );
}