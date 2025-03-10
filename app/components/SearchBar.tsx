'use client';

import { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  defaultCity?: string;
}

export default function SearchBar({ onSearch, defaultCity = '' }: SearchBarProps) {
  const [city, setCity] = useState(defaultCity);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ingrese el nombre de la ciudad..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
