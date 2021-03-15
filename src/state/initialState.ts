import frameState from './frame/initialState';
import menuState from './menu/initialState';
import messageState from './message/initialState';

export default {
    ...frameState,
    ...menuState,
    ...messageState,
};
