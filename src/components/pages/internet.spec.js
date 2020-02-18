import {factory} from '../../__test__/utils/helpers';
import Internet from './internet';

describe('Internet page', () => {
    it('match snapshot', () => {
        const wrapper = factory(Internet);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
