import {IData} from './types/IApi';
import APIEnum from '../enums/APIEnum';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};
const options = {
    post: (data: IData): RequestInit => ({
        method: APIEnum.post,
        headers,
        body: JSON.stringify(data),
    }),
};

export default options;
