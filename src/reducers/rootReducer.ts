const initialState = {
    value: 0
}

export const rootReducer = (state = initialState, action: {type: string}) => {
    // Reducers usually look at the type of action that happened
    // to decide how to update the state
    switch (action.type) {
      case 'counter/incremented':
        return { ...state, value: state.value + 1 }
      case 'counter/decremented':
        return { ...state, value: state.value - 1 }
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }