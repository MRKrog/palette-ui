export const generateColors = (colorPalette) => {
  let newPalette = []
  console.log('colorPalette', colorPalette);
  for(let i = 0; i < 5; i++) {
    console.log(colorPalette[i]);
    if(false) {
      let lockedColor = '#000000'
      newPalette.push(lockedColor)
    } else {
      let randomColor = "#000000".replace( /0/g, function() { return (~~(Math.random()*16)).toString(16)});
      newPalette.push(randomColor)
    }
  }

  return newPalette;
}
