import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Career with{' '}
            <span className="text-[#48bb78]">Internify</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with top companies, track your progress, and achieve your career goals
            through our comprehensive internship platform.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-[#2f855a] hover:bg-[#48bb78] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '500+', label: 'Active Internships' },
            { number: '95%', label: 'Placement Rate' },
            { number: '50+', label: 'Partner Companies' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a365d] p-6 rounded-lg text-center"
            >
              <h3 className="text-4xl font-bold text-[#48bb78] mb-2">{stat.number}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SDG Mapping Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mapping Internships to Sustainable Development Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Quality Education',
              description: 'Enhancing learning opportunities through practical experience',
              icon: '🎓',
            },
            {
              title: 'Industry Innovation',
              description: 'Fostering innovation and infrastructure development',
              icon: '💡',
            },
            {
              title: 'Sustainable Cities',
              description: 'Contributing to sustainable urban development',
              icon: '🏙️',
            },
          ].map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a365d] p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">{goal.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
              <p className="text-gray-300">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How Internify Helps You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Personalized Dashboard',
              description: 'Track your progress, deadlines, and achievements in one place',
              icon: '📊',
            },
            {
              title: 'Mentor Support',
              description: 'Get guidance from experienced mentors throughout your internship',
              icon: '👥',
            },
            {
              title: 'Progress Tracking',
              description: 'Monitor your development and receive regular feedback',
              icon: '📈',
            },
            {
              title: 'Career Growth',
              description: 'Build your professional network and enhance your skills',
              icon: '🚀',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a365d] p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;