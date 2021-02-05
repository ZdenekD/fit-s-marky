const heading = {
    initial: {opacity: 0, translateX: 20},
    enter: {
        opacity: 1,
        translateX: 0,
        transition: {duration: 0.4},
    },
    exit: {
        opacity: 0,
        translateX: 20,
        transition: {
            duration: 0.1,
            delay: 0.1,
        },
    },
};

// eslint-disable-next-line import/prefer-default-export
export {heading};
