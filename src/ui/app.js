import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { initDis } from "../actions/actions"

import Map from "./map"

class App extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.props.initDis()
        }, 4000)
    }

    render() {
        const { data } = this.props
        return (
            <div>
                {data ?
                    <Map lat={data[data.length - 1].latitude} lng={data[data.length - 1].longitude}/> :
                    <h1>Loading...</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({ data: state.data })
const mapDispatchToProps = dispatch => bindActionCreators({ initDis }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)