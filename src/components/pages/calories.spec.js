import {factory} from '../../__test__/utils/helpers';
import Calories from './calories';

describe('Calories page', () => {
    it('match snapshot', () => {
        const wrapper = factory(Calories);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
