import Icons from '.';

export default {title: 'UI/Icons'};

export const base: React.FC = () => (
    <>
        {Object.keys(Icons).map((icon, iterator) => (
            <i key={iterator} style={{maxWidth: '28px'}}>
                {Icons[icon]()}
            </i>
        ))}
    </>
);

export const size: React.FC = () => (
    <>
        {Object.keys(Icons).map((icon, iterator) => (
            <i key={iterator} style={{maxWidth: '48px'}}>
                {Icons[icon](48)}
            </i>
        ))}
    </>
);
