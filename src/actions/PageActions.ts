export const GET_COLOR = 'GET_COLOR'
export const GET_ID = 'GET_ID'

export const getColor = (background: any) => ({
    type: GET_COLOR,
    payload: background,
});

export const getPostById = async (id: any) => {
    const myResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const myJson = await myResponse.json();
    const IWantToRedux = myJson.body
    return (dispatch: any) => {
        dispatch({type: GET_ID, payload: IWantToRedux});
    }
}