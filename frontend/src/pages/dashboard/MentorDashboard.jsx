import { useState } from 'react';
import { motion } from 'framer-motion';

const MentorDashboard = () => {
  const [activeTab, setActiveTab] = useState('students');

  // Mock data for demonstration
  const mentoredStudents = [
    {
      id: 1,
      name: 'John Doe',
      department: 'Computer Science',
      internship: 'Frontend Developer Intern',
      company: 'Tech Solutions Inc.',
      progress: 65,
      lastMeeting: '2024-01-20',
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'Computer Science',
      internship: 'Data Science Intern',
      company: 'Data Analytics Corp',
      progress: 40,
      lastMeeting: '2024-01-18',
    },
  ];

  const upcomingMeetings = [
    {
      id: 1,
      student: 'John Doe',
      date: '2024-01-27',
      time: '14:00',
      agenda: 'Progress Review',
    },
    {
      id: 2,
      student: 'Jane Smith',
      date: '2024-01-28',
      time: '15:30',
      agenda: 'Project Discussion',
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
            Mentor Dashboard
          </h1>
          <p className="text-gray-400">
            Guide and monitor your mentees
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
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
            Mentored Students
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('meetings')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'meetings'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-800 text-white'
            }`}
          >
            Upcoming Meetings
          </motion.button>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          {activeTab === 'students' ? (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Mentored Students
              </h2>
              {mentoredStudents.map((student) => (
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
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Progress</p>
                      <div className="w-32 h-2 bg-gray-700 rounded-full mt-2">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Internship</p>
                      <p className="text-white">{student.internship}</p>
                      <p className="text-gray-400">{student.company}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Last Meeting</p>
                      <p className="text-white">{student.lastMeeting}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Upcoming Meetings
              </h2>
              {upcomingMeetings.map((meeting) => (
                <motion.div
                  key={meeting.id}
                  whileHover={{ scale: 1.02 }}
                  className="mb-6 p-6 rounded-lg bg-gray-900 border border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {meeting.student}
                      </h3>
                      <p className="text-gray-400">
                        {meeting.agenda}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white">
                        {meeting.date} at {meeting.time}
                      </p>
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

export default MentorDashboard;