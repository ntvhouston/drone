import React from "react"

import RenderWeather from "./renderWeather"
import RenderLocation from "./renderLocation"
import RenderStateData from "./renderState"

import "../client/styles/weather.scss"

const Weather = (props) => {
    return (
        <div className="shadow p-3 mb-5 bg-white">
            <div className="row">
                <div className="col">
                    <RenderLocation location={props.location}/>
                    <RenderStateData weather={props.weather}/>
                </div>
                <div className="col">
                    <RenderWeather weather={props.weather}/>
                </div>
            </div>
        </div>
    )
}

export default Weather