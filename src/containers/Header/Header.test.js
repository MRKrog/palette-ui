import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

const mockCurrentPalette = [
  { color: '#fffff', locked: false },
  { color: '#00000', locked: false },
  { color: '#231f20', locked: false },
  { color: '#e6e6e6', locked: false },
  { color: '#cccccc', locked: false }
];

describe('Header', () => {
  let wrapper;
  let mockSetModal = jest.fn();
  let mockSetPalette = jest.fn();
  let mockModal = false;

  beforeEach(() => {
    wrapper = shallow(
      <Header currentPalette={mockCurrentPalette} setModal={mockSetModal} setPalette={mockSetPalette} modal={mockModal} />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
