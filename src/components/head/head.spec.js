import {factory, findComponent} from '../../__test__/utils/helpers';
import Head from './index';

describe('Head', () => {
    const defaultProps = {title: 'Title'};

    it('renders without error', () => {
        const wrapper = factory(Head);
        const component = findComponent(wrapper, 'component-title');

        expect(component.length).toBe(1);
    });

    it('renders title', () => {
        const wrapper = factory(Head, defaultProps);
        const component = findComponent(wrapper, 'component-title');
        const {title} = defaultProps;

        expect(component.text().includes(title)).toBe(true);
    });
});
