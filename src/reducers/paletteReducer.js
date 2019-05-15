export const paletteReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTE':
      return action.palette;
    case 'SET_LOCK':
      const colorPalette = state.map((color, index) => {
        if (index === action.colorID) {
          color.locked = !color.locked;
        }
        return color;
      })
      console.log('colorPalette', colorPalette);
      return colorPalette;
    default:
      return state;
  }
}
