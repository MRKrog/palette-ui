import * as actions from './index'

describe('actions', () => {

  it('should have a type of SET_ERROR', () => {
    const error = 'Bad Fetch Call';
    const expectedAction = {
      type: "SET_ERROR",
      error
    }
    const result = actions.setError(error)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_LOADING', () => {
    const loading = true;
    const expectedAction = {
      type: "SET_LOADING",
      loading
    }
    const result = actions.setLoading(loading)
    expect(result).toEqual(expectedAction)
  })

})
