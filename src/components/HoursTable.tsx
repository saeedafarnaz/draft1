function HoursTable() {
  const students = [
    { rank: 1, name: 'Maryam', hours: 38 },
    { rank: 2, name: 'Fernaz', hours: 32 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Hours Spent</h2>
        <button className="text-teal-600 text-sm font-medium hover:text-teal-700">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">#</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Name</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-600">Jan</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-600">Feb</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-600">Mar</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-600">Apr</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-600">May</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.rank} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 text-sm text-gray-600">{student.rank}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">IMG</span>
                    </div>
                    <span className="text-sm font-medium text-gray-800">{student.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-sm text-gray-600">-</td>
                <td className="py-4 px-4 text-center text-sm text-gray-600">-</td>
                <td className="py-4 px-4 text-center text-sm text-gray-600">-</td>
                <td className="py-4 px-4 text-center text-sm text-gray-600">-</td>
                <td className="py-4 px-4 text-center text-sm text-gray-600">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HoursTable;
