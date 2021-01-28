import {ShallowWrapper} from 'enzyme';

const findComponent = (wrapper: ShallowWrapper, value: string): ShallowWrapper => wrapper.find(`[data-test="${value}"]`);

export default findComponent;
