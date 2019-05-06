import React from 'react';
import { shallow } from 'enzyme';
import { PaletteDisplay, mapStateToProps, mapDispatchToProps } from './PaletteDisplay';

describe('PaletteDisplay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PaletteDisplay />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
