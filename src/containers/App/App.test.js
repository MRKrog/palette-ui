import React from 'react';
import { shallow, mount } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from './index';

import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { generateColors } from '../../utility/generateColors';

jest.mock('../../thunks/fetchAllProjects');
jest.mock('../../utility/generateColors');

import * as actions from '../../actions/index';

const mockGeneratedPalette = [
  { color: '#fffff', locked: false },
  { color: '#00000', locked: false },
  { color: '#231f20', locked: false },
  { color: '#e6e6e6', locked: false },
  { color: '#cccccc', locked: false }
]

generateColors.mockReturnValue(mockGeneratedPalette)


describe('App', () => {

  describe('App Component', () => {
    let wrapper;
    let mockfetchAllProjects = jest.fn()
    let mockSetPalette = jest.fn()

    const mockColorPalette = [
      { color: '', locked: '' },
      { color: '', locked: '' },
      { color: '', locked: '' },
      { color: '', locked: '' },
      { color: '', locked: '' }
    ]

    beforeEach(() => {

      wrapper = shallow(<App fetchAllProjects={mockfetchAllProjects}
                             modalDisplay={false}
                             setPalette={mockSetPalette}
                             />
                        )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should fire handleEscape when handleKeydown is invoked with the code is Escape', () => {
      expect(wrapper.state()).toEqual({
        colorPalette: [
          { color: '', locked: '' },
          { color: '', locked: '' },
          { color: '', locked: '' },
          { color: '', locked: '' },
          { color: '', locked: '' }
        ]
      });
    })

    it("should invoke the method generatePalette on componentDidMount", () => {
      const instance = wrapper.instance()
      const spy = jest.spyOn(instance, 'generatePalette');

      instance.componentDidMount()

      expect(spy).toHaveBeenCalled()
    })

    it("should invoke the thunk fetchAllProjects on componentDidMount", () => {
      wrapper.instance().componentDidMount()
      expect(mockfetchAllProjects).toBeCalled()
    })

    it("should invoke setPalette with the random colors generated from generateColors method", () => {
      wrapper.instance().generatePalette()
      expect(mockSetPalette).toBeCalledWith(mockGeneratedPalette)
    })

    it("should match snapshot when modalDisplay is true", () => {
      wrapper.setProps({ modalDisplay: true })
      expect(wrapper).toMatchSnapshot()
    })

  });

  describe('mapStateToProps', () => {
    it('should return an object with a modalDisplay value', () => {
      const mockState = {
        modalDisplay: false,
        fakeState: '',
      }
      const expected = {
        modalDisplay: false,
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch for setPalette', () => {
      const mockData = [
        { color: '#fffff', locked: false },
        { color: '#00000', locked: false },
        { color: '#231f20', locked: false },
        { color: '#e6e6e6', locked: false },
        { color: '#cccccc', locked: false }
      ]
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.setPalette(mockData)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setPalette(mockData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

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
  });

});
