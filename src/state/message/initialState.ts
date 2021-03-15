import VariantsEnum from '../../enums/VariantsEnum';
import IMessage from './type';

const initialState: IMessage = {message: {variant: VariantsEnum.info, content: undefined}};

export default initialState;
