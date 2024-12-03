import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value); // Update the state
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c517088ba3b9ec51af39d8855f6a8bf7`
      );
      setWeather(response);
      console.log(response);
    } catch (error) {
      console.error("Fetching error", error);
    }
  };

  const handleClick = () => {
    fetchWeather();
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="max-w-sm w-full p-6 bg-blue-600 border-gray-200 rounded-lg shadow-md hover:bg-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Enter the city"
          value={city}
          onChange={handleCityChange}
        />
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={handleClick}
        >
          Get Weather 
        </button>
        <div className="mt-6">
          {weather && (
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">{weather.data.name}</h3>
              <h4 className="text-lg">
                Temperature: {weather.data.main.temp}°C
              </h4>
              <h4 className="text-lg capitalize">
                Condition: {weather.data.weather[0].description}
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;
