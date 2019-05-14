import * as actions from '../index';

describe('actions', () => {
  describe('setLoading', () => {
    it('should have a type of SET_ERROR', () => {
      const error = 'Bad Fetch Call';
      const expectedAction = {
        type: "SET_ERROR",
        error
      }
      const result = actions.setError(error)
      expect(result).toEqual(expectedAction)
    });
  });

  describe('setLoading', () => {
    it('should return an object with setLoading and loading is true', () => {
      const expected = { type: 'SET_LOADING', loading: true };
      const results = actions.setLoading(true);
      expect(results).toEqual(expected);
    });

    it('should return an object with setLoading and loading is false', () => {
      const expected = { type: 'SET_LOADING', loading: false };
      const results = actions.setLoading(false);
      expect(results).toEqual(expected);
    });
  });

  describe('setPalette', () => {
    it('should return a type of SET_PALETTE with the palette colors', () => {
      const palette = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
      const expectedAction = {
        type: 'SET_PALETTE',
        palette
      }
      const result = actions.setPalette(palette);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('setLock', () => {
    it('should return a type of SET_LOCK with the colorID', () => {
      const colorID = 1;
      const expectedAction = {
        type: 'SET_LOCK',
        colorID
      }
      const result = actions.setLock(colorID);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('setModal', () => {
    it('should return a type of SET_MODAL with the status', () => {
      const status = false;
      const expectedAction = {
        type: 'SET_MODAL',
        status
      }
      const result = actions.setModal(status);
      expect(result).toEqual(expectedAction);
    });
  });

})
