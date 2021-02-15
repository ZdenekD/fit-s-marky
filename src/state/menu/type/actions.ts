import IMenu from './menu';

enum ActionsEnum {
    set = 'SET_MENU'
}

export type IAction = {type: ActionsEnum, payload: IMenu}

export default ActionsEnum;
