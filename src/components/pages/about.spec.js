import {factory} from '../../__test__/utils/helpers';
import About from './about';

describe('About page', () => {
    it('match snapshot', () => {
        const wrapper = factory(About);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
