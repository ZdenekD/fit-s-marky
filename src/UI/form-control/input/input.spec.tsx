import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../__test__/utils/helpers';
import Input from '.';

describe('Input', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Input name="input" label="Input" />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-input');

        expect(component.exists()).toBe(true);
    });
});
