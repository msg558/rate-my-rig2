import { takeLatest, takeEvery} from "redux-saga/effects"
import { handleGetLikes, handleAddLikes } from "./handlers"


export function* watcherSaga() {
    yield takeLatest('GET_LIKES', handleGetLikes)
    yield takeEvery('ADD_LIKES', handleAddLikes)
}

