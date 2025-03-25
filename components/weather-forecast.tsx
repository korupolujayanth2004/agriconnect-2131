"use client";

import { getCurrentWeather, getWeatherForecast } from "@/utils/api";
import { Cloud, CloudDrizzle, CloudRain, Droplets, Sun, Wind } from "lucide-react";
import { useEffect, useState } from "react";

interface CurrentWeather {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  rainfall: number;
}

interface Forecast {
  day: string;
  condition: string;
  high: number;
  low: number;
}

// Default data when API fails or returns no data
const DEFAULT_CURRENT_WEATHER: CurrentWeather = {
  temperature: 22,
  condition: "Partly Cloudy",
  humidity: 65,
  windSpeed: 10,
  rainfall: 0
};

const DEFAULT_FORECAST: Forecast[] = [
  { day: "Mon", condition: "Sunny", high: 28, low: 18 },
  { day: "Tue", condition: "Cloudy", high: 26, low: 17 },
  { day: "Wed", condition: "Rain", high: 23, low: 16 },
  { day: "Thu", condition: "Sunny", high: 27, low: 19 },
  { day: "Fri", condition: "Partly Cloudy", high: 25, low: 17 }
];

const getWeatherIcon = (condition: string) => {
  if (!condition) return <Sun className="h-8 w-8 text-amber-500" />;
  
  const lowerCondition = condition.toLowerCase();
  if (lowerCondition.includes("sun")) return <Sun className="h-8 w-8 text-amber-500" />;
  if (lowerCondition.includes("cloud")) return <Cloud className="h-8 w-8 text-gray-500" />;
  if (lowerCondition.includes("rain")) return <CloudRain className="h-8 w-8 text-blue-500" />;
  if (lowerCondition.includes("drizzle")) return <CloudDrizzle className="h-8 w-8 text-blue-400" />;
  
  return <Sun className="h-8 w-8 text-amber-500" />;
};

export default function WeatherForecast() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>(DEFAULT_CURRENT_WEATHER);
  const [forecast, setForecast] = useState<Forecast[]>(DEFAULT_FORECAST);

  useEffect(() => {
    // Attempt to fetch real weather data
    const fetchWeatherData = async () => {
      try {
        const weatherData = await getCurrentWeather();
        // If weatherData is valid, update current weather
        if (weatherData && typeof weatherData.temperature === 'number') {
          setCurrentWeather(weatherData);
        }
      } catch (error) {
        console.warn("Failed to fetch current weather, using default data", error);
      }

      try {
        const forecastData = await getWeatherForecast();
        // If forecastData is a valid array with at least one item, update forecast
        if (Array.isArray(forecastData) && forecastData.length > 0) {
          setForecast(forecastData);
        }
      } catch (error) {
        console.warn("Failed to fetch forecast, using default data", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Current Weather */}
        <div className="flex items-center p-4 rounded-lg bg-primary/5 border">
          <div className="mr-4">{getWeatherIcon(currentWeather.condition)}</div>
          <div>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">{currentWeather.temperature}°</span>
              <span className="text-lg ml-2">{currentWeather.condition}</span>
            </div>
            <p className="text-sm text-muted-foreground">Your location</p>
          </div>
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border">
            <Droplets className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-sm">Humidity</span>
            <span className="font-medium">{currentWeather.humidity}%</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-amber-50 dark:bg-amber-950 border">
            <Wind className="h-5 w-5 text-amber-500 mb-1" />
            <span className="text-sm">Wind</span>
            <span className="font-medium">{currentWeather.windSpeed} km/h</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border">
            <CloudRain className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-sm">Rain</span>
            <span className="font-medium">{currentWeather.rainfall} mm</span>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div>
        <h3 className="font-medium mb-3">5-Day Forecast</h3>
        <div className="grid grid-cols-5 gap-2">
          {forecast.map((day, index) => (
            <div key={index} className="flex flex-col items-center p-3 rounded-lg border text-center">
              <span className="text-sm font-medium mb-1">{day.day}</span>
              <div className="my-2">{getWeatherIcon(day.condition)}</div>
              <div className="flex gap-1 items-baseline">
                <span className="text-sm font-medium">{day.high}°</span>
                <span className="text-xs text-muted-foreground">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}