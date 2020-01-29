import {GET_COLOR} from '../actions/PageActions'
import {Color} from "../store/types";

const initialState = {
  background: "blue"
}

export function pageReducer(state = initialState, action : Color) {
  switch (action.type) {
    case GET_COLOR:
      return {...state, background: "red"};
    default:
      return state
  }
}
