import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

export const renderWeatherIco = (weatherType) => {
    switch (weatherType) {
        case "Light Cloud":
            return <FontAwesomeIcon icon={["fas", "cloud"]}/>
        case "Showers":
            return <FontAwesomeIcon icon={["fas", "cloud-rain"]}/>
        case "Clear":
            return <FontAwesomeIcon icon={["fas", "sun"]}/>
        case "Heavy Cloud":
            return <FontAwesomeIcon icon={["fas", "cloud"]}/>
        case "Heavy Rain":
            return <FontAwesomeIcon icon={["fas", "cloud-showers-heavy"]}/>
        case "Light Rain":
            return <FontAwesomeIcon icon={["fas", "cloud-sun-rain"]}/>
        default:
            console.log(weatherType)
            break;
    }
}