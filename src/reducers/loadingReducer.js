export const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case 'SET_LOADING':
    console.log('loading');
      return action.loading
    default:
      return state
  }
}
