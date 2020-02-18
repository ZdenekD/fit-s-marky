import {factory} from '../../__test__/utils/helpers';
import Body from './body';

describe('Body page', () => {
    it('match snapshot', () => {
        const wrapper = factory(Body);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
