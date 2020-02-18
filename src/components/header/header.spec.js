import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {mount} from 'enzyme';
import {factory, findComponent} from '../../__test__/utils/helpers';
import Header from './index';

describe('Header', () => {
    it('match snapshot', () => {
        const component = () => (
            <MemoryRouter initialEntries={['/']}>
                <Header />
            </MemoryRouter>
        );
        const wrapper = factory(component);

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <Header />
            </MemoryRouter>
        );
        const component = findComponent(wrapper, 'component-header');

        expect(component.length).toBe(1);
    });
});
