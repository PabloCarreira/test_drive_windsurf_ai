'use client';

import { useState } from 'react';
import { provinces, Province } from '../data/provinces';

interface ProvinceSelectorProps {
  onSelectCity: (city: string) => void;
}

export default function ProvinceSelector({ onSelectCity }: ProvinceSelectorProps) {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);

  return (
    <div>
      <select
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        onChange={(e) => {
          const province = provinces.find(p => p.code === e.target.value);
          setSelectedProvince(province || null);
        }}
        value={selectedProvince?.code || ''}
      >
        <option value="">Seleccione una provincia</option>
        {provinces.map((province) => (
          <option key={province.code} value={province.code}>
            {province.name}
          </option>
        ))}
      </select>
      
      {selectedProvince && (
        <div className="grid grid-cols-2 gap-2">
          {selectedProvince.mainCities.map((city) => (
            <button
              key={city}
              onClick={() => onSelectCity(city)}
              className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded text-sm text-left transition-colors"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
