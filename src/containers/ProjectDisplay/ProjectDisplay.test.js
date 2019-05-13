import React from 'react';
import { shallow } from 'enzyme'
import SwipeableTemporaryDrawer from './index';

describe('SwipeableTemporaryDrawer', () => {

  describe('SwipeableTemporaryDrawer Component', () => {
    let wrapper;
    let mockSetLock = jest.fn()

    beforeEach(() => {
      wrapper = shallow(<SwipeableTemporaryDrawer/>)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  });

});
