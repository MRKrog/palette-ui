import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { paletteReducer } from './paletteReducer';

export const rootReducer = combineReducers({
  currentPalette: paletteReducer,
  loading: loadingReducer,
  error: errorReducer,
})
