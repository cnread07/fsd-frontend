import { motion } from 'framer-motion';
import { theme } from '../theme';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Mission Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-[#48bb78]">Internify</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Internify is a comprehensive platform designed to bridge the gap between academic
            learning and professional experience. We connect students with meaningful
            internship opportunities while providing tools for tracking progress and
            achieving career goals.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Internify?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Comprehensive Tracking',
              description:
                'Monitor your internship progress, track milestones, and receive regular feedback from mentors.',
              icon: '📊',
            },
            {
              title: 'SDG Alignment',
              description:
                'Connect your internship experience with Sustainable Development Goals and make a real impact.',
              icon: '🌍',
            },
            {
              title: 'Mentor Support',
              description:
                'Get guidance from experienced mentors who help you navigate your professional journey.',
              icon: '👥',
            },
            {
              title: 'Career Development',
              description:
                'Build essential skills and gain practical experience that enhances your employability.',
              icon: '🚀',
            },
            {
              title: 'Progress Analytics',
              description:
                'Access detailed analytics about your performance and areas for improvement.',
              icon: '📈',
            },
            {
              title: 'Networking Opportunities',
              description:
                'Connect with industry professionals and build your professional network.',
              icon: '🤝',
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a365d] p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PO/PEO Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Program Outcomes & Educational Objectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#1a365d] p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#48bb78]">
              Program Outcomes (PO)
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Engineering knowledge application</li>
              <li>• Problem analysis and solution design</li>
              <li>• Modern tool usage and experimentation</li>
              <li>• Teamwork and communication skills</li>
              <li>• Project management and finance</li>
              <li>• Lifelong learning and adaptability</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#1a365d] p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#48bb78]">
              Program Educational Objectives (PEO)
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Professional competence in chosen field</li>
              <li>• Leadership and teamwork abilities</li>
              <li>• Ethical and social responsibility</li>
              <li>• Continuous professional development</li>
              <li>• Innovation and entrepreneurship</li>
              <li>• Global perspective and adaptability</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Computer Science Student',
              quote:
                'Internify helped me secure an internship that perfectly aligned with my career goals. The progress tracking features were incredibly helpful!',
            },
            {
              name: 'Michael Chen',
              role: 'Electrical Engineering Student',
              quote:
                'The mentor support system is outstanding. My mentor provided valuable guidance throughout my internship journey.',
            },
            {
              name: 'Emily Rodriguez',
              role: 'Business Administration Student',
              quote:
                'The SDG mapping feature helped me understand how my work contributes to global sustainability goals.',
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a365d] p-6 rounded-lg"
            >
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-[#48bb78]">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About; 