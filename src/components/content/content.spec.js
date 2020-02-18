import {factory, findComponent} from '../../__test__/utils/helpers';
import Content from './index';

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

        expect(component.length).toBe(1);
    });
});
