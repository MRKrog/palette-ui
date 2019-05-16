import { fetchDelete } from '../fetchDelete';
import { fetchData } from '../../utility/fetchData';
jest.mock('../../utility/fetchData');
import * as actions from '../../actions';

describe('fetchAllProjects', () => {
  let mockDispatch;
  let mockData;
  let mockUrl;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockData = ['colors'];
    mockUrl = 'www.someurl.com';
  });

  it('calls dispatch with setLoading', async () => {
    fetchData.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            mockData
          })
      })
    );
    const thunk = fetchDelete(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });

  it('should dispatch setLoading to false', async () => {
    fetchData.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            mockData
          })
      })
    );
    const thunk = fetchDelete(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });

  it('should dispatch setError with the message if the response is not ok', async () => {
    fetchData.mockImplementation(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Something went wrong'
      })
    );
    const thunk = fetchDelete(mockUrl);
    thunk(mockDispatch);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Something went wrong'));
  });

});
