import { combineReducers } from "@reduxjs/toolkit"

const initialState = [{
    id: 0,
    updated_at: '',
    created_at: '',
    path: '1',
    likes: 0,
    longitude: 1,
    latitude: 1,
    crew_size: 1,
    num_wells_drilled: 1
}]



const likesReducer = (state = initialState, action: {type: string, payload: any}) => {

    switch (action.type) {
      case 'SET_LIKES':
        return action.payload

      default:
        return state
    }
  }

const loginReducer = (state = false, action: {type: string, payload: any}) => {

    switch (action.type) {
      case 'LOGIN':
        if (action.payload.password==='password1'){
          console.log('LOGGED IN')
          localStorage.setItem('loggedIn', '1')
          return false
        }
        else {
          console.log('LOGIN FAILED')
          localStorage.setItem('loggedIn', '0')
          return false
        }

      default:
        return state
    }
  }



  export const rootReducer = combineReducers({Likes: likesReducer, Login: loginReducer})