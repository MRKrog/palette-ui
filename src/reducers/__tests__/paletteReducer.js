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

  it('should setLock when reducer is called', () => {
    let mockColorPalette = [
      { color: '#74d9e5', locked: false },
      { color: '#d93320', locked: false },
      { color: '#c9b512', locked: false },
      { color: '#f436ff', locked: false },
      { color: '#a2e0e2', locked: false }
    ];
    const mockId = 2;
    const action = actions.setLock(mockId);
    const expected = [
      { color: '#74d9e5', locked: false },
      { color: '#d93320', locked: false },
      { color: '#c9b512', locked: true },
      { color: '#f436ff', locked: false },
      { color: '#a2e0e2', locked: false }
    ];
    const result = paletteReducer(mockColorPalette, action);
    expect(result).toEqual(expected);

  });

});
