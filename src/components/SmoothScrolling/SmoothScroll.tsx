import { useEffect, useRef } from "react";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface ExtendedLocomotiveScrollOptions extends ILocomotiveScrollOptions {
    el: HTMLElement;
}

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: containerRef.current!,
            smooth: true,
            lerp: 0.005,
            multiplier: 0.01,// lower multiplier for slower scroll speed
        } as ExtendedLocomotiveScrollOptions);

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <div id="smooth-wrapper" data-scroll-container ref={containerRef}>
            {children}
        </div>
    );
};

export default SmoothScroll;
