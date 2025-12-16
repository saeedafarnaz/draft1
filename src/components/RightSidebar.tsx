import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

function RightSidebar() {
  const currentMonth = 'December 2021';
  const daysInMonth = [
    { day: '', empty: true },
    { day: '', empty: true },
    { day: '', empty: true },
    { day: '1', empty: false },
    { day: '2', empty: false },
    { day: '3', empty: false },
    { day: '4', empty: false },
    { day: '5', empty: false },
    { day: '6', empty: false },
    { day: '7', empty: false },
    { day: '8', empty: false },
    { day: '9', empty: false },
    { day: '10', empty: false },
    { day: '11', empty: false },
    { day: '12', empty: false },
    { day: '13', empty: false },
    { day: '14', empty: false },
    { day: '15', empty: false },
    { day: '16', empty: false },
    { day: '17', empty: false },
    { day: '18', empty: false },
    { day: '19', empty: false },
    { day: '20', empty: false },
    { day: '21', empty: false },
    { day: '22', empty: false },
    { day: '23', empty: false },
    { day: '24', empty: false },
    { day: '25', empty: false },
    { day: '26', empty: false },
    { day: '27', empty: false },
    { day: '28', empty: false },
    { day: '29', empty: false },
    { day: '30', empty: false },
    { day: '31', empty: false },
  ];

  const todoItems = [
    { id: 1, text: 'Completing React Audio Programming - 08:40 AM', completed: false },
    { id: 2, text: 'Picking MERN Stack Quizz', completed: false },
    { id: 3, text: 'Research Checkpoint tour - 08:40 AM', completed: false },
    { id: 4, text: 'Attend Analysis Of Business Analytics tour - 08:40 AM', completed: false, highlighted: true },
  ];

  return (
    <aside className="w-80 bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto">
      <div className="mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
          <button className="ml-auto text-gray-400 hover:text-gray-600 mb-2 flex items-center gap-1">
            <span className="text-sm">Profile</span>
            <ExternalLink className="w-4 h-4" />
          </button>
          <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-3 flex items-center justify-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">
              Profile Image
            </div>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Maryam Yousupzai</h3>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span>College Student</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-sm font-medium text-gray-700">{currentMonth}</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
            <div key={idx} className="text-center text-xs font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
          {daysInMonth.map((item, idx) => (
            <div
              key={idx}
              className={`text-center text-xs py-2 ${
                item.empty
                  ? ''
                  : 'hover:bg-gray-100 rounded cursor-pointer text-gray-700'
              }`}
            >
              {item.day}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-4">To Do List</h3>
        <div className="space-y-3">
          {todoItems.map((item) => (
            <div key={item.id} className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={item.completed}
                className="mt-1 w-4 h-4 rounded border-gray-300"
                readOnly
              />
              <span
                className={`text-xs ${
                  item.highlighted ? 'text-teal-600' : 'text-gray-600'
                }`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;
