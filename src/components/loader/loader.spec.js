import {factory, findComponent} from '../../__test__/utils/helpers';
import Loader from './index';

describe('Loader', () => {
    it('renders without error', () => {
        const wrapper = factory(Loader);
        const component = findComponent(wrapper, 'component-loader');

        expect(component.length).toBe(1);
    });
});
