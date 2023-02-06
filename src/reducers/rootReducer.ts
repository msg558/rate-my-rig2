const initialState = {
    value: 0
}

export const rootReducer = (state = initialState, action: {type: string}) => {

    switch (action.type) {
      case 'counter/incremented':
        return { ...state, value: state.value + 1 }
      case 'counter/decremented':
        return { ...state, value: state.value - 1 }
      default:

        return state
    }
  }