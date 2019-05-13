import * as actions from '../actions/index';
import { fetchData } from '../utility/fetchData';
import { cleanProjectsPalettes } from '../utility/cleaner';

export const fetchAllProjects = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.setLoading(true));
      const allProjects = await fetchData('http://localhost:3001/api/v1/projects');
      const allPalettes = await fetchData('http://localhost:3001/api/v1/palettes');
      console.log(allProjects);
      console.log(allPalettes);
      dispatch(actions.setLoading(false));
      const combinedData = cleanProjectsPalettes(allProjects, allPalettes)
      dispatch(actions.setProjects(combinedData));
    } catch (error) {
      dispatch(actions.setError(error.message));
    }
  }
}
