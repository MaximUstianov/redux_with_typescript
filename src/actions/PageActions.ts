export const GET_ID = 'GET_ID'

export const getPostById = async (id: any) => {
    const myResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const myJson = await myResponse.json();
    const post = myJson.body
    return (dispatch: any) => {
        dispatch({type: GET_ID, payload: post});
    }
}