export const setError = (error) => ({
  type: "SET_ERROR",
  error
})

export const setLoading = (loading) => ({
  type: "SET_LOADING",
  loading
})

export const setPalette = (palette) => ({
  type: "SET_PALETTE",
  palette
})

export const setLock = (colorID) => ({
  type: "SET_LOCK",
  colorID
})
