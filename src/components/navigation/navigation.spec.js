import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {factory, findComponent} from '../../__test__/utils/helpers';
import Navigation from './index';

describe('Navigation', () => {
    it('match snapshot', () => {
        const component = () => (
            <MemoryRouter initialEntries={['/']}>
                <Navigation />
            </MemoryRouter>
        );
        const wrapper = factory(component);

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renderes without error', () => {
        const wrapper = factory(Navigation);
        const component = findComponent(wrapper, 'component-navigation');

        expect(component.length).toBe(1);
    });
});
