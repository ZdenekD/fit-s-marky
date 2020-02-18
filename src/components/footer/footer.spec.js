import {factory, findComponent} from '../../__test__/utils/helpers';
import Footer from './index';

describe('Footer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Footer);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-footer');

        expect(component.length).toBe(1);
    });
});
