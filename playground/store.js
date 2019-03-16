import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import reducer from "./reducer"
import {watcherSaga} from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(watcherSaga)

export default store