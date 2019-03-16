import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { initDis } from "../actions/actions"

import Header from "./header"
import Heading from "./heading"
import Map from "./map"
import Graph from "./graph"

class App extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.props.initDis()
        }, 4000)
    }

    render() {
        const { data } = this.props
        return (
            <div className = "container">
                <Header/>
                {data ?
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
                    </div>:
                    <h1>Loading...</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({ data: state.data })
const mapDispatchToProps = dispatch => bindActionCreators({ initDis }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)