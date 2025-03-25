"use client";

import { useEffect, useState } from "react";

export default function WeatherMap() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);

  const GOOGLE_API_KEY ="AIzaSyA02uirn607z3AwDFEqGKJOcFhZbDgZhvI"; // Replace with your Google API key
  const WEATHERSTACK_API_KEY ="e992f3bb886e965fe3c04bd36f675244"; // Your Weatherstack API key

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (isScriptLoaded && typeof window !== "undefined" && window.google) {
      getLocation();
    }
  }, [isScriptLoaded]);

  useEffect(() => {
    if (map && userLocation) {
      map.setCenter(userLocation);
      new google.maps.Marker({
        position: userLocation,
        map,
        title: "Your Location",
        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      });

      fetchWeatherData(userLocation.lat, userLocation.lng);
    }
  }, [map, userLocation]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);
          setMap(
            new google.maps.Map(document.getElementById("map") as HTMLElement, {
              center: location,
              zoom: 10,
            })
          );
        },
        (error) => {
          alert("Error getting location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const fetchWeatherData = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${lat},${lon}`
      );
      const data = await response.json();
      if (data.success === false) {
        alert("Error fetching weather data: " + data.error.info);
        return;
      }
      setWeatherData(data);
      addWeatherMarker(data, lat, lon);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const addWeatherMarker = (weather: any, lat: number, lon: number) => {
    if (!map) return;
    new google.maps.Marker({
      position: { lat, lng: lon },
      map,
      title: `Weather: ${weather.current.temperature}°C, ${weather.current.weather_descriptions[0]}`,
      icon: weather.current.weather_icons[0],
    });
  };

  return (
    <div className="space-y-4">
      <div id="map" className="h-[500px] w-full border rounded-md"></div>
      {weatherData && (
        <div className="p-4 border rounded-md bg-gray-100">
          <h2 className="text-xl font-semibold">Weather Info</h2>
          <p>
            <strong>Location:</strong> {weatherData.location.name}, {weatherData.location.country}
          </p>
          <p>
            <strong>Temperature:</strong> {weatherData.current.temperature}°C
          </p>
          <p>
            <strong>Condition:</strong> {weatherData.current.weather_descriptions[0]}
          </p>
          <img src={weatherData.current.weather_icons[0]} alt="Weather Icon" />
        </div>
      )}
    </div>
  );
}