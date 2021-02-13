import {initialState as frameState} from './frame/reducer';
import {initialState as messageState} from './message/reducer';
import {initialState as menuState} from './menu/reducer';

export default {
    ...frameState,
    ...messageState,
    ...menuState,
};
