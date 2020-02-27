import React from 'react';
import jpg from '../../assets/images/image_vaha.jpg';
import webp from '../../assets/images/image_vaha.webp';

const body = () => (
    <>
        <header>
            <h2>Chci znát složení svého těla</h2>
        </header>
        <p>Díky své moderní diagnostické váze získám rychlou&nbsp;a&nbsp;přesnou analýzu složení Vašeho těla</p>
        <picture>
            <source srcSet={jpg} type="image/jpg" />
            <source srcSet={webp} type="image/webp" />
            <img src={jpg} alt="Váha Tanita BC-601 pro zjištění složení svého těla, měření metabolického věku, ideální váhy atd." className="_pull-right" />
        </picture>
        <h3>Tanita BC-601 poskytuje přesné výsledky</h3>
        <ul>
            <li>Jaké je % složení (svaloviny, tuku, kostí&nbsp;a&nbsp;úroveň hydratace ve Vašem těle).</li>
            <li>Jaký je Váš&nbsp;metabolický věk, množství vnitřního&nbsp;(viscerálního) tuku.</li>
            <li>Jaká by měla být&nbsp;Vaše ideální váha&nbsp;a&nbsp;o&nbsp;kolik kg byste měli svoji váhu upravit.</li>
        </ul>
        <h3>Průběh měření:</h3>
        <ul>
            <li>Měření trvá cca 30 vteřin.</li>
            <li>Není nutné se svlékat, pouze si sundáte všechny kovové předměty (pásky, řetízky, náramky, prstýnky &hellip;).</li>
            <li>Měření se provádí naboso&nbsp;a&nbsp;ve stoje.</li>
        </ul>
        <h3>Před samotným měřením je nezbytné:</h3>
        <ul>
            <li>Nejíst&nbsp;a&nbsp;nepít alespoň 2-3 hodiny před diagnostikou.</li>
            <li>Necvičit těsně před měřením&nbsp;a&nbsp;den předtím se raději vyhnout náročnějším sportovním aktivitám&nbsp;a&nbsp;fyzické námaze.</li>
            <li>Být uklidněný.</li>
            <li>U žen je vhodné měřit mimo období menstruace.</li>
        </ul>
        <h3>Měření se neprovádí:</h3>
        <ul>
            <li>Osobám&nbsp;s&nbsp;kardiostimulátorem.</li>
            <li>Těhotným ženám.</li>
        </ul>
    </>
);

export default body;
