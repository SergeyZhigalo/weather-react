import { useEffect } from "react";
import SearchForm from "./components/SearchForm";
import Weather from "./components/Weather";
import Loader from "./components/Loader";
import { useWeather } from "./hooks/weather";

function App() {
  const {
    APIKey,
    data,
    loader,
    city,
    fetchWeather,
  } = useWeather()


  useEffect(() => {
    fetchWeather(city, APIKey)
  }, [])

  return (
    <div className="App">
      <SearchForm
        fetchWeather={fetchWeather}
        APIKey={APIKey}
      />
      {loader && <Loader/>}
      {!loader && <Weather data={data} />}
    </div>
  );
}

export default App;
