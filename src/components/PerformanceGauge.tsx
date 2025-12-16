function PerformanceGauge() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Performance</h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Point Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Weekly</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-8">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="16"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#14b8a6"
              strokeWidth="16"
              strokeDasharray={`${(8966 / 10000) * 502.4} 502.4`}
              strokeLinecap="round"
            />
            <circle cx="140" cy="140" r="8" fill="#ff9800" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-sm text-gray-600">Your Point</div>
            <div className="text-3xl font-bold text-gray-800">8,966</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceGauge;
