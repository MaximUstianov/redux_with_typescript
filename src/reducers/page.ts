import {GET_COLOR} from '../actions/PageActions'


const initialState = {
  background: "blue"
}

export function pageReducer(state = initialState, action : any) {
  switch (action.type) {
    case GET_COLOR:
      return {...state, background: action.payload};
    default:
      return state
  }
}
