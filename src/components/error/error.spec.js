import {factory, findComponent} from '../../__test__/utils/helpers';
import Error from './index';

describe('Error', () => {
    it('render without error', () => {
        const text = 'No error';
        const defaultProps = {children: text};
        const wrapper = factory(Error, defaultProps);

        expect(wrapper.text().includes(text)).toBe(true);
    });

    it('render error component on throwing error', () => {
        const defaultProps = {children: ''};
        const wrapper = factory(Error, defaultProps);
        const error = new Error('error');

        wrapper.simulateError(error);

        const component = findComponent(wrapper, 'component-error');

        expect(component.length).toBe(1);
    });
});
