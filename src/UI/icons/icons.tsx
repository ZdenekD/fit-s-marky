/* eslint-disable react/display-name */
import {IconKarate,
    IconThumbUp,
    IconCertificate,
    IconPhoto,
    IconReceipt,
    IconMessage,
    IconWoman,
    IconCopyright,
    IconCalendarEvent,
    IconPhone,
    IconMail,
    IconCamera,
    IconChevronLeft,
    IconBorderNone,
    IconChartBubble} from '@tabler/icons';
import IconCobraPose from '../../assets/images/icons/yoga_01.svg';
import IconPranayamaPose from '../../assets/images/icons/yoga_02.svg';
import IconBoatPose from '../../assets/images/icons/yoga_03.svg';
import IconWarriorPose from '../../assets/images/icons/yoga_04.svg';
import IconDecoration1 from '../../assets/images/icons/decoration_01.svg';
import IconDecoration2 from '../../assets/images/icons/decoration_02.svg';
import IconDecoration3 from '../../assets/images/icons/decoration_03.svg';
import IconDecoration4 from '../../assets/images/icons/decoration_04.svg';
import IconDecoration5 from '../../assets/images/icons/decoration_05.svg';
import IconDecoration6 from '../../assets/images/icons/decoration_06.svg';
import IconDecoration7 from '../../assets/images/icons/decoration_07.svg';
import IconDecoration8 from '../../assets/images/icons/decoration_08.svg';
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
    [IconsEnum.calendar]: (size = 28) => (
        <IconCalendarEvent
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
    [IconsEnum.camera]: (size = 28) => (
        <IconCamera
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.chartBubble]: (size = 28) => (
        <IconChartBubble
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.chevronLeft]: (size = 28) => (
        <IconChevronLeft
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.borderNone]: (size = 28) => (
        <IconBorderNone
            size={size}
            stroke={1}
        />
    ),
    [IconsEnum.cobraPose]: () => (<IconCobraPose />),
    [IconsEnum.pranayamaPose]: () => (<IconPranayamaPose />),
    [IconsEnum.boatPose]: () => (<IconBoatPose />),
    [IconsEnum.warriorPose]: () => (<IconWarriorPose />),
    [IconsEnum.decoration1]: () => (<IconDecoration1 />),
    [IconsEnum.decoration2]: () => (<IconDecoration2 />),
    [IconsEnum.decoration3]: () => (<IconDecoration3 />),
    [IconsEnum.decoration4]: () => (<IconDecoration4 />),
    [IconsEnum.decoration5]: () => (<IconDecoration5 />),
    [IconsEnum.decoration6]: () => (<IconDecoration6 />),
    [IconsEnum.decoration7]: () => (<IconDecoration7 />),
    [IconsEnum.decoration8]: () => (<IconDecoration8 />),
};

export default icons;
