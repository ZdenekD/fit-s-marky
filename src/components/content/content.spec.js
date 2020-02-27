import React from 'react';
import {mount} from 'enzyme';
import {factory, findComponent} from '../../__test__/utils/helpers';
import Content from './index';

const mockSetMount = jest.fn();
const setup = () => {
    mockSetMount.mockClear();

    React.useState = jest.fn(() => [false, mockSetMount]);

    return mount(<Content content='' />);
};

describe('Content', () => {
    const defaultProps = {content: 'Content'};
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Content, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-content');

        expect(component.exists()).toBe(true);
    });

    it('set mount state on component load', () => {
        setup();

        expect(mockSetMount).toHaveBeenCalledWith(true);
    });
});
