import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import List from '.';

describe('List', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<List isAnimated={false} />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-list');

        expect(component.exists()).toBe(true);
    });
})
