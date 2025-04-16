import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const AdminDashboard = () => {
  const menuItems = [
    { path: '/admin/dashboard', label: 'Overview', icon: '📊' },
    { path: '/admin/users', label: 'User Management', icon: '👥' },
    { path: '/admin/internships', label: 'Internship Management', icon: '💼' },
    { path: '/admin/mentors', label: 'Mentor Allocation', icon: '👨‍🏫' },
    { path: '/admin/analytics', label: 'Analytics', icon: '📈' },
    { path: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ];

  const departmentData = [
    { name: 'Computer Science', internships: 45, students: 120 },
    { name: 'Electrical', internships: 30, students: 90 },
    { name: 'Mechanical', internships: 25, students: 80 },
    { name: 'Civil', internships: 20, students: 70 },
    { name: 'Business', internships: 35, students: 100 },
  ];

  const statusData = [
    { name: 'Active', value: 65 },
    { name: 'Completed', value: 25 },
    { name: 'Pending', value: 10 },
  ];

  const COLORS = ['#48BB78', '#ECC94B', '#F56565'];

  return (
    <DashboardLayout role="admin" menuItems={menuItems}>
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-2">Welcome back, Admin!</h1>
          <p className="text-gray-300">
            Manage the platform and monitor system-wide statistics.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Users', value: '1,250', icon: '👥' },
            { label: 'Active Internships', value: '155', icon: '💼' },
            { label: 'Mentors', value: '45', icon: '👨‍🏫' },
            { label: 'Departments', value: '8', icon: '🏢' },
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

        {/* Department-wise Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">Department-wise Statistics</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData}>
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
                <Bar dataKey="internships" fill="#48BB78" name="Internships" />
                <Bar dataKey="students" fill="#ECC94B" name="Students" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Internship Status Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1a365d] p-6 rounded-lg"
          >
            <h2 className="text-xl font-bold mb-4">Internship Status</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
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

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1a365d] p-6 rounded-lg"
          >
            <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {[
                {
                  action: 'New internship posted',
                  department: 'Computer Science',
                  time: '2 hours ago',
                },
                {
                  action: 'Mentor assigned',
                  department: 'Electrical',
                  time: '4 hours ago',
                },
                {
                  action: 'Student placement',
                  department: 'Mechanical',
                  time: '6 hours ago',
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#0f172a] rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{activity.action}</h3>
                    <p className="text-gray-400">{activity.department}</p>
                  </div>
                  <span className="text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* System Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">System Alerts</h2>
          <div className="space-y-4">
            {[
              {
                type: 'warning',
                message: 'Low mentor availability in Computer Science department',
                action: 'Assign more mentors',
              },
              {
                type: 'info',
                message: 'New internship applications pending review',
                action: 'Review applications',
              },
            ].map((alert, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#0f172a] rounded-lg"
              >
                <div>
                  <h3
                    className={`font-semibold ${
                      alert.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                    }`}
                  >
                    {alert.message}
                  </h3>
                </div>
                <button className="bg-[#2f855a] hover:bg-[#48bb78] px-4 py-2 rounded-lg transition-colors">
                  {alert.action}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard; 