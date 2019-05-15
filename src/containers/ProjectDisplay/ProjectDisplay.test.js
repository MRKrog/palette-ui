import React from 'react';
import { shallow } from 'enzyme'
// import { createShallow } from '@material-ui/core/test-utils';
import ProjectDisplay from './index';

// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


describe('<SwipeableTemporaryDrawer />', () => {
  let wrapper;
  let swipe;

  beforeEach(() => {
    wrapper = shallow(<ProjectDisplay />)
  });

  it('should render a styled CircularProgress', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should have default state', () => {

    expect(wrapper.state()).toEqual({
      bottom: false,
    });

  });

  it('should have default state', () => {
    const button = wrapper.find('.ProjectBtn');
    button.simulate('click');

    wrapper.instance().toggleDrawer('bottom', true)

    expect(wrapper.state()).toEqual({
      bottom: true,
    });

  });

});
