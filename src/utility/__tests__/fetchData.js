import { fetchData } from '../fetchData';

describe('fetchData', () => {
  let mockBody;
  let mockProjects;
  let mockPalettes;
  let url;

  beforeEach(() => {
    url = "localhost:3001/api/v1/projects";
    mockProjects = [
      { id: 8, name: "Project One" },
      { id: 13, name: "Project Two" }
    ]

    mockBody = {
      method: 'GET',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockProjects)
    }));
  });

  it('should take an expected url', async () => {
    await fetchData(url, mockBody);
    expect(fetch).toHaveBeenCalledWith(url, mockBody);
  });

  it('should return expected data', async () => {
    const result = await fetchData(url, mockBody);
    expect(result).toEqual(mockProjects);
  });

  it('should throw an error if response is not okay', async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        status: 422,
        ok: false,
        json: jest.fn(() => Promise.resolve('Fetch Call Cannot Be Made'))
      })
    );
    const expected = new Error('Fetch Call Cannot Be Made');
    const result = await fetchData(url, mockBody);
    expect(result).toEqual(expected);
  });

});
