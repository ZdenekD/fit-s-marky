import {initialState as frameState} from './frame/type';
import {initialState as messageState} from './message/type';
import {initialState as menuState} from './menu/type';

export default {
    ...frameState,
    ...messageState,
    ...menuState,
};
