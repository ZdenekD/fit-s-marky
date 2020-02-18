import {factory} from '../../__test__/utils/helpers';
import Pricelist from './pricelist';

describe('Pricelist page', () => {
    it('match snapshot', () => {
        const wrapper = factory(Pricelist);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
