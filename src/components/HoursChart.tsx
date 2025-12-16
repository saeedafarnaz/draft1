function HoursChart() {
  const data = [
    { month: 'Jan', hours: 25, study: true, exams: false },
    { month: 'Feb', hours: 30, study: true, exams: false },
    { month: 'Mar', hours: 22, study: true, exams: false },
    { month: 'Apr', hours: 35, study: true, exams: true },
    { month: 'May', hours: 18, study: true, exams: false },
  ];

  const maxHours = Math.max(...data.map(d => d.hours));

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Hours Spent</h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span className="text-sm text-gray-600">Study</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-300 rounded"></div>
            <span className="text-sm text-gray-600">Exams</span>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between h-48 gap-4">
        {data.map((item) => (
          <div key={item.month} className="flex-1 flex flex-col items-center">
            <div className="flex-1 flex items-end w-full">
              <div className="w-full relative">
                <div
                  className="bg-orange-500 rounded-t mx-auto"
                  style={{
                    height: `${(item.hours / maxHours) * 100}%`,
                    width: '60%',
                    minHeight: '20px',
                  }}
                >
                  {item.exams && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#0A2540] text-white text-xs px-2 py-1 rounded">
                      Exams
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">{item.month}</div>
            <div className="text-xs text-gray-400">{item.hours} Hr</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HoursChart;
