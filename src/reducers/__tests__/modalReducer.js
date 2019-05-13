import { modalReducer } from '../modalReducer';
import * as actions from '../../actions';

describe('modalReducer', () => {
  it('should return initial state', () => {
    const expected = false;
    const result = modalReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set modal to opposite status', () => {
    const action = actions.setModal(true)
    const expected = false;
    const result = modalReducer(true, action)
    expect(result).toEqual(expected);
  });
});