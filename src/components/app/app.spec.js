import {factory, findComponent} from '../../__test__/utils/helpers';
import App from './index';
import data from '../../data/pages.json';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory(App);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-app');

        expect(component.length).toBe(1);
    });

    it('renders routes from data', () => {
        const component = findComponent(wrapper, 'component-route');
        const {length} = data.pages;

        expect(component.length).toBe(length);
    });
});