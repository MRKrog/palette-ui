export const paletteReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTE':
      console.log('statePalette', action.palette);
      return action.palette
    case 'SET_LOCK':
      console.log(action.colorID);
      console.log('stateLock', state);
      break;
    default:
      return state
  }
}
