import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import store from "./store"
import Index from "./index"

const jsx = (
    <Provider store={store}>
        <Index/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))