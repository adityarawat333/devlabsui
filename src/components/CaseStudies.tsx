import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const caseStudies = [
    {
      company: 'Global Financial Services Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy system modernization and cloud migration',
      solution: 'Comprehensive cloud computing and DevOps training program',
      results: [
        { metric: 'Deployment Speed', improvement: '300% faster' },
        { metric: 'System Downtime', improvement: '85% reduction' },
        { metric: 'Team Productivity', improvement: '250% increase' }
      ],
      participants: 150,
      duration: '12 weeks',
      testimonial: 'TechForward transformed our entire development culture. Our teams now deploy with confidence and speed.',
      role: 'CTO',
      gradient: 'from-[#73c2fb] to-[#0f52ba]'
    },
    {
      company: 'Healthcare Innovation Labs',
      industry: 'Healthcare Technology',
      challenge: 'AI implementation for medical diagnosis systems',
      solution: 'Advanced AI & Machine Learning certification program',
      results: [
        { metric: 'Diagnostic Accuracy', improvement: '40% improvement' },
        { metric: 'Processing Time', improvement: '60% faster' },
        { metric: 'Cost Savings', improvement: '$2.3M annually' }
      ],
      participants: 85,
      duration: '10 weeks',
      testimonial: 'The AI training program exceeded our expectations. Our medical AI systems are now industry-leading.',
      role: 'Head of Innovation',
      gradient: 'from-[#0f52ba] to-[#007fff]'
    },
    {
      company: 'E-Commerce Giants Corp.',
      industry: 'Retail Technology',
      challenge: 'Cybersecurity vulnerabilities and compliance issues',
      solution: 'Enterprise cybersecurity and compliance training',
      results: [
        { metric: 'Security Incidents', improvement: '95% reduction' },
        { metric: 'Compliance Score', improvement: '100% achieved' },
        { metric: 'Response Time', improvement: '75% faster' }
      ],
      participants: 200,
      duration: '14 weeks',
      testimonial: 'Our security posture is now bulletproof. The training was comprehensive and immediately applicable.',
      role: 'CISO',
      gradient: 'from-[#007fff] to-[#73c2fb]'
    }
  ];

  return (
    <section className="py-20 bg-white" id="case-studies">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Transforming Businesses
            <br />
            Through Training
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our impactful training success stories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Case Study: Tech Innovations',
              description: 'Discover how we helped Tech Innovations achieve their training goals and transform their workforce capabilities.',
              image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
              link: 'Read more'
            },
            {
              title: 'Case Study: Retail Success',
              description: 'Learn how Retail Success transformed their team through our comprehensive training programs.',
              image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
              link: 'Read more'
            },
            {
              title: 'Case Study: Financial Growth',
              description: 'See how Financial Growth leveraged our training to drive innovation and business success.',
              image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
              link: 'Read more'
            }
          ].map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{study.description}</p>
                <button className="text-blue-600 font-medium hover:underline">
                  {study.link} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;