import { BarChart3, BookOpen, TrendingUp, FileText } from 'lucide-react';

function Sidebar() {
  return (
    <aside className="w-64 bg-[#0A2540] text-white flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#0A2540]" />
          </div>
          <span className="text-lg font-semibold">AI learning</span>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1a4d7a] text-white"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Overview</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#1a4d7a] hover:text-white transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>Courses</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#1a4d7a] hover:text-white transition-colors"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Performance</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#1a4d7a] hover:text-white transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Notes</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
