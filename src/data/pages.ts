import {IconsEnum} from '../UI/icons';

export interface IPages {
    id: string
    icon: IconsEnum
    title: string
    slug: string
    description: string
}

const pages: IPages[] = [
    {
        id: '_5innv1',
        icon: IconsEnum.pilates,
        title: 'Individuální lekce pilates',
        slug: 'individualni-lekce-pilates',
        description: 'Soukromé lekce pilates přímo u Vás doma. Po celou dobu individuální lekce pilates se věnuji pouze Vám. Cvičební program je plně přizpůsoben Vašim potřebám a požadavkům.',
    },
    {
        id: '_5innv2',
        icon: IconsEnum.woman,
        title: 'Individuální lekce jógy pro těhotné',
        slug: 'individualni-lekce-jogy-pro-tehotne',
        description: 'Jóga pro těhotné je určena pro každou ženu, která právě zjistila, že je těhotná. Cvičení je vhodné od prvních dnů až do porodu, v jakémkoli stupni těhotenství.',
    },
    {
        id: '_5innv3',
        icon: IconsEnum.certificate,
        title: 'Certifikáty',
        slug: 'certifikaty',
        description: 'Získala jsem certifikáty instruktorky pilates, bosu, jógy, poradce pro zdravou výživu ...',
    },
    {
        id: '_5innv4',
        icon: IconsEnum.photo,
        title: 'Fotogalerie',
        slug: 'fotogalerie',
        description: 'Lekce pilates a jógy',
    },
    {
        id: '_5innv5',
        icon: IconsEnum.receipt,
        title: 'Ceník',
        slug: 'cenik',
        description: 'Kompletní ceník nabízených služeb od tvorby správného jídelníčku přes komplexní program redukce váhy až k individuálním lekcím pilates, jógy i powerjógy přímo u Vás doma.',
    },
    {
        id: '_5innv6',
        icon: IconsEnum.message,
        title: 'Kontakt',
        slug: 'kontakt',
        description: 'Kontaktní e-mail: fitsmarky@seznam.cz | Kontaktní telefon: 728 778 023',
    },
];

export default pages;
