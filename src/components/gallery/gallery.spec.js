import {factory, findComponent} from '../../__test__/utils/helpers';
import Gallery from './index';

describe('Gallery', () => {
    it('renders without error', () => {
        const wrapper = factory(Gallery);
        const component = findComponent(wrapper, 'component-gallery');

        expect(component.exists()).toBe(true);
    });
});
