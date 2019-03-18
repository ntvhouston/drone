import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import store from "./store/configureStore"
import App from "./ui/app"

import "react-toastify/dist/ReactToastify.css"
import "./client/styles/header.scss"
import "./client/styles/heading.scss"
import "./client/styles/weather.scss"
import "./client/styles/map.scss"
import "./client/styles/marker.scss"
import "./client/styles/graph.scss"


const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))