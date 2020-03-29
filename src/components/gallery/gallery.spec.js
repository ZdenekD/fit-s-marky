import React from 'react';
import {factory, findComponent} from '../../__test__/utils/helpers';
import Gallery from './index';
import data from '../../data/gallery.json';

describe('Gallery', () => {
    const mockSetModalOpen = jest.fn();
    const {id} = data.galleries[0];
    const title = 'Title';
    const defaultProps = {id, title};
    let wrapper;

    beforeEach(() => {
        mockSetModalOpen.mockClear();

        React.useState = jest.fn(() => [false, mockSetModalOpen]);

        wrapper = factory(Gallery, defaultProps);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-gallery');

        expect(component.exists()).toBe(true);
    });

    it('show props title', () => {
        const component = findComponent(wrapper, 'component-heading');

        expect(component.text().includes(title)).toBe(true);
    });

    it('handle modal open state', () => {
        const component = findComponent(wrapper, 'component-button').at(0);

        component.simulate('click');

        expect(mockSetModalOpen).toHaveBeenCalledWith(true);
    });
});
