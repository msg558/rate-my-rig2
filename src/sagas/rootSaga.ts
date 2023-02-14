import { takeLatest, takeEvery} from "redux-saga/effects"
import { handleGetLikes, handleAddLikes, handleAddRig, handleDeleteRig } from "./handlers"


export function* watcherSaga() {
    yield takeLatest('GET_LIKES', handleGetLikes)
    yield takeEvery('ADD_LIKES', handleAddLikes)
    yield takeEvery('ADD_RIG', handleAddRig)
    yield takeLatest('DELETE_RIG', handleDeleteRig)
}

