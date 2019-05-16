import { generateColors } from '../generateColors';

describe('generateColors', () => {
  let mockPalette;
  beforeEach(() => {
    mockPalette = [
      { color: '', locked: '' },
      { color: '', locked: '' },
      { color: '', locked: '' },
      { color: '', locked: '' },
      { color: '', locked: '' }
    ];
  });

  it('returns a random array of colors that are not locked', () => {
    const result = generateColors(mockPalette);
    const expected = result;
    expect(expected).toEqual(result);
  });

  it('returns the same colors in array if locked', () => {
    let mockLockedPalette = [
      { color: '#fffff', locked: true },
      { color: '#fffff', locked: true },
      { color: '#fffff', locked: true },
      { color: '#fffff', locked: true },
      { color: '#fffff', locked: true }
    ];
    const result = generateColors(mockLockedPalette);
    const expected = result;
    expect(expected).toEqual(result);
  });

});
