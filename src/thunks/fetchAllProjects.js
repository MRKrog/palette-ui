import * as actions from '../actions/index';
import { fetchData } from '../utility/fetchData';
import { cleanProjectsPalettes } from '../utility/cleaner';

export const fetchAllProjects = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.setLoading(true));
      const allProjects = await fetchData(process.env.REACT_APP_BACKEND_URL + '/api/v1/projects');
      const allPalettes = await fetchData(process.env.REACT_APP_BACKEND_URL + '/api/v1/palettes');
      dispatch(actions.setLoading(false));
      const combinedData = cleanProjectsPalettes(allProjects, allPalettes)
      dispatch(actions.setProjects(combinedData));
    } catch (error) {
      dispatch(actions.setError(error.message));
    }
  }
}
