import {factory, findComponent} from '../../__test__/utils/helpers';
import Image from './index';

describe('Image', () => {
    const defaultProps = {name: 'image'};

    it('renders without error', () => {
        const wrapper = factory(Image, defaultProps);
        const component = findComponent(wrapper, 'component-picture');

        expect(component.length).toBe(1);
    });
});
