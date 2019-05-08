export const fetchPalettes = async (url) => {
  try {
    const response = await fetch(url)
    if(!response.ok) { throw new Error('Fetch Call Cannot Be Made')}
    const data = await response.json()
    return data;
  } catch (error) {
    console.log(error);
    // this.props.setError('Fetch Call Cannont')
  }
}
