import React from 'react';
import { shallow, mount } from 'enzyme'
import { Color, mapDispatchToProps } from './Color';

import * as actions from '../../actions/index';

describe('Color', () => {

  describe('Color Component', () => {
    let wrapper;
    let mockSetLock = jest.fn();

    beforeEach(() => {
      wrapper = shallow(<Color setLock={mockSetLock} />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it('should setLock when handleLock is invoked', () => {
      const mockId = 1;
      wrapper.instance().handleLock(mockId);
      expect(mockSetLock).toHaveBeenCalledWith(mockId);
    });

    it('should invoke handleLock when button is clicked', () => {
      wrapper.instance().handleLock = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.update();
      wrapper.find('.handleLockClick').simulate('click');
      expect(wrapper.instance().handleLock).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch for fetchAllProjects', () => {
      //Setup
      const mockData = true;
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.setLock(mockData)
      //Execution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setLock(mockData);
      //Expectation
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

  });

});
