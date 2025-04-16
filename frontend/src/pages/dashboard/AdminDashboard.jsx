import { useState } from 'react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('internships');

  // Mock data for demonstration
  const internships = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Inc.',
      department: 'Computer Science',
      status: 'Active',
      applications: 15,
      sdgs: ['SDG 4', 'SDG 8'],
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'Data Analytics Corp',
      department: 'Computer Science',
      status: 'Pending',
      applications: 8,
      sdgs: ['SDG 9', 'SDG 17'],
    },
  ];

  const students = [
    {
      id: 1,
      name: 'John Doe',
      department: 'Computer Science',
      internship: 'Frontend Developer Intern',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'Computer Science',
      internship: 'Data Science Intern',
      status: 'Applied',
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
            Admin Dashboard
          </h1>
          <p className="text-gray-400">
            Manage internships and track progress
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('internships')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'internships'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-800 text-white'
            }`}
          >
            Internships
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('students')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'students'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-800 text-white'
            }`}
          >
            Students
          </motion.button>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          {activeTab === 'internships' ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-white">
                  Internship Listings
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-green-600 text-white"
                >
                  Add New Internship
                </motion.button>
              </div>
              {internships.map((internship) => (
                <motion.div
                  key={internship.id}
                  whileHover={{ scale: 1.02 }}
                  className="mb-6 p-6 rounded-lg bg-gray-900 border border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {internship.title}
                      </h3>
                      <p className="text-gray-400">
                        {internship.company} - {internship.department}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        internship.status === 'Active'
                          ? 'bg-green-500'
                          : 'bg-yellow-500'
                      } text-white`}
                    >
                      {internship.status}
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Applications</p>
                      <p className="text-white">{internship.applications}</p>
                    </div>
                    <div>
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
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Student List
              </h2>
              {students.map((student) => (
                <motion.div
                  key={student.id}
                  whileHover={{ scale: 1.02 }}
                  className="mb-6 p-6 rounded-lg bg-gray-900 border border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {student.name}
                      </h3>
                      <p className="text-gray-400">
                        {student.department}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        student.status === 'Active'
                          ? 'bg-green-500'
                          : 'bg-yellow-500'
                      } text-white`}
                    >
                      {student.status}
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Current Internship</p>
                    <p className="text-white">{student.internship}</p>
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

export default AdminDashboard;