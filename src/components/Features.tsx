import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Shield, Users, Trophy, Clock, Globe } from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: Users,
      title: 'Transform Your Team\'s Skills with Tailored Learning Experiences',
      description: 'Our expert-led courses empower development and growth, ensuring your team stays ahead in the competitive landscape.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Flexible Learning Solutions to Fit Your Team\'s Schedule and Needs',
      description: 'Choose from various formats - online, on-site, or hybrid - designed to accommodate your business requirements.',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: Trophy,
      title: 'Proven Track Record of Success with Leading Companies in the Industry',
      description: 'Join the ranks of satisfied clients who have transformed their teams through our comprehensive training programs.',
      gradient: 'from-blue-700 to-blue-800'
    }
  ];

  return (
    <section className="py-20 bg-blue-50" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Unlock Your Potential with
            <span className="block text-gray-800">
              Devlabs' Comprehensive IT Training Solutions
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;