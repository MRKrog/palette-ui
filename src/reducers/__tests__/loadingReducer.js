import { loadingReducer } from '../loadingReducer'

describe('loadingReducer', () => {

  it('should return the initial state', () => {
    const expected = true
    const result = loadingReducer(undefined, {})
    expect(result).toEqual(expected)
  })

 it('should handle SET_LOADING', () => {
   const mockAction = {
     type: 'SET_LOADING',
     loading: false
   }
   const expected = false;
   const result = loadingReducer(true, mockAction)
   expect(result).toEqual(expected)
 })

})
