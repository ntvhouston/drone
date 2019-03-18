import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import reducer from "../reducers/reducer"
import {watcherSaga} from "../sagas/saga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(watcherSaga)

export default store