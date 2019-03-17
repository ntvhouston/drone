import React from "react"

const RenderLocation = (props) => {
    const latestLocation = props.location[props.location.length - 1]
    const locationTitle = latestLocation.title
    const locationType = latestLocation.location_type

    return (
        <div>
            <p className="weatherFontBasic locationTitle">{locationTitle}</p>
            <p className="weatherFontBasic locationSubtitle">{locationType}</p>
        </div>
    )
}

export default RenderLocation