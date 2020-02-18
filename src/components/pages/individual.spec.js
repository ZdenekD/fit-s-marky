import {factory} from '../../__test__/utils/helpers';
import Individual from './individual';

describe('Individual page', () => {
    it('match snapshot', () => {
        const wrapper = factory(Individual);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
