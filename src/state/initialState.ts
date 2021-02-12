import {initialState as cursorState} from './cursor/reducer';
import {initialState as frameState} from './frame/reducer';
import {initialState as messageState} from './message/reducer';
import {initialState as menuState} from './menu/reducer';

export default {
    ...cursorState,
    ...frameState,
    ...messageState,
    ...menuState,
};
