import { takeLatest, put, call } from "redux-saga/effects"

import { dis } from "./actions"

import { fetchData } from "../src/api/api"

function* getData(action) {
    const data = yield call(fetchData)
    yield put(dis(data.data))
}

export function* watcherSaga() {
    yield takeLatest("RES", getData)
} 