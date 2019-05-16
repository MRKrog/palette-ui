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
    let mockSetPalette = jest.fn()
    let mockFetchDelete = jest.fn();


    beforeEach(() => {
      wrapper = shallow(<PaletteInfo fetchAllProjects={mockfetchAllProjects}
                                     setPalette={mockSetPalette}
                                     fetchDelete={mockFetchDelete}
                                     color_1="#93125a"
                                     color_2="#ffffff"
                                     color_3="#f13470"
                                     color_4="#80064e"
                                     color_5="#423c52"
                                     id={15}
                                     project_id={8}
                      />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call handleGenerate when ShowButton is clicked', () => {
      wrapper.instance().handleGenerate = jest.fn()
      wrapper.instance().forceUpdate()
      wrapper.update()
      wrapper.find('.ShowBtn').simulate('click')
      expect(wrapper.instance().handleGenerate).toHaveBeenCalled()
    });

    it('should call setPalette when handleGenerate is invoked with mockPalette', () => {
      const instance = wrapper.instance();
      const mockCurrentPalette = [
        { color: mockPalette.color_1, locked: true },
        { color: mockPalette.color_2, locked: true },
        { color: mockPalette.color_3, locked: true },
        { color: mockPalette.color_4, locked: true },
        { color: mockPalette.color_5, locked: true }
      ]
      instance.handleGenerate();
      expect(mockSetPalette).toHaveBeenCalledWith(mockCurrentPalette);
    });

    it('should call fetchAllProjects when handleDelete is invoked with id', async () => {
      const instance = wrapper.instance();
      const mockId = 8;
      await instance.handleDelete(mockId);
      expect(mockfetchAllProjects).toHaveBeenCalled();
    });

    it('should call handleDelete on click with the correct id passed in', () => {
      const mockId = 15;
      const instance = wrapper.instance();
      const spy = jest.spyOn(instance, 'handleDelete');
      const button = wrapper.find('.DeleteBtn');
      button.simulate('click', mockId);
      expect(spy).toHaveBeenCalledWith(mockId);
    });

    it('should call fetchDelete when handDelete is invoked', async () => {
      const instance = wrapper.instance();
      const mockId = 15;
      await instance.handleDelete(mockId);
      expect(mockFetchDelete).toHaveBeenCalled();
    });

    it('should call fetchAllProjects when handDelete is invoked', async () => {
      const instance = wrapper.instance();
      const mockId = 15;
      await instance.handleDelete(mockId);
      expect(mockfetchAllProjects).toHaveBeenCalled();
    });

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

    it('should call dispatch for fetchAllProjects', () => {
      const mockData = []
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchAllProjects(mockData)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchAllProjects(mockData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch for fetchDelete', () => {
      const mockData = []
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchDelete(mockData)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchDelete(mockData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

  });

});
