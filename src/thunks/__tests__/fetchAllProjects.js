import { fetchAllProjects } from '../fetchAllProjects';
import * as actions from '../../actions';
import { cleanProjectsPalettes } from '../../utility/cleaner';
jest.mock('../../utility/cleaner');
import { fetchData } from '../../utility/fetchData';
jest.mock('../../utility/fetchData');


describe('fetchAllProjects', () => {
  let mockDispatch;
  let mockData;
  let mockUrl;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockData = ['colors'];
    mockUrl = 'www.someurl.com';
    cleanProjectsPalettes.mockReturnValue(['colors', 'moreColors']);
  });

  it('calls fetch', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockData
      })
    }));
    const thunk = fetchAllProjects(mockUrl);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalled();
  });

  it('calls dispatch with setLoading', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockData
      })
    }));
    const thunk = fetchAllProjects(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });

  it('should dispatch setLoading to false', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockData
      })
    }));
    const thunk = fetchAllProjects(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });

  it('should dispatch setProjects with combinedData', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockData
      })
    }));
    const thunk = fetchAllProjects(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setProjects(['colors', 'moreColors']));
  });

  it('should dispatch setError with the message if the response is not ok', async () => {
    fetchData.mockImplementationOnce(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }));
    const thunk = fetchAllProjects(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Something went wrong'));
  });
});
