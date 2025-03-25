const BASE_URL = "http://127.0.0.1:5000"; // Flask backend

export const getCurrentWeather = async () => {
  try {
    const response = await fetch(`${BASE_URL}/weather/current`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching current weather:", error);
    return null;
  }
};

export const getWeatherForecast = async () => {
  try {
    const response = await fetch(`${BASE_URL}/weather/forecast`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching forecast:", error);
    return null;
  }
};
