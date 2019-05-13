import { loadingReducer } from '../loadingReducer';
import * as actions from '../../actions';

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
  });

  it('should return a boolean to global state for loading', () => {
    const action = actions.setLoading(true);
    const initialState = '';
    const expected = true
    const result = loadingReducer(initialState, action);
    expect(result).toEqual(expected);
  });

})
