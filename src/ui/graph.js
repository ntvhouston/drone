import React from "react"
import Plot from "react-plotly.js"
import moment from "moment"

export default class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: [], temp: [] }
    }

    pullData() {
        const time = []
        const temp = []
        this.props.data.map((data) => {
            time.push(moment(data.timestamp).format())
            temp.push(data.metric)
        })
        this.setState({ time, temp })
    }

    componentDidMount() { this.pullData() }

    componentDidUpdate(prevProps) {
        if(this.props.data[this.props.data.length - 1].timestamp !== prevProps.data[prevProps.data.length - 1].timestamp) {
            this.pullData()
        }
    }

    render() {
        return (
            <div className="graphStyle">
                <Plot style={width=100 + "%"} className="graphStyle"
                    data={[ {
                            x: this.state.time,
                            y: this.state.temp,
                            type: 'scatter'
                        }]}
                    layout={{autozie: true, title: 'Drone Temperature', yaxis: {automargin: true}}}
                />
            </div>
        )
    }
}