import { useState } from 'react';
import { motion } from 'framer-motion';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  // Mock data for demonstration
  const ongoingInternships = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Frontend Developer Intern',
      startDate: '2024-01-15',
      endDate: '2024-06-15',
      status: 'In Progress',
      mentor: 'Dr. John Smith',
      sdgs: ['Quality Education', 'Decent Work'],
      progress: 65
    },
  ];

  const appliedInternships = [
    {
      id: 2,
      company: 'Innovate Corp',
      position: 'Software Engineer Intern',
      appliedDate: '2024-01-10',
      status: 'Under Review',
      sdgs: ['Industry Innovation', 'Sustainable Cities']
    },
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
            Student Dashboard
          </h1>
          <p className="text-gray-400">
            Track your internships and progress
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('ongoing')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'ongoing'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-800 text-white'
            }`}
          >
            Ongoing Internships
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('applied')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'applied'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-800 text-white'
            }`}
          >
            Applied Internships
          </motion.button>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          {activeTab === 'ongoing' ? (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Ongoing Internships
              </h2>
              {ongoingInternships.map((internship) => (
                <motion.div
                  key={internship.id}
                  whileHover={{ scale: 1.02 }}
                  className="mb-6 p-6 rounded-lg bg-gray-900 border border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {internship.position}
                      </h3>
                      <p className="text-gray-400">
                        {internship.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500 text-white text-sm">
                      {internship.status}
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Start Date</p>
                      <p className="text-white">{internship.startDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">End Date</p>
                      <p className="text-white">{internship.endDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Mentor</p>
                      <p className="text-white">{internship.mentor}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Progress</p>
                      <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{ width: `${internship.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">SDGs</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {internship.sdgs.map((sdg, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded-full bg-blue-900 text-white text-xs"
                        >
                          {sdg}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Applied Internships
              </h2>
              {appliedInternships.map((internship) => (
                <motion.div
                  key={internship.id}
                  whileHover={{ scale: 1.02 }}
                  className="mb-6 p-6 rounded-lg bg-gray-900 border border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {internship.position}
                      </h3>
                      <p className="text-gray-400">
                        {internship.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-yellow-500 text-white text-sm">
                      {internship.status}
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Applied Date</p>
                    <p className="text-white">{internship.appliedDate}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">SDGs</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {internship.sdgs.map((sdg, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded-full bg-blue-900 text-white text-xs"
                        >
                          {sdg}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDashboard;