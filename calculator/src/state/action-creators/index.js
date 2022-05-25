export const addAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: amount,
    })
  }
}

export const subtractAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "subtract",
      payload: amount,
    })
  }
}
