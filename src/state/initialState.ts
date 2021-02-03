import {initialState as cursorState} from './cursor/reducer';
import {initialState as frameState} from './frame/reducer';

export default {...cursorState, ...frameState};
