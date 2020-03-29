import React from 'react';
import Content from './content';

const heading2Element = (<h2>Heading 2</h2>);
const heading3Element = (<h3>Heading 3</h3>);
const unorderedListElement = (
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
);
const orderedListElement = (
    <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ol>
);
const tableElement = (
    <table>
        <tr>
            <td>Cell key</td>
            <td>Cell value</td>
        </tr>
        <tr>
            <td>Cell key</td>
            <td>Cell value</td>
        </tr>
        <tr>
            <td>Cell key</td>
            <td>Cell value</td>
        </tr>
        <tr>
            <td>Cell key</td>
            <td>Cell value</td>
        </tr>
    </table>
);

export default {
    title: 'Layout/Content',
};

export const heading2 = () => <Content content={heading2Element} />;
export const heading3 = () => <Content content={heading3Element} />;
export const unorderedList = () => <Content content={unorderedListElement} />;
export const orderedList = () => <Content content={orderedListElement} />;
export const table = () => <Content content={tableElement} />;
