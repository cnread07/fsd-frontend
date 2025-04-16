import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiBriefcase,
  FiClipboard,
  FiUsers,
  FiSettings,
  FiBook,
  FiAward,
  FiMessageSquare,
  FiPieChart,
  FiFileText,
  FiCheckSquare
} from 'react-icons/fi';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Define navigation items based on user role
  const getNavItems = () => {
    const baseItems = [
      {
        title: 'Overview',
        path: `/dashboard/${user?.role}`,
        icon: <FiHome className="w-5 h-5" />
      }
    ];

    const roleSpecificItems = {
      student: [
        {
          title: 'Available Internships',
          path: '/internships',
          icon: <FiBriefcase className="w-5 h-5" />
        },
        {
          title: 'My Applications',
          path: '/applications',
          icon: <FiClipboard className="w-5 h-5" />
        },
        {
          title: 'Learning Resources',
          path: '/resources',
          icon: <FiBook className="w-5 h-5" />
        },
        {
          title: 'Certificates',
          path: '/certificates',
          icon: <FiAward className="w-5 h-5" />
        },
        {
          title: 'Messages',
          path: '/messages',
          icon: <FiMessageSquare className="w-5 h-5" />
        }
      ],
      mentor: [
        {
          title: 'Internship Posts',
          path: '/posts',
          icon: <FiBriefcase className="w-5 h-5" />
        },
        {
          title: 'Applications',
          path: '/manage-applications',
          icon: <FiClipboard className="w-5 h-5" />
        },
        {
          title: 'Interns',
          path: '/interns',
          icon: <FiUsers className="w-5 h-5" />
        },
        {
          title: 'Tasks',
          path: '/tasks',
          icon: <FiCheckSquare className="w-5 h-5" />
        },
        {
          title: 'Reports',
          path: '/reports',
          icon: <FiPieChart className="w-5 h-5" />
        }
      ],
      admin: [
        {
          title: 'Users',
          path: '/users',
          icon: <FiUsers className="w-5 h-5" />
        },
        {
          title: 'Internships',
          path: '/manage-internships',
          icon: <FiBriefcase className="w-5 h-5" />
        },
        {
          title: 'Reports',
          path: '/admin-reports',
          icon: <FiFileText className="w-5 h-5" />
        },
        {
          title: 'Settings',
          path: '/settings',
          icon: <FiSettings className="w-5 h-5" />
        }
      ]
    };

    return [...baseItems, ...(roleSpecificItems[user?.role] || [])];
  };

  if (!user) return null;

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen fixed left-0 top-16">
      <nav className="mt-6">
        <div className="px-4 py-2">
          <h2 className="text-xs uppercase tracking-wider text-gray-400">
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Dashboard
          </h2>
        </div>
        
        <div className="mt-4">
          {getNavItems().map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm transition-colors duration-200 relative
                ${isActive(item.path)
                  ? 'text-white bg-blue-900'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </motion.div>
              {isActive(item.path) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar; 