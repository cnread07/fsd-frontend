import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/Home';
import About from './pages/About';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import MentorDashboard from './pages/dashboard/MentorDashboard';
import ManagementDashboard from './pages/dashboard/ManagementDashboard';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/mentor-dashboard" element={<MentorDashboard />} />
              <Route path="/management-dashboard" element={<ManagementDashboard />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;