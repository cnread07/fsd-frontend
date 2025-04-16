import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const partners = [
    { name: 'Athena', logo: '/partners/athena.svg' },
    { name: 'BaronFig', logo: '/partners/baronfig.svg' },
    { name: 'TrustFund', logo: '/partners/trustfund.svg' },
    { name: 'Native', logo: '/partners/native.svg' },
    { name: 'SmartMoney', logo: '/partners/smartmoney.svg' }
  ];

  const features = [
    {
      title: 'Active users right now',
      value: '120.9k',
      chart: '/images/active-users-chart.svg'
    },
    {
      title: 'Everything is based on data, not assumptions',
      description: 'Built to deliver in-depth decision making, empowering users with key decisions',
      chart: '/images/data-chart.svg'
    },
    {
      title: 'The data is continuously updated, processed by AI',
      description: 'Fresh data from real-time analysis and evaluations transforms insights on demand for AI',
      chart: '/images/ai-chart.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Transform Your Career With Our Leading Internship Platform
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of successful interns and companies on our innovative platform. Experience seamless progress tracking, mentorship, and career growth opportunities all in one place.
            </p>
            <div className="flex gap-4">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </Link>
              <Link
                to="/about"
                className="border border-indigo-400 hover:border-purple-400 px-8 py-3 rounded-lg font-semibold transition-colors text-indigo-400 hover:text-purple-400"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-20 blur-xl"></div>
              <img
                src="/images/dashboard-preview.png"
                alt="Dashboard Preview"
                className="relative rounded-lg shadow-2xl border border-indigo-500/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <p className="text-center text-gray-400 mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12">
            {partners.map((partner) => (
              <motion.img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
        >
          Innovative Features,<br />Designed for Your Success
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-gray-400 mb-6">{feature.description}</p>
              )}
              <img src={feature.chart} alt="Chart" className="w-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Success Stories from<br />Industry Leaders
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 mb-12">
            <p className="text-xl mb-6">
              "Internify has revolutionized how we manage our internship program. The platform's innovative features and intuitive design have significantly improved our ability to track progress and ensure success for both interns and mentors."
            </p>
            <div className="flex items-center justify-center gap-4">
              <img src="/images/testimonial-avatar.jpg" alt="Testimonial" className="w-12 h-12 rounded-full ring-2 ring-indigo-500/50" />
              <div className="text-left">
                <p className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Sarah Johnson</p>
                <p className="text-gray-400">HR Director at TechCorp</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-800/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Begin Your Success Story
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of successful professionals who have accelerated their careers with Internify
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border border-indigo-400 hover:border-purple-400 px-8 py-3 rounded-lg font-semibold transition-colors text-indigo-400 hover:text-purple-400"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;