import { useAuth } from '../context/AuthContext';
import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {user && <Sidebar />}
      <main className={`${user ? 'ml-64' : ''} pt-16 min-h-screen bg-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout; 