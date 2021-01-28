/* eslint-disable react/display-name */
import {IconKarate, IconThumbUp, IconCertificate, IconPhoto, IconReceipt, IconMessage} from '@tabler/icons';

export enum IconsEnum {
    pilates = 'pilates',
    thumbUp = 'thumbUp',
    certificate = 'certificate',
    photo = 'photo',
    receipt = 'receipt',
    message = 'message',
}

interface IIcons {
    [key: string]: (size?: number) => JSX.Element
}

const icons: IIcons = {
    [IconsEnum.pilates]: (size = 24) => (
        <IconKarate
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.thumbUp]: (size = 24) => (
        <IconThumbUp
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.certificate]: (size = 24) => (
        <IconCertificate
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.photo]: (size = 24) => (
        <IconPhoto
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.receipt]: (size = 24) => (
        <IconReceipt
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.message]: (size = 24) => (
        <IconMessage
            size={size}
            stroke={1}
        />
    ),
};

export default icons;
