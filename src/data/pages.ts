import prefix from '../helpers/prefix';
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
        id: `${prefix}_p1`,
        icon: IconsEnum.pilates,
        title: 'Individuální lekce pilates',
        slug: 'individualni-lekce-pilates',
        description: 'Soukromé lekce pilates přímo u Vás doma. Po celou dobu individuální lekce pilates se věnuji pouze Vám. Cvičební program je plně přizpůsoben Vašim potřebám a požadavkům.',
    },
    {
        id: `${prefix}_p2`,
        icon: IconsEnum.woman,
        title: 'Individuální lekce jógy pro těhotné',
        slug: 'individualni-lekce-jogy-pro-tehotne',
        description: 'Jóga pro těhotné je určena pro každou ženu, která právě zjistila, že je těhotná. Cvičení je vhodné od prvních dnů až do porodu, v jakémkoli stupni těhotenství.',
    },
    {
        id: `${prefix}_p3`,
        icon: IconsEnum.certificate,
        title: 'Certifikáty',
        slug: 'certifikaty',
        description: 'Získala jsem certifikáty instruktorky pilates, bosu, jógy, poradce pro zdravou výživu ...',
    },
    {
        id: `${prefix}_p4`,
        icon: IconsEnum.calendar,
        title: 'Kde a kdy cvičím',
        slug: 'cviceni',
        description: 'Kde a kdy můžeme cvičit',
    },
    {
        id: `${prefix}_p5`,
        icon: IconsEnum.photo,
        title: 'Fotogalerie',
        slug: 'fotogalerie',
        description: 'Lekce pilates a jógy',
    },
    {
        id: `${prefix}_p6`,
        icon: IconsEnum.receipt,
        title: 'Ceník',
        slug: 'cenik',
        description: 'Kompletní ceník nabízených služeb od tvorby správného jídelníčku přes komplexní program redukce váhy až k individuálním lekcím pilates, jógy i powerjógy přímo u Vás doma.',
    },
    {
        id: `${prefix}_p7`,
        icon: IconsEnum.message,
        title: 'Kontakt',
        slug: 'kontakt',
        description: 'E-mail: fitsmarky@seznam.cz | Telefon: 728 778 023',
    },
];

export default pages;
