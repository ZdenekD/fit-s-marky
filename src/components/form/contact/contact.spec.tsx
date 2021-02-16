import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../__test__/utils/helpers';
import Contact from '.';

const handleSubmit = jest.fn();
const useForm = () => ({
    register: jest.fn(),
    errors: [],
    handleSubmit,
});

jest.mock('react-hook-form', () => ({useForm}));

describe('Contact form', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Contact />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-contact');

        expect(component.exists()).toBe(true);
    });

    it('renders loader if state is `disabled`', () => {
        React.useState = jest.fn(() => [true, jest.fn()]);

        const container = shallow(<Contact />);
        const component = findComponent(container, 'component-loader');

        expect(component.exists()).toBe(true);
    });

    it('run handleSubmit on form submit', () => {
        const component = findComponent(wrapper, 'component-contact');

        component.find('Button').simulate('submit');

        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});
