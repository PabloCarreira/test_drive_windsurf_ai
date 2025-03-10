const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  temperature: number;
  location: string;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  pressure: number;
}

export async function getWeatherData(city: string): Promise<WeatherData> {
  if (!API_KEY) {
    throw new Error('La clave API de OpenWeather no está configurada');
  }

  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)},AR&units=metric&lang=es&appid=${API_KEY}`,
    { next: { revalidate: 300 } } // Cache for 5 minutes
  );

  if (!response.ok) {
    throw new Error('No se pudo encontrar la ciudad');
  }

  const data = await response.json();
  
  return {
    temperature: Math.round(data.main.temp),
    location: data.name,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    humidity: Math.round(data.main.humidity),
    windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
    feelsLike: Math.round(data.main.feels_like),
    pressure: data.main.pressure,
  };
}
