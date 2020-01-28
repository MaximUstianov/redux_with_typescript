export const GET_COLOR = 'GET_COLOR'

export function getColor() {
  return (dispatch: any) => {
    dispatch({
      type: GET_COLOR,
    })
  }
}

