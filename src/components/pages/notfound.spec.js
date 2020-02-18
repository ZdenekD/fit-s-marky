import {factory} from '../../__test__/utils/helpers';
import Notfound from './notfound';

describe('Notfound page', () => {
    it('match snapshot', () => {
        const wrapper = factory(Notfound);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
