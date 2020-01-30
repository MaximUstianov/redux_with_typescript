import {GET_COLOR} from '../actions/PageActions'


const initialState = {
  background: "blue",
  /*customColors: [
    '#191970', '#00FF00'
  ]*/
}

export function pageReducer(state = initialState, action : any) {
  switch (action.type) {
    case GET_COLOR:
      return {...state, background: action.payload };
    default:
      return state
  }
}
