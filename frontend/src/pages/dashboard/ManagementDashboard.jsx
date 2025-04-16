import { useState } from 'react';
import { motion } from 'framer-motion';

const ManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for demonstration
  const departmentStats = [
    {
      name: 'Computer Science',
      totalInternships: 45,
      activeStudents: 30,
      completionRate: 85,
    },
    {
      name: 'Electrical Engineering',
      totalInternships: 35,
      activeStudents: 25,
      completionRate: 80,
    },
    {
      name: 'Mechanical Engineering',
      totalInternships: 30,
      activeStudents: 20,
      completionRate: 75,
    },
  ];

  const sdgContributions = [
    { name: 'SDG 4: Quality Education', count: 25 },
    { name: 'SDG 8: Decent Work', count: 20 },
    { name: 'SDG 9: Industry Innovation', count: 15 },
    { name: 'SDG 17: Partnerships', count: 10 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white">
            Management Dashboard
          </h1>
          <p className="text-gray-400">
            Institutional overview and analytics
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'overview'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-800 text-white'
            }`}
          >
            Department Overview
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('sdgs')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'sdgs'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-800 text-white'
            }`}
          >
            SDG Contributions
          </motion.button>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          {activeTab === 'overview' ? (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Department Statistics
              </h2>
              {departmentStats.map((dept) => (
                <motion.div
                  key={dept.name}
                  whileHover={{ scale: 1.02 }}
                  className="mb-6 p-6 rounded-lg bg-gray-900 border border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {dept.name}
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Total Internships</p>
                      <p className="text-2xl font-bold text-blue-500">
                        {dept.totalInternships}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Active Students</p>
                      <p className="text-2xl font-bold text-green-500">
                        {dept.activeStudents}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Completion Rate</p>
                      <div className="flex items-center">
                        <div className="w-32 h-2 bg-gray-700 rounded-full mr-2">
                          <div
                            className="h-full rounded-full bg-green-500"
                            style={{ width: `${dept.completionRate}%` }}
                          />
                        </div>
                        <span className="text-white">
                          {dept.completionRate}%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                SDG Contributions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sdgContributions.map((sdg) => (
                  <motion.div
                    key={sdg.name}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-lg bg-gray-900 border border-gray-700"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-white">
                        {sdg.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-blue-900 text-white">
                        {sdg.count} Internships
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="w-full h-2 bg-gray-700 rounded-full">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{
                            width: `${(sdg.count / 25) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ManagementDashboard;