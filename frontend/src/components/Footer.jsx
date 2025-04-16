import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-1">
              <img src="/logo.svg" alt="Internify Logo" className="h-5 w-5" />
              <span className="text-base font-bold text-[#48bb78]">Internify</span>
            </Link>
            <p className="text-gray-300 text-xs mb-1">
              Connecting students with meaningful internship opportunities and tracking their progress.
            </p>
            <div className="flex space-x-2">
              {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-[#48bb78] transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-1">Quick Links</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Login', path: '/login' },
                { label: 'Sign Up', path: '/signup' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#48bb78] transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-1">Contact Us</h3>
            <ul className="space-y-0.5">
              <li className="flex items-center space-x-1">
                <svg className="h-3 w-3 text-[#48bb78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 text-xs">contact@internify.com</span>
              </li>
              <li className="flex items-center space-x-1">
                <svg className="h-3 w-3 text-[#48bb78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 text-xs">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-1">
                <svg className="h-3 w-3 text-[#48bb78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-xs">123 University Ave, City, Country</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-1">Newsletter</h3>
            <p className="text-gray-300 text-xs mb-1">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-2 py-0.5 rounded-l-lg bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48bb78] text-xs"
              />
              <button
                type="submit"
                className="bg-[#2f855a] hover:bg-[#48bb78] px-2 py-0.5 rounded-r-lg transition-colors text-xs"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-2 pt-2 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Internify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 