import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ToastContainer } from "react-toastify"
import { BarLoader } from "react-spinners"
import { css } from "@emotion/core"

import { initDis } from "../actions/actions"

import Header from "./header"
import Component from "./components"

const override = css`
    margin: 1.3rem auto;
`
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
                    <Component data={data}/> :
                    <BarLoader
                        css={override}
                        widthUnit={"%"}
                        height={7}
                        width={100}
                        color={"#2575B0"}
                    />
                }
                <ToastContainer autoClose={4000}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ data: state.data })
const mapDispatchToProps = dispatch => bindActionCreators({ initDis }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)