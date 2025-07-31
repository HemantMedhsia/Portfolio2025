import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseFollower = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHoveringButton, setIsHoveringButton] = useState(false);
    const [divSize, setDivSize] = useState(10); // Default size

    const springX = useSpring(mouseX, {
        stiffness: 80,
        damping: 20,
        mass: 0.5,
    });
    const springY = useSpring(mouseY, {
        stiffness: 80,
        damping: 20,
        mass: 0.5,
    });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX - divSize);
            mouseY.set(e.clientY - divSize);
            setDivSize(isHoveringButton ? 56 : 10);
        };

        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("button")) {
                setIsHoveringButton(true);
            } else {
                setIsHoveringButton(false);
            }
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", checkHover);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", checkHover);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className={`hidden fixed top-0 left-0 pointer-events-none z-[9999] md:flex items-center justify-center
        transition-all duration-200 ease-out`}
            style={{
                x: springX,
                y: springY,
                width: isHoveringButton ? 90 : 20,
                height: isHoveringButton ? 90 : 20,
                borderRadius: "9999px",
                color: isHoveringButton ? "linear-gradient(135deg, #000000, #434343)" : "black",
                background: isHoveringButton ? "linear-gradient(to right, #14b8a6, #8b5cf6, #ec4899)" : "#ffffff",
                backdropFilter: isHoveringButton ? "" : "none",
                border: isHoveringButton ? "2px solid black" : "none",
                mixBlendMode: "difference",
            }}
        >
            {isHoveringButton && (
                <span className="text-xs text-white"></span>
            )}
        </motion.div>
    );
};

export default MouseFollower;
