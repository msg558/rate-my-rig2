import {call, put} from "redux-saga/effects"
import { requestGetLikes, requestAddLikes, requestAddRig, requestDeleteRig } from "./requests"

export function* handleGetLikes(action: any): Generator {
    try {
        const response: any = yield call(requestGetLikes)
        yield put({type: 'SET_LIKES', payload: response})
    }
    catch (error) {
        console.log(error)
    }
}


export function* handleAddLikes(action: any): Generator {
    try {
        const response: any = yield call(()=>requestAddLikes(action.payload))
        yield put({type: 'SET_LIKES', payload: response})
    }
    catch (error) {
        console.log(error)
    }
}

export function* handleAddRig(action: any): Generator {
    try {
        const response: any = yield call(()=>requestAddRig(action.payload))
        yield put({type: 'SET_LIKES', payload: response})
    }
    catch (error) {
        console.log(error)
    }
}

export function* handleDeleteRig(action: any): Generator {
    try {
        const response: any = yield call(()=>requestDeleteRig(action.payload))
        yield put({type: 'SET_LIKES', payload: response})
    }
    catch (error) {
        console.log(error)
    }
}