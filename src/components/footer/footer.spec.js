import {factory, findComponent} from '../../__test__/utils/helpers';
import Footer from './index';

describe('Footer', () => {
    it('renders without error', () => {
        const wrapper = factory(Footer);
        const component = findComponent(wrapper, 'component-footer');

        expect(component.length).toBe(1);
    });
});
