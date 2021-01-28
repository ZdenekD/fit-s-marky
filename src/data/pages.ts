import {IconsEnum} from '../UI/icons/icons';

interface IPages {
    icon: IconsEnum,
    title: string,
    pathname: string,
}

const pages: IPages[] = [
    {
        icon: IconsEnum.pilates,
        title: 'Individuální lekce pilates',
        pathname: '/individualni-lekce',
    },
    {
        icon: IconsEnum.certificate,
        title: 'Certifikáty',
        pathname: '/certifikaty',
    },
    {
        icon: IconsEnum.photo,
        title: 'Fotogalerie',
        pathname: '/fotogalerie',
    },
    {
        icon: IconsEnum.receipt,
        title: 'Ceník',
        pathname: '/cenik',
    },
    {
        icon: IconsEnum.message,
        title: 'Kontakt',
        pathname: '/kontakt',
    },
];

export default pages;
