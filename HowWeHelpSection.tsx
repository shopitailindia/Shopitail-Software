import { motion } from 'motion/react';
import { Shield, Users, Headphones, Rocket, Award, Clock } from 'lucide-react';

export function HowWeHelpSection() {
  const helpPoints = [
    {
      icon: Shield,
      title: 'Proven & Trusted Technology',
      description: 'ASTER has been powering businesses for 5+ years with 99.9% uptime reliability.',
      benefit: '500+ happy customers across India'
    },
    {
      icon: Users,
      title: 'Perfect for Every Industry',
      description: 'Schools, offices, cyber cafes, training centers, call centers—we serve them all.',
      benefit: 'Industry-specific setup guidance'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support Team',
      description: 'Our Indian support team speaks your language and understands your challenges.',
      benefit: 'Free installation assistance'
    },
    {
      icon: Rocket,
      title: 'Quick Setup & Deployment',
      description: 'Get up and running in under 2 hours. No technical expertise required.',
      benefit: 'Step-by-step video tutorials'
    },
    {
      icon: Award,
      title: 'Money-Back Guarantee',
      description: 'Not satisfied? Get a full refund within 30 days—no questions asked.',
      benefit: 'Zero risk, all reward'
    },
    {
      icon: Clock,
      title: 'Free Updates Forever',
      description: 'Buy once, get lifetime updates and new features at no extra cost.',
      benefit: 'Always stay current'
    }
  ];

  const successStories = [
    {
      image: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NTY1MDA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      industry: 'School',
      name: 'St. Mary\'s High School, Chennai',
      challenge: 'Needed 30 computers but only had budget for 10',
      result: 'Deployed 30 workstations using just 3 powerful PCs. Saved ₹12 lakhs.',
      metric: '₹12L Saved'
    },
    {
      image: 'https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTYxOTMxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      industry: 'Office',
      name: 'TechVision BPO, Bangalore',
      challenge: 'High electricity costs eating into profits',
      result: 'Reduced power consumption by 70%. Monthly savings of ₹15,000.',
      metric: '70% Less Power'
    },
    {
      image: 'https://images.unsplash.com/photo-1758410473607-e78a23fd6e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMGNhZmUlMjBpbnRlcm5ldHxlbnwxfHx8fDE3NjU2NTAwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      industry: 'Cyber Cafe',
      name: 'Net Zone Cafe, Pune',
      challenge: 'Limited space but wanted to double capacity',
      result: 'Went from 10 to 20 terminals in same space. Revenue up 85%.',
      metric: '85% More Revenue'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            How We Support Your Success
          </span>
          <h2 className="text-neutral-900 mb-4">
            More Than Software. We're Your Growth Partner.
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We don't just sell you software and disappear. We ensure your success at every step.
          </p>
        </motion.div>

        {/* Help Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {helpPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200 hover:border-orange-300 transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center mb-4"
                >
                  <Icon className="text-white" size={24} />
                </motion.div>

                <h4 className="text-neutral-900 mb-2">{point.title}</h4>
                <p className="text-neutral-700 mb-3 leading-relaxed">{point.description}</p>
                
                <motion.div 
                  className="pt-3 border-t border-neutral-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-sm text-orange-600">✓ {point.benefit}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-center text-neutral-900 mb-3">Real Success Stories</h3>
          <p className="text-center text-neutral-700 mb-10 max-w-2xl mx-auto">
            See how businesses like yours transformed their operations with ASTER
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden group">
                <motion.img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div 
                  className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1.5 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <p className="text-sm font-semibold">{story.metric}</p>
                </motion.div>
              </div>

              <div className="p-5">
                <motion.span 
                  className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs mb-3"
                  whileHover={{ scale: 1.1 }}
                >
                  {story.industry}
                </motion.span>
                <h4 className="text-neutral-900 mb-3">{story.name}</h4>
                
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-xs text-neutral-500 mb-1">Challenge:</p>
                    <p className="text-sm text-neutral-800 leading-relaxed">{story.challenge}</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <p className="text-xs text-neutral-500 mb-1">Result:</p>
                    <p className="text-sm text-green-700 font-medium leading-relaxed">{story.result}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl p-10 text-center text-white"
        >
          <h3 className="text-white mb-3">Your Success Is Our Mission</h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Join 500+ satisfied customers who've transformed their operations. 
            Let us show you exactly how ASTER can work for your specific needs.
          </p>
          
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-2xl text-lg"
          >
            Schedule Your Free Demo Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}