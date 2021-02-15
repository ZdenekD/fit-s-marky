import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import Nav from '.';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({pathname: '/'}))}));
jest.mock('framer-motion', () => {
    const motion = {
        nav: jest.fn().mockImplementation(({children}) => (
            <nav className="nav" data-test="component-nav">{children}</nav>
        )),
        ul: jest.fn().mockImplementation(({children}) => (
            <ul className="list">{children}</ul>
        )),
        li: jest.fn().mockImplementation(({children}) => (
            <li className="item ">{children}</li>
        )),
    };

    return {motion};
});

describe('Nav', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        React.useState = jest.fn(() => [true, jest.fn()]);

        wrapper = shallow(<Nav />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-nav');

        expect(component.exists()).toBe(true);
    });
});
