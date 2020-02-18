import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {factory} from '../../__test__/utils/helpers';
import Gallery from './gallery';

describe('Gallery page', () => {
    it('match snapshot', () => {
        const component = () => (
            <MemoryRouter initialEntries={['/']}>
                <Gallery />
            </MemoryRouter>
        );
        const wrapper = factory(component);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
