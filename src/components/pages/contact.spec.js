import {factory} from '../../__test__/utils/helpers';
import Contact from './contact';

describe('Contact page', () => {
    it('match snapshot', () => {
        const wrapper = factory(Contact);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
