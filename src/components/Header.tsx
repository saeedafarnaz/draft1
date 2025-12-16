import { Bell, Mail, User } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1"></div>

        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Maryam Noor ul ain</span>

          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Mail className="w-5 h-5" />
          </button>

          <button className="w-10 h-10 bg-[#0A2540] rounded-full flex items-center justify-center text-white">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
