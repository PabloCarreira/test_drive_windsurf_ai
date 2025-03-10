export default function LoadingWeather() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="flex items-center justify-center mb-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
      </div>
      <div className="text-center mb-4">
        <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-1"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-50 p-2 rounded">
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div className="h-5 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
