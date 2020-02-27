import {factory, findComponent} from '../../__test__/utils/helpers';
import GalleryContent from './gallery-content';

describe('Gallery content', () => {
    it('renders without error', () => {
        const wrapper = factory(GalleryContent);
        const component = findComponent(wrapper, 'component-content');

        expect(component.exists()).toBe(true);
    });
});
