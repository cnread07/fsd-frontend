import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { FiHome, FiGrid, FiUser } from 'react-icons/fi';

const Header = () => {
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold text-blue-500"
              >
                InternshipPortal
              </motion.div>
            </Link>

            <nav className="hidden md:flex space-x-4">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive('/') 
                    ? 'bg-blue-900 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                <FiHome className="h-4 w-4" />
                <span>Home</span>
              </Link>

              {user && (
                <Link
                  to={`/dashboard/${user.role}`}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive(`/dashboard/${user.role}`) 
                      ? 'bg-blue-900 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  <FiGrid className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              )}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-300">{user.name}</span>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center"
                >
                  <FiUser className="h-5 w-5 text-gray-300" />
                </motion.div>
              </div>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-900 text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 