const fade = {
    initial: {opacity: 0, translateX: 20},
    enter: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: 0.4,
            delay: 0.2,
        },
    },
    exit: {
        opacity: 0,
        translateX: 10,
        transition: {duration: 0.2},
    },
};

// eslint-disable-next-line import/prefer-default-export
export {fade};
