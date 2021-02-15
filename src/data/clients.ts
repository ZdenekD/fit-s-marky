import prefix from '../helpers/prefix';

interface IClients {
    id: string
    title: string
    src?: string
}

const clients: IClients[] = [
    {
        id: `${prefix}_c1`,
        title: 'Johnson&Johnson',
        src: 'johnson&johnson.png',
    },
    {
        id: `${prefix}_c2`,
        title: 'Caerus IM',
        src: 'caerus_im.png',
    },
    {
        id: `${prefix}_c3`,
        title: 'Vodafone',
        src: 'vodafone.png',
    },
    {
        id: `${prefix}_c4`,
        title: 'Paralelní Polis',
        src: 'paralelni_polis.png',
    },
    {
        id: `${prefix}_c5`,
        title: 'Form Factory',
        src: 'form_factory.png',
    },
    {
        id: `${prefix}_c6`,
        title: 'Pilates & Flow',
        src: 'pilates&flow.png',
    },
    {
        id: `${prefix}_c7`,
        title: 'Joga Letná',
        src: 'joga_letna.png',
    },
    {
        id: `${prefix}_c8`,
        title: 'HitFit Flora',
        src: 'fitness_flora.png',
    },
    {
        id: `${prefix}_c9`,
        title: 'Pohybové studio K6',
        src: 'k6.png',
    },
    {
        id: `${prefix}_c10`,
        title: 'TJ Sokol Jahodnice',
    },
];

export default clients;
