import { fetchOptions } from '../fetchOptions';

describe('fetchOptions', () => {
  let mockReturnData;
  let mockType;
  let mockBody;

  beforeEach(() => {
    mockType = 'POST';
    mockBody = { color1: '#FFFFFF' };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockReturnData),
        ok: true
      })
    );
  });

  it('should call fetch with the correct parameters', async () => {
    const result = await fetchOptions(mockType, mockBody);
    const expected = {
      method: mockType,
      body: JSON.stringify(mockBody),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    expect(result).toEqual(expected);
  });

});