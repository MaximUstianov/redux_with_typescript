import {Color} from '../store/types'
import {Dispatch} from "redux";
import {AppState} from "../store/configureStore";

export const GET_COLOR = 'GET_COLOR'


export function getColor() {
    return (dispatch: Dispatch<Color>, getState: () => AppState) => {
        dispatch({
            type: GET_COLOR,
        })
    }
}

