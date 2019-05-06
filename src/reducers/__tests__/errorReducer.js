import { errorReducer } from '../errorReducer'

describe('errorReducer', () => {

  it('should return the initial state', () => {
    const expected = ''
    const result = errorReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should handle SET_ERROR', () => {
    const error = "Bad Fetch Call"
    const mockAction = {
      type: "SET_ERROR",
      error
    }
    const expected = 'Bad Fetch Call';
    const result = errorReducer('', mockAction)
    expect(result).toEqual(expected)
  })

})
