import {GET_COLOR} from '../actions/PageActions'
import {GET_ID} from '../actions/PageActions'


const initialState = {
    background: "blue",
    IWantToRedux: "hello"
}

export function pageReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_COLOR:
            return {...state, background: action.payload};
        case GET_ID:
            return {...state, IWantToRedux: action.payload};
        default:
            return state
    }
}
