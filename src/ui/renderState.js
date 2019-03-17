import React from "react"

const RenderStateData = (props) => {
    const stateTitle = props.weather.parent.title
    const stateType = props.weather.parent.location_type

    return (
        <div>
            <p className="weatherFontBasic locationTitle">{stateTitle}</p>
            <p className="weatherFontBasic locationSubtitle">{stateType}</p>
        </div>
    )
}

export default RenderStateData