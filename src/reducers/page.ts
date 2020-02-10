import {GET_ID, CHANGE_POST} from '../actions/PageActions'

const initialState = {
    post: "Click on article to read it"
}

export function pageReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_ID:
            return {...state, post: action.payload};
        case CHANGE_POST:
            return {...state, post: action.payload};
        default:
            return state
    }
}
