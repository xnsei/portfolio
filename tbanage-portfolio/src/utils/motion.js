export const simpleFadeIn = {
    offscreen: {
        x: 0,
        y: 100,
        opacity: 0
    },
    onscreen: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            bounce: 0.2,
            duration: 1,
            ease: "easeOut",
        }
    }
};

export const simpleSlideInLeft = {
    offscreen: {
        x: -100,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            delay: 0.2,
            duration: 0.3,
            ease: "easeOut",
        }
    }
};
