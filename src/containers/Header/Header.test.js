import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { generateColors } from '../../utility/generateColors';
jest.mock('../../utility/generateColors');
import * as actions from '../../actions';

const mockCurrentPalette = [
  { color: '#fffff', locked: false },
  { color: '#00000', locked: false },
  { color: '#231f20', locked: false },
  { color: '#e6e6e6', locked: false },
  { color: '#cccccc', locked: false }
];

describe('Header', () => {

  describe('Header Component', () => {
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

    it('should handleGenerate when clicked and call setPalette', async () => {
      generateColors.mockReturnValue(mockCurrentPalette);
      const button = wrapper.find('.generateBtn');
      button.simulate('click');
      actions.setPalette(mockCurrentPalette);
      expect(mockSetPalette).toHaveBeenCalledWith(mockCurrentPalette);
    });

    it('should setModal when saveButton is clicked', () => {
      const button = wrapper.find('.saveBtn');
      button.simulate('click');
      actions.setModal(mockModal);
      expect(mockSetModal).toHaveBeenCalledWith(mockModal);
    });

  });

  describe('mapStateToProps', () => {
    it('should return an object with currentPalettes', () => {
      const mockState = {
        currentPalette: ['#FFFFFF, #0000000'],
        modal: false
      };
      const expectedState = {
        currentPalette: ['#FFFFFF, #0000000']
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch for setPalette', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.setPalette(mockCurrentPalette);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setPalette(mockCurrentPalette);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch for setModal', () => {
      const mockDispatch = jest.fn();
      const mockStatus = false;
      const actionToDispatch = actions.setModal(mockStatus);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setModal(mockStatus);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

  })

});
