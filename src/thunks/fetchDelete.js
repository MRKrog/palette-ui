import * as actions from '../actions/index';
import { fetchData } from '../utility/fetchData';
import { fetchOptions } from '../utility/fetchOptions';

export const fetchDelete = (url) => {
  return async (dispatch) => {
    try {
      dispatch(actions.setLoading(true));
      const options = await fetchOptions('DELETE', {});
      const response = await fetchData(url, options);
      if(!response.ok){
        throw Error(response.statusText)
      }
      dispatch(actions.setLoading(false));
    } catch (error) {
      dispatch(actions.setError(error.message));
    }
  }
}
