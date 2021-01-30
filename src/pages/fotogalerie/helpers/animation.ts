const list = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            ease: 'easeIn',
            duration: 0.4,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: {opacity: 0, translateX: 20},
    show: {opacity: 1, translateX: 0},
};

export {list, item};
