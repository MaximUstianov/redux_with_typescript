import {ThunkDispatch} from "redux-thunk";

export const GET_ID = 'GET_ID'

export interface IId {
    type: typeof GET_ID;
}

export const getPostById = async (id: any) => {
    const myResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const myJson = await myResponse.json();
    const post = myJson.body
    return (dispatch: ThunkDispatch<any, any, IId>) => {
        dispatch({type: GET_ID, payload: post});
    }
}