import React from 'react';
import { shallow } from 'enzyme'
import { Projects, mapStateToProps, mapDispatchToProps } from './Projects';

import { fetchAllProjects } from '../../thunks/fetchAllProjects';
jest.mock('../../thunks/fetchAllProjects');

import * as actions from '../../actions/index';

const mockAllProjects = [
  {
    id: 8,
    name: "Test Project",
    palettes: [
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
  }
]

describe('Projects', () => {

  describe('Projects Component', () => {
    let wrapper;
    let mockfetchAllProjects = jest.fn()
    let mockSetPalette = jest.fn()

    beforeEach(() => {
      wrapper = shallow(<Projects allProjects={mockAllProjects}
                                  fetchAllProjects={mockfetchAllProjects}
                                  setPalette={mockSetPalette}
                          />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have default state', () => {
      expect(wrapper.state()).toEqual({
        name: "",
      });
    })

  });

  describe('mapStateToProps', () => {
    it('should return an object with a modalDisplay value', () => {
      const mockState = {
        allProjects: mockAllProjects,
        fakeState: "Fake String",
      }
      const expected = {
        allProjects: mockAllProjects,
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch for fetchAllProjects', () => {
      //Setup
      const mockData = [
        { color: '#fffff', locked: false },
        { color: '#00000', locked: false },
        { color: '#231f20', locked: false },
        { color: '#e6e6e6', locked: false },
        { color: '#cccccc', locked: false }
      ];
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchAllProjects(mockData)
      //Execution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchAllProjects(mockData);
      //Expectation
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

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
