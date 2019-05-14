import { paletteReducer } from '../paletteReducer';
import * as actions from '../../actions';

describe('modalReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = paletteReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should set palette', () => {
    const mockPalette = ['color1', 'color2', 'color3', 'color4', 'color5'];
    const action = actions.setPalette(mockPalette);
    const expected = mockPalette;
    const result = paletteReducer('', action);
    expect(result).toEqual(expected);
  });

});
