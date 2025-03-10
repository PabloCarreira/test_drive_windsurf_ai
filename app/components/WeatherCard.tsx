import React from 'react';
import Image from 'next/image';

interface WeatherCardProps {
  temperature: number;
  location: string;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  pressure: number;
  error?: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ 
  temperature, 
  location, 
  description, 
  icon,
  humidity,
  windSpeed,
  feelsLike,
  pressure,
  error 
}) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg w-full ${error ? 'border-red-300' : ''}`}>
      <h2 className="text-2xl font-bold mb-4 text-center">{location}</h2>
      <div className="flex items-center justify-center mb-6">
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          width={100}
          height={100}
          className="w-24 h-24"
        />
      </div>
      <div className="text-center mb-6">
        <p className="text-5xl font-bold mb-2">{temperature}°C</p>
        <p className={`capitalize text-lg ${error ? 'text-red-500' : 'text-gray-600'}`}>{description}</p>
        <p className="text-gray-500">Sensación térmica: {feelsLike}°C</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 mb-1">Humedad</p>
          <p className="font-semibold text-lg">{humidity}%</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 mb-1">Velocidad del viento</p>
          <p className="font-semibold text-lg">{windSpeed} km/h</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 mb-1">Presión</p>
          <p className="font-semibold text-lg">{pressure} hPa</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 mb-1">Sensación térmica</p>
          <p className="font-semibold text-lg">{feelsLike}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
