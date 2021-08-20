import { useReducer } from 'react'

const INITIAL_STATE = {
  result: ''
}

const calcReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUM':
    case 'SUB':
      return { ...state, result: action.payload }
    default:
      return state
  }
}

const useStore = () => useReducer(calcReducer, INITIAL_STATE)
export default useStore