import {GET_COLOR} from '../actions/PageActions'

const initialState = {
  isClicked: false,
  background: "blue"
}

export function pageReducer(state = initialState, action : any) {
  switch (action.type) {
    case GET_COLOR:
      return {...state, background: "red", isClicked: !state.isClicked};
    default:
      return state
  }
}
