import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView();
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }
    return [element, controls];
};

export const scrollLeft = {
    hidden: { opacity: 0, x: "-100%", transition: { duration: 0.5, when: "afterChildren" } },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, when: "afterChildren" } },
};
export const scrollRight = {
    hidden: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, } },
};
export const scrollDown = {
    hidden: { opacity: 0, y: "-100%", transition: { duration: 0.5 } },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export const scrollScale = {
    hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};