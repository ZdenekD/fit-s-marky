/* eslint-disable react/display-name */
import {IconKarate,
    IconThumbUp,
    IconCertificate,
    IconPhoto,
    IconReceipt,
    IconMessage,
    IconWoman,
    IconCopyright,
    IconPhone,
    IconMail} from '@tabler/icons';
import IconCobraPose from '../../assets/images/icons/yoga_01.svg';
import IconPranayamaPose from '../../assets/images/icons/yoga_02.svg';
import IconBoatPose from '../../assets/images/icons/yoga_03.svg';
import IconWarriorPose from '../../assets/images/icons/yoga_04.svg';
import IconsEnum from './types/iconsEnum';

interface IIcons {
    [key: string]: (size?: number) => JSX.Element
}

const icons: IIcons = {
    [IconsEnum.pilates]: (size = 28) => (
        <IconKarate
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.thumbUp]: (size = 28) => (
        <IconThumbUp
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.certificate]: (size = 28) => (
        <IconCertificate
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.photo]: (size = 28) => (
        <IconPhoto
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.receipt]: (size = 28) => (
        <IconReceipt
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.message]: (size = 28) => (
        <IconMessage
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.woman]: (size = 28) => (
        <IconWoman
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.copyright]: (size = 28) => (
        <IconCopyright
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.phone]: (size = 28) => (
        <IconPhone
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.mail]: (size = 28) => (
        <IconMail
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.cobraPose]: () => (<IconCobraPose />),
    [IconsEnum.pranayamaPose]: () => (<IconPranayamaPose />),
    [IconsEnum.boatPose]: () => (<IconBoatPose />),
    [IconsEnum.warriorPose]: () => (<IconWarriorPose />),
};

export default icons;
