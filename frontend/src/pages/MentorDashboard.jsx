import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const MentorDashboard = () => {
  const menuItems = [
    { path: '/mentor/dashboard', label: 'Overview', icon: '📊' },
    { path: '/mentor/students', label: 'My Students', icon: '👥' },
    { path: '/mentor/progress', label: 'Progress Review', icon: '📈' },
    { path: '/mentor/feedback', label: 'Feedback', icon: '💬' },
    { path: '/mentor/settings', label: 'Settings', icon: '⚙️' },
  ];

  const studentData = [
    { name: 'Placed', value: 15 },
    { name: 'In Progress', value: 8 },
    { name: 'Not Started', value: 2 },
  ];

  const COLORS = ['#48BB78', '#ECC94B', '#F56565'];

  const students = [
    {
      name: 'John Doe',
      status: 'In Progress',
      progress: 75,
      internship: 'Software Development',
      company: 'Tech Corp',
    },
    {
      name: 'Jane Smith',
      status: 'Placed',
      progress: 100,
      internship: 'Data Science',
      company: 'Data Insights',
    },
    {
      name: 'Mike Johnson',
      status: 'In Progress',
      progress: 45,
      internship: 'Web Development',
      company: 'Web Solutions',
    },
  ];

  return (
    <DashboardLayout role="mentor" menuItems={menuItems}>
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-2">Welcome back, Mentor!</h1>
          <p className="text-gray-300">
            Monitor your students' progress and provide guidance.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Students', value: '25', icon: '👥' },
            { label: 'Placed Students', value: '15', icon: '✅' },
            { label: 'Active Internships', value: '8', icon: '💼' },
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

        {/* Student Distribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">Student Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={studentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {studentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A365D',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Student List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">Student Progress</h2>
          <div className="space-y-4">
            {students.map((student, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#0f172a] rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-semibold">{student.name}</h3>
                  <p className="text-gray-400">
                    {student.internship} at {student.company}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-[#48bb78] h-2.5 rounded-full"
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      student.status === 'Placed'
                        ? 'bg-green-500 text-white'
                        : 'bg-yellow-500 text-white'
                    }`}
                  >
                    {student.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pending Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">Pending Reviews</h2>
          <div className="space-y-4">
            {[
              {
                student: 'John Doe',
                task: 'Project Proposal Review',
                deadline: '2024-04-20',
              },
              {
                student: 'Mike Johnson',
                task: 'Mid-term Progress Review',
                deadline: '2024-04-22',
              },
            ].map((review, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#0f172a] rounded-lg"
              >
                <div>
                  <h3 className="font-semibold">{review.student}</h3>
                  <p className="text-gray-400">{review.task}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-400">{review.deadline}</p>
                  <button className="bg-[#2f855a] hover:bg-[#48bb78] px-4 py-2 rounded-lg transition-colors">
                    Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default MentorDashboard; 