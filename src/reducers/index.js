import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { paletteReducer } from './paletteReducer';
import { modalReducer } from './modalReducer';
import { projectReducer } from './projectReducer';

export const rootReducer = combineReducers({
  allProjects: projectReducer,
  currentPalette: paletteReducer,
  modalDisplay: modalReducer,
  loading: loadingReducer,
  error: errorReducer,
})
