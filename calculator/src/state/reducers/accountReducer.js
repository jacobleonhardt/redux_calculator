const reducer = (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + action.payload
    case "subtract":
      return state - action.payload
    case "multiply":
      return state * action.payload
    case "divide":
      return state / action.payload
    case "reset":
      return state = 0
    default:
      return state
  }
}

export default reducer;
