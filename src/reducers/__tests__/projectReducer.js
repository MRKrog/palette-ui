import { projectReducer } from '../projectReducer';
import * as actions from '../../actions';

describe('projectReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = projectReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set projects to global state', () => {
    const projects = ['project 1', 'project 2'];
    const action = actions.setProjects(projects);
    const initialState = [];
    const expected = projects;
    const result = projectReducer(initialState, action);
    expect(result).toEqual(expected);
  })
});