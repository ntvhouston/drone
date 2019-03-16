import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import store from "./store/configureStore"
import App from "./ui/app"

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))