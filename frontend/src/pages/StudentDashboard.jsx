import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StudentDashboard = () => {
  const menuItems = [
    { path: '/student/dashboard', label: 'Overview', icon: '📊' },
    { path: '/student/internships', label: 'My Internships', icon: '💼' },
    { path: '/student/progress', label: 'Progress Tracking', icon: '📈' },
    { path: '/student/mentors', label: 'Mentors', icon: '👥' },
    { path: '/student/sdg', label: 'SDG Mapping', icon: '🌍' },
    { path: '/student/settings', label: 'Settings', icon: '⚙️' },
  ];

  const progressData = [
    { name: 'Week 1', progress: 20 },
    { name: 'Week 2', progress: 45 },
    { name: 'Week 3', progress: 65 },
    { name: 'Week 4', progress: 85 },
    { name: 'Week 5', progress: 95 },
  ];

  const sdgData = [
    { name: 'Quality Education', value: 85 },
    { name: 'Industry Innovation', value: 75 },
    { name: 'Sustainable Cities', value: 65 },
  ];

  return (
    <DashboardLayout role="student" menuItems={menuItems}>
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-2">Welcome back, Student!</h1>
          <p className="text-gray-300">
            Track your internship progress and achievements here.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Active Internships', value: '2', icon: '💼' },
            { label: 'Completed Tasks', value: '15/20', icon: '✅' },
            { label: 'Mentor Meetings', value: '3', icon: '👥' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a365d] p-6 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-[#48bb78] mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">Internship Progress</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#A0AEC0" />
                <YAxis stroke="#A0AEC0" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A365D',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                  }}
                />
                <Bar dataKey="progress" fill="#48BB78" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* SDG Mapping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">SDG Contribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sdgData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#A0AEC0" />
                <YAxis stroke="#A0AEC0" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A365D',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                  }}
                />
                <Bar dataKey="value" fill="#48BB78" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Upcoming Deadlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {[
              {
                task: 'Project Proposal Submission',
                date: '2024-04-20',
                status: 'Pending',
              },
              {
                task: 'Mid-term Progress Report',
                date: '2024-05-05',
                status: 'Upcoming',
              },
              {
                task: 'Final Presentation',
                date: '2024-06-15',
                status: 'Upcoming',
              },
            ].map((deadline, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#0f172a] rounded-lg"
              >
                <div>
                  <h3 className="font-semibold">{deadline.task}</h3>
                  <p className="text-gray-400">{deadline.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    deadline.status === 'Pending'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {deadline.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard; 