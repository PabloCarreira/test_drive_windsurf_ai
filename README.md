# Clima en Argentina

Una aplicación del clima para Argentina que permite buscar por ciudad o provincia.

## Configuración

1. Crear una cuenta en [OpenWeatherMap](https://openweathermap.org/) y obtener una API key
2. Agregar la siguiente variable de entorno:
   ```
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
   ```

## Desarrollo

```bash
npm install
npm run dev
```

## Características

- Búsqueda por nombre de ciudad
- Búsqueda por provincia con ciudades principales
- Información detallada del clima:
  - Temperatura actual
  - Sensación térmica
  - Humedad
  - Velocidad del viento
  - Presión atmosférica
- Interfaz responsive y moderna
- Soporte para todas las provincias argentinas
