const list = {
    initial: {opacity: 0},
    enter: {
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 0.4,
            delay: 0.2,
            staggerChildren: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut',
            duration: 0.4,
            staggerChildren: 0.1,
        },
    },
};

const item = {
    initial: {
        opacity: 0,
        scale: 0.96,
        translateX: 20,
    },
    enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
    },
    exit: {
        opacity: 0,
        scale: 0.96,
        translateX: 10,
    },
};

export {list, item};
