import React, { useState, useEffect } from "react";
import styles from "./Weather.module.css";

const Weather = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "bd5e378503939ddaee76f12ad7a97608";

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("City not found. Please check the name and try again.");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCity(searchQuery.trim());
    }
  };

  return (
    <div className={styles.weatherContainer}>
      <h2>Check Weather</h2>
      <form className={styles.inputContainer} onSubmit={handleSearch}>
        <label htmlFor="city">City:</label>
        <input
          id="city"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter city name"
          className={styles.cityInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      <div className={styles.weatherInfo}>
        {loading ? (
          <div className={styles.spinner}></div>
        ) : weatherData ? (
          <div>
            <h3>Weather in {weatherData.name}</h3>
            <p>🌡 Temperature: {weatherData.main.temp}°C</p>
            <p>☁ Condition: {weatherData.weather[0].description}</p>
            <p>💧 Humidity: {weatherData.main.humidity}%</p>
            <p>💨 Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        ) : error ? (
          <p className={styles.errorMessage}>{error}</p>
        ) : (
          <p>Enter a city to get the weather information.</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
