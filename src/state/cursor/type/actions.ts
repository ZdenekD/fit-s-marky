import ICursor from './cursor';

enum ActionsEnum {
    save = 'SAVE_POSITION'
}

export type ActionType = {type: ActionsEnum.save, payload: ICursor}

export default ActionsEnum;
