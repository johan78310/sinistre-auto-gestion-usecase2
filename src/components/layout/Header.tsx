
export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">AXA</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AXA Assurance</h1>
            <p className="text-sm text-gray-600">Gestion des sinistres automobile</p>
          </div>
        </div>
      </div>
    </header>
  );
};
