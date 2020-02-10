export const GET_ID = 'GET_ID'
export const CHANGE_POST = 'CHANGE_POST'

// export const proofDocument = (document: UEditDocument, sessionId: string) => async (dispatch: any) => {
export const getPostById = (id: any) => async (dispatch: any) => {
    const myResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const myJson = await myResponse.json();
    const post = myJson.body;
    dispatch(ChangePost(post));
}

export const ChangePost = (postData: any) => {
    return {
        type: CHANGE_POST,
        payload: postData
    };
}