export const modalReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_MODAL':
      return !action.status
    default:
      return state
  }
}
