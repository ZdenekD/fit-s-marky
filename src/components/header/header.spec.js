import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {mount} from 'enzyme';
import {findComponent} from '../../__test__/utils/helpers';
import Header from './index';

describe('Header', () => {
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
