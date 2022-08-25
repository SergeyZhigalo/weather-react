import WeatherCard from "./WeatherCard";
import { IconHumidity, IconPressure, IconTemperature, IconVisibility, IconWind } from "./Icons";

function Weather({ data }) {
  return (
    <div className={'weather'}>
      <p className={'weather__city'}>{data.city_name}</p>
      <p>
        <img
          src={`weatherIcons/${data.weather.icon}.png`}
          alt={data.description}
        />
      </p>
      <p className={'weather__temp'}>{`${Math.round(data.temp)}°`}</p>
      <div className={'weather__card'}>
        <WeatherCard>
          <h4><IconTemperature/> Apparent temperature</h4>
          <p>{`${Math.round(data.app_temp)}°`}</p>
        </WeatherCard>
        <WeatherCard>
          <h4><IconHumidity/> Relative humidity</h4>
          <p>{`${Math.round(data.rh)}%`}</p>
        </WeatherCard>
        <WeatherCard>
          <h4><IconWind/> Wind speed</h4>
          <p>{`${Math.round(data.wind_spd)} m/s`}</p>
        </WeatherCard>
        <WeatherCard>
          <h4><IconWind/> Wind direction</h4>
          <p>{data.wind_cdir}</p>
        </WeatherCard>
        <WeatherCard>
          <h4><IconPressure/> Pressure</h4>
          <p>{`${Math.round(data.pres*0.750062)}`}<span className={'font-size-20'}>{' mm Hg'}</span></p>
        </WeatherCard>
        <WeatherCard>
          <h4><IconVisibility/> Visibility</h4>
          <p>{`${data.vis} km`}</p>
        </WeatherCard>
      </div>
    </div>
  )
}

export default Weather