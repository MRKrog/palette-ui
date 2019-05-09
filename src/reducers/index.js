import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { paletteReducer } from './paletteReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  modalDisplay: modalReducer,
  currentPalette: paletteReducer,
  loading: loadingReducer,
  error: errorReducer,
})
