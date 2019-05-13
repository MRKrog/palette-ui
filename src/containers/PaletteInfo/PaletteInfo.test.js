import React from 'react';
import { shallow } from 'enzyme'
import { PaletteInfo, mapDispatchToProps } from './PaletteInfo';

import * as actions from '../../actions/index';

import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { fetchDelete } from '../../thunks/fetchDelete';
jest.mock('../../thunks/fetchAllProjects');
jest.mock('../../thunks/fetchDelete');

const mockPalette = {
  id: 15,
  name: "Mikes Pal",
  color_1: "#93125a",
  color_2: "#ffffff",
  color_3: "#f13470",
  color_4: "#80064e",
  color_5: "#423c52",
  project_id: 8,
}

describe('PaletteInfo', () => {

  describe('PaletteInfo Component', () => {
    let wrapper;
    let mockfetchAllProjects = jest.fn()
    let mockSetModal = jest.fn()


    beforeEach(() => {
      wrapper = shallow(<PaletteInfo fetchAllProjects={mockfetchAllProjects}
                                     setModal={mockSetModal}
                                     {...mockPalette}
                      />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  });


  describe('mapDispatchToProps', () => {
    it('should call dispatch for setPalette', () => {
      const mockData = []
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.setPalette(mockData)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setPalette(mockData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

  });

});
