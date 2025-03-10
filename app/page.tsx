'use client';

import { useState, useEffect, useCallback } from 'react';
import WeatherCard from './components/WeatherCard';
import LoadingWeather from './components/LoadingWeather';
import SearchGroup from './components/SearchGroup';
import { getWeatherData, WeatherData } from './services/weatherService';

export default function Home() {
  const [city, setCity] = useState('Córdoba');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch = useCallback(async (searchCity: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(searchCity);
      setWeatherData(data);
      setCity(searchCity);
    } catch (err) {
      console.error('Error al buscar el clima:', err);
      setError('No se pudo encontrar el clima para esta ciudad');
    } finally {
      setLoading(false);
    }
  }, []); // No dependencies needed as setState functions are stable

  // Fetch initial weather data
  useEffect(() => {
    handleSearch(city);
  }, [city, handleSearch]);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-8">Clima en Argentina</h1>
        
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-center max-w-6xl mx-auto w-full">
          {/* Left Column - Search Section */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-full max-w-md">
              <SearchGroup onSearch={handleSearch} defaultCity={city} />
            </div>
          </div>

          {/* Right Column - Weather Display */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full max-w-2xl">
              {loading ? (
                <LoadingWeather />
              ) : error ? (
                <WeatherCard
                  temperature={0}
                  location={city}
                  description={error}
                  icon="01d"
                  humidity={0}
                  windSpeed={0}
                  feelsLike={0}
                  pressure={0}
                  error={true}
                />
              ) : weatherData ? (
                <WeatherCard {...weatherData} />
              ) : (
                <LoadingWeather />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
