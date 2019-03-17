import React from "react"

import Heading from "./heading"
import Map from "./map"
import Graph from "./graph"
import Weather from "./weather"

const Component = (props) => {
    const { data } = props.data.data1
    const { data2, data3 } = props.data
    return (
        <div>
            <Heading title="Basic Information"/>
            <Weather location={data2} weather={data3}/>
            <div className = "row">
                <div className = "col">
                    <Heading title="Map Visualization"/>
                    <div className = "shadow p-3 mb-5 bg-white rounded">
                        <Map lat={data[data.length - 1].latitude} lng={data[data.length - 1].longitude}/>
                    </div>
                </div>
                <div className = "col">
                    <Heading title="Graph Visualization"/>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <Graph data={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component