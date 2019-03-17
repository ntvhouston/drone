import React from "react"

export default class Weather extends React.Component {

    renderLocation() {
        const latestLocation = this.props.location[this.props.location.length - 1]
        const locationTitle = latestLocation.title
        const locationType = latestLocation.location_type

        return (
            <div>
                <p>{locationTitle}</p>
                <p>{locationType}</p>
            </div>
        )
    }

    renderWeather() {
        const weatherData = this.props.weather.consolidated_weather
        const latestWeather = weatherData[weatherData.length - 1]
        const currWeather = latestWeather.weather_state_name
        const temp = latestWeather.the_temp
        const maxTemp = latestWeather.max_temp
        const minTemp = latestWeather.min_temp

        return (
            <div>
                <p>{currWeather}</p>
                <p>{temp}</p>
                <p>{maxTemp}</p>
                <p>{minTemp}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="shadow p-3 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col">
                        {this.renderLocation()}
                    </div>
                    <div className="col">
                        {this.renderWeather()}
                    </div>
                </div>
            </div>
        )
    }
}