import React from "react"

import "../client/styles/heading.scss"

const Heading = (props) => {
    return (
        <div className = "heading">
            {props.title}
        </div>
    )
}

export default Heading