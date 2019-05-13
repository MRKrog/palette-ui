import { fetchAllProjects } from '../fetchAllProjects';
import * as actions from '../../actions';

describe('fetchAllProjects', () => {
  let mockDispatch;
  let mockData;
  let mockUrl;
  let thunk;
  beforeEach(() => {
    mockDispatch = jest.fn();
    mockData = ['colors'];
    mockUrl = 'www.someurl.com';
    thunk = fetchAllProjects(mockUrl);
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockData
      })
    }));
  });

  it('calls fetch', () => {
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('calls dispatch with setLoading', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });

  it('should dispatch setLoading to false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });

  it.skip('should dispatch setError with the message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Something went wrong'
      })
    );
    thunk(mockDispatch);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Something went wrong'));
  });
});
