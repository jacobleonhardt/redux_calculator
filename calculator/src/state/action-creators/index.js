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

export const multiplyAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "multiply",
      payload: amount,
    })
  }
}

export const divideAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "divide",
      payload: amount,
    })
  }
}

export const resetAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "reset",
      payload: amount,
    })
  }
}
