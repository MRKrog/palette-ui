export const fetchData = async (url, body) => {
  try {
    const response = await fetch(url, body)
    const data = await response.json()
    if(!response.ok) { throw new Error(`'Fetch Call Cannot Be Made' ${data}`)}
    return data;
  } catch (error) {
    return error;
  }
}
