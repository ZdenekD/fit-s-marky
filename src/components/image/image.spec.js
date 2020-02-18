import {factory, findComponent} from '../../__test__/utils/helpers';
import Image from './index';

describe('Image', () => {
    const defaultProps = {name: 'image'};
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Image, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-picture');

        expect(component.length).toBe(1);
    });
});
