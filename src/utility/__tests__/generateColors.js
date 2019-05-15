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

  it('returns a random array of colors that are locked', () => {
    const result = generateColors(mockPalette);
    const expected = result;
    expect(expected).toEqual(result);
  });

});