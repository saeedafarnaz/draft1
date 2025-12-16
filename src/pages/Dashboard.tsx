import { BookOpen, TrendingUp, FileText, BarChart3 } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import HoursChart from '../components/HoursChart';
import PerformanceGauge from '../components/PerformanceGauge';
import HoursTable from '../components/HoursTable';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-1">Hello Maryam</h1>
                <p className="text-gray-500">Go & learn more things today!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                  icon={<BookOpen className="w-6 h-6" />}
                  title="Attended Lecture"
                  value="10/32"
                  iconBg="bg-pink-100"
                  iconColor="text-pink-600"
                />
                <StatCard
                  icon={<BookOpen className="w-6 h-6" />}
                  title="Uncompleted Lecture"
                  value="22/32"
                  iconBg="bg-orange-100"
                  iconColor="text-orange-600"
                />
                <StatCard
                  icon={<BookOpen className="w-6 h-6" />}
                  title="Course Completed"
                  value="3/10"
                  iconBg="bg-blue-100"
                  iconColor="text-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <HoursChart />
                <PerformanceGauge />
              </div>

              <HoursTable />
            </div>
          </main>

          <Footer />
        </div>

        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboard;
