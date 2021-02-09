import {initialState as cursorState} from './cursor/reducer';
import {initialState as frameState} from './frame/reducer';
import {initialState as messageState} from './message/reducer';

export default {
    ...cursorState,
    ...frameState,
    ...messageState,
};
