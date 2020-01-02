import React from 'react';

const pricelist = () => (
    <>
        <header>
            <h2>Ceník</h2>
        </header>
        <table>
            <tbody>
                <tr>
                    <td>Komplexní program (nutriční anamnéza, měření na diagnostickém přístroji Tanita BC-601,
                        vypracování individuálního jídelníčku, 3x kontrolní měření)</td>
                    <td>4 000 Kč / osoba <sup>*</sup></td>
                </tr>
                <tr>
                    <td>Měření na diagnostickém přístroji Tanita BC-601</td>
                    <td>500 Kč</td>
                </tr>
                <tr>
                    <td>Program sestavený dle individuálních přání</td>
                    <td>Cena dohodou</td>
                </tr>
                <tr>
                    <td>Individuální lekce pilates (doma, kancelář)</td>
                    <td>500 Kč / hodina</td>
                </tr>
                <tr>
                    <td>Individuální lekce jógy/powerjógy (doma, kancelář)</td>
                    <td>500 Kč / hodina</td>
                </tr>
                <tr>
                    <td>Individuální lekce pilates/jógy/powerjógy pro dvojice</td>
                    <td>400 Kč / hodina | osoba</td>
                </tr>
            </tbody>
        </table>
        <p className="_italic"><strong><sup>*</sup> Částka je splatná v&nbsp;plné výši při první schůzce.</strong></p>
    </>
);

export default pricelist;