import {factory} from '../../__test__/utils/helpers';
import Diploma from './diploma';

describe('Diploma page', () => {
    it('match snapshot', () => {
        const wrapper = factory(Diploma);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
