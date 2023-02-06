const initialState = [{
    id: 0,
    updated_at: '',
    created_at: '',
    path: '',
    likes: 0
}]

export const likesReducer = (state = initialState, action: {type: string, payload: any}) => {

    switch (action.type) {
      case 'SET_LIKES':
        return action.payload

      default:
        return state
    }
  }