import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { initDis } from "./actions"

class Index extends React.Component {
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
                    <p>{data[data.length - 1].timestamp}</p>
                    : undefined}
            </div>
        )
    }
}

const mapStateToProps = state => ({ data: state.data })

const mapDispatchToProps = dispatch => bindActionCreators({ initDis }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)