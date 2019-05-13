export const generateColors = (colorPalette) => {
  console.log(colorPalette);
  let newPalette = [];
  for(let i = 0; i < 5; i++) {
    const { color, locked } = colorPalette[i]
    if(colorPalette[i].locked) {
      newPalette.push({ color: color, locked: locked })
    } else {
      let randomColor = "#000000".replace( /0/g, function() { return (~~(Math.random()*16)).toString(16)});
      newPalette.push({ color: randomColor, locked: false })
    }
  }
  return newPalette;
}
