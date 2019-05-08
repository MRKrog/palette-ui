export const fetchPalettes = async () => {
  console.log('in fetchPalettes file');
  try {
    const response = await fetch(`http://localhost:3001/api/v1/project/first`)
    if(!response.ok) { throw new Error('Fetch Call Cannot Be Made')}
    const data = await response.json()
    console.log('data', data);
    this.setState({ data })
    this.props.setLoading(false)
  } catch (error) {
    this.props.setError('Fetch Call Cannont')
  }
}
