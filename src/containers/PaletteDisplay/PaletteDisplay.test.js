import React from 'react';
import { shallow } from 'enzyme'
import { PaletteDisplay, mapStateToProps } from './index';

const mockCurrentPalette = [
  { color: '#fffff', locked: false },
  { color: '#00000', locked: false },
  { color: '#231f20', locked: false },
  { color: '#e6e6e6', locked: false },
  { color: '#cccccc', locked: false }
]


describe('PaletteDisplay', () => {

  describe('PaletteDisplay Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<PaletteDisplay currentPalette={mockCurrentPalette} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  });

  describe('mapStateToProps', () => {
    it('should return an object with a modalDisplay value', () => {
      const mockState = {
        currentPalette: mockCurrentPalette,
        fakeState: 'Fake String',
      }
      const expected = {
        currentPalette: mockCurrentPalette,
      }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

});
