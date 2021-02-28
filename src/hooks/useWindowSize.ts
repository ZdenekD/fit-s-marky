import React from 'react';

interface ISize {
    width: number
    height: number
}

const initialState: ISize = {
    width: 0,
    height: 0,
};
const useWindowSize = (): ISize => {
    const [size, setSize] = React.useState<ISize>(initialState);
    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    React.useEffect(() => {
        handleResize();
    }, []);

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return size;
};

export default useWindowSize;
