import {factory, findComponent} from '../../__test__/utils/helpers';
import Navigation from './index';

describe('Navigation', () => {
    it('renderes without error', () => {
        const wrapper = factory(Navigation);
        const component = findComponent(wrapper, 'component-navigation');

        expect(component.length).toBe(1);
    });
});
