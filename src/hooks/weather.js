import { useState } from "react";
import axios from "axios";

export function useWeather() {
  const APIKey = 'fef14fe7c45c48ecaa5a1c13feb4cf15'
  const [data, setData] = useState({})
  const [loader, setLoader] = useState(true)
  const [city, setCity] = useState(localStorage.getItem('weatherCity') || 'Big Sur')

  async function fetchWeather(city, APIKey) {
    setLoader(true)
    const response = await axios.get(`https://api.weatherbit.io/v2.0/current?&city=${city}&key=${APIKey}`)
    setData(response.data.data[0])
    localStorage.setItem('weatherCity', city)
    setCity(city)
    response.data.data[0].pod === 'd' ? classChange('day', 'night') : classChange('night', 'day')
    setLoader(false)
  }

  function classChange(add, remove) {
    document.body.classList.add(add)
    document.body.classList.remove(remove)
  }

  return {
    APIKey,
    data,
    loader,
    city,
    fetchWeather,
  }
}