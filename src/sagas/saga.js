import { takeLatest, put, call } from "redux-saga/effects"

import { dis } from "../actions/actions"

import { fetchData } from "../api/api"

function* getData(action) {
    const data = yield call(fetchData)
    yield put(dis(data))
}

export function* watcherSaga() {
    yield takeLatest("RES", getData)
} 