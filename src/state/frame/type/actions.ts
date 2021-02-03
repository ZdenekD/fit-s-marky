import IFrame from './frame';

enum ActionsEnum {
    save = 'SAVE_FRAME'
}

export type IAction = {type: ActionsEnum.save, payload: IFrame}

export default ActionsEnum;
