import React from 'react';
import Layout from '../components/layout';
import Article from '../components/article';

const Page: React.FC = () => (
    <Layout>
        <Article>
            <p>
                Jmenuji se&nbsp;Markéta&nbsp;Hříbalová a&nbsp;pocházím z&nbsp;Prahy.
            </p>
            <p>
                Již v&nbsp;rámci studia vysoké školy jsem se&nbsp;zajímala o&nbsp;zdravou výživu
                a&nbsp;zdravý životní styl, až se&nbsp;tato záliba stala nejen mým koníčkem, ale i&nbsp;zaměstnáním.
            </p>
            <p>
                Stala jsem se&nbsp;zkušenou instruktorkou pilates, jemné jogy, office jogy a&nbsp;jogy pro těhotné.
            </p>
        </Article>
    </Layout>
);

export default Page;
