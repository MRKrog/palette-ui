import React from 'react';
import { shallow } from 'enzyme'
import { ProjectInfo, mapDispatchToProps } from './ProjectInfo';

import * as actions from '../../actions/index';

import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { fetchDelete } from '../../thunks/fetchDelete';

jest.mock('../../thunks/fetchAllProjects');
jest.mock('../../thunks/fetchDelete');

const mockPalettes = [
  {
    id: 15,
    name: "Mikes Pal",
    color_1: "#93125a",
    color_2: "#ffffff",
    color_3: "#f13470",
    color_4: "#80064e",
    color_5: "#423c52",
    project_id: 8,
  }
]

describe('ProjectInfo', () => {

  describe('ProjectInfo Component', () => {
    let wrapper;
    let mockfetchAllProjects = jest.fn()
    let mockFetchDelete = jest.fn()
    let mockId = 8;
    let mockName = 'Test Project Title';

    beforeEach(() => {
      wrapper = shallow(<ProjectInfo palettes={mockPalettes}
                                     fetchDelete={mockFetchDelete}
                                     fetchAllProjects={mockfetchAllProjects}
                                     id={mockId}
                                     name={mockName}
                        />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch for fetchDelete', () => {
      const mockData = []
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchDelete(mockData)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchDelete(mockData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch for fetchAllProjects', () => {
      const mockData = []
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchAllProjects(mockData)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchAllProjects(mockData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

  });

});
