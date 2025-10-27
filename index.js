const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files from public directory

// Weather API endpoint (using OpenWeatherMap as example)
const WEATHER_API_KEY = process.env.WEATHER_API_KEY || 'your_api_key_here';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/api/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Weather API key not configured' });
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = response.data;
    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      wind_speed: data.wind.speed,
      icon: data.weather[0].icon,
      timestamp: new Date().toISOString()
    };

    res.json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error.response?.data || error.message);
    res.status(404).json({
      error: 'City not found or API error',
      message: error.response?.data?.message || 'Unable to fetch weather data'
    });
  }
});


app.listen(PORT, () => {
  console.log(`Smart Weather App listening on port ${PORT}`);
  console.log(`Frontend: http://localhost:${PORT}`);
  console.log(`API Health: http://localhost:${PORT}/api/health`);
});
