'use client';

import SearchBar from './SearchBar';
import ProvinceSelector from './ProvinceSelector';

interface SearchGroupProps {
  onSearch: (city: string) => void;
  defaultCity: string;
}

export default function SearchGroup({ onSearch, defaultCity }: SearchGroupProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Buscar Ciudad</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-3 text-center">Búsqueda por nombre</h3>
          <SearchBar onSearch={onSearch} defaultCity={defaultCity} />
        </div>
        <div className="border-t pt-8">
          <h3 className="text-sm font-semibold text-gray-600 mb-3 text-center">Búsqueda por provincia</h3>
          <ProvinceSelector onSelectCity={onSearch} />
        </div>
      </div>
    </div>
  );
}
