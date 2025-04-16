import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const DashboardLayout = ({ children, role, menuItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#0f172a]">
      {/* Sidebar */}
      <motion.div
        initial={{ width: isSidebarOpen ? '280px' : '0px' }}
        animate={{ width: isSidebarOpen ? '280px' : '0px' }}
        transition={{ duration: 0.3 }}
        className={`bg-[#1a365d] ${isSidebarOpen ? 'block' : 'hidden'} md:block`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#48bb78]">
              {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
            </h2>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#2f855a] text-white'
                    : 'text-gray-300 hover:bg-[#2f855a] hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout; 