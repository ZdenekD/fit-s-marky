import IFrame from '.';

enum ActionsEnum {
    save = 'SAVE_FRAME'
}

export type IAction = {type: ActionsEnum, payload: IFrame}

export default ActionsEnum;
