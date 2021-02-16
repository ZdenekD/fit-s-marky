import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import Header from '.';

describe('Header', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-header');

        expect(component.exists()).toBe(true);
    });
});
