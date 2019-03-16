import React from "react"
import Plot from "react-plotly.js"

export default class Graph extends React.Component {
    render() {
        return (
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [4, 5, 6],
                        type: 'scatter'
                    }
                ]}
            />
        )
    }
}