import Icons from '.';

export default {title: 'UI/Icons'};

export const base: React.FC = () => (
    <>
        {Object.keys(Icons).map((icon, iterator) => (
            <div key={iterator} style={{maxWidth: '28px'}}>
                {Icons[icon]()}
            </div>
        ))}
    </>
);

export const size: React.FC = () => (
    <>
        {Object.keys(Icons).map((icon, iterator) => (
            <div key={iterator} style={{maxWidth: '48px'}}>
                {Icons[icon](48)}
            </div>
        ))}
    </>
);
