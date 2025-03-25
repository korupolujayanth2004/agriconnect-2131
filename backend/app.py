from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

# RapidAPI Weather API credentials
API_KEY = os.getenv("")
#API_KEY = os.getenv("RAPIDAPI_KEY")
BASE_URL = os.getenv("BASE_URL")

HEADERS = {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
}

@app.route("/weather/current", methods=["GET"])
def get_current_weather():
    try:
        lat = request.args.get('lat', '35.5')
        lon = request.args.get('lon', '-78.5')
        
        response = requests.get(
            BASE_URL, 
            params={
                "lat": lat, 
                "lon": lon, 
                "units": "imperial", 
                "lang": "en"
            }, 
            headers=HEADERS
        )
        response.raise_for_status()  # Raise an error for HTTP 4xx/5xx responses
        
        data = response.json()
        current = data["data"][0]  # Current weather data

        weather_info = {
            "temperature": current["temp"],
            "condition": current["weather"]["description"],
            "humidity": current["rh"],
            "windSpeed": current["wind_spd"],
            "rainfall": current.get("precip", 0),
        }
        return jsonify(weather_info)
    
    except requests.exceptions.RequestException as e:
        app.logger.error(f"Error fetching current weather: {e}")
        return jsonify({"error": "Failed to fetch weather data"}), 500
    except (KeyError, IndexError) as e:
        app.logger.error(f"Data parsing error: {e}")
        return jsonify({"error": "Invalid weather data received"}), 500

@app.route("/weather/forecast", methods=["GET"])
def get_weather_forecast():
    try:
        lat = request.args.get('lat', '35.5')
        lon = request.args.get('lon', '-78.5')
        
        response = requests.get(
            BASE_URL, 
            params={
                "lat": lat, 
                "lon": lon, 
                "units": "imperial", 
                "lang": "en"
            }, 
            headers=HEADERS
        )
        response.raise_for_status()
        
        data = response.json()
        forecast_data = data["data"]

        forecast_list = []
        for i in range(0, len(forecast_data), 8):  # 3-hourly forecast, so every 8th entry is roughly a day
            if i < len(forecast_data):
                forecast_list.append({
                    "day": f"Day {len(forecast_list) + 1}",
                    "high": max(entry["temp"] for entry in forecast_data[i:i+8]),
                    "low": min(entry["temp"] for entry in forecast_data[i:i+8]),
                    "condition": forecast_data[i]["weather"]["description"],
                })

        return jsonify(forecast_list)
    
    except requests.exceptions.RequestException as e:
        app.logger.error(f"Error fetching weather forecast: {e}")
        return jsonify({"error": "Failed to fetch forecast"}), 500
    except (KeyError, IndexError) as e:
        app.logger.error(f"Data parsing error: {e}")
        return jsonify({"error": "Invalid forecast data received"}), 500

@app.errorhandler(500)
def handle_internal_error(e):
    return jsonify({"error": "Something went wrong on the server"}), 500

if __name__ == "__main__":
    app.run(debug=True)