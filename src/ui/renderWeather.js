import React from "react"

import { renderWeatherIco } from "./weatherIco"

const degreeSymbol = String.fromCharCode(8457)

const RenderWeather = (props) => {
    const weatherData = props.weather.consolidated_weather
    const latestWeather = weatherData[weatherData.length - 1]
    const currWeather = latestWeather.weather_state_name
    const temp = latestWeather.the_temp
    const maxTemp = latestWeather.max_temp
    const minTemp = latestWeather.min_temp

    return (
        <div className="weatherFontBasic">
            <p>Weather - {renderWeatherIco(currWeather)} {currWeather}</p>
            <p>{`Temperature - ${Math.round(temp)}${degreeSymbol}`}</p>
            <p>{`High - ${Math.round(maxTemp)}${degreeSymbol}`} / {`Low - ${Math.round(minTemp)}${degreeSymbol}`}</p>
        </div>
    )
}

export default RenderWeather