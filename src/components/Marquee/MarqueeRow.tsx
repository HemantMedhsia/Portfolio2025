import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface MarqueeRowProps<T> {
    direction?: "left" | "right";
    items: T[];
    renderItem: (item: T, idx: number) => React.ReactNode;
}

const MarqueeRow = <T,>({ direction = "left", items, renderItem }: MarqueeRowProps<T>) => {
    const isLeft = direction === "left";
    const slide = isLeft ? ["0%", "-50%"] : ["-50%", "0%"];
    const controls = useAnimation();

    const allItems = [...items, ...items, ...items];

    // Start animation when component mounts
    useEffect(() => {
        controls.start({
            x: slide,
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                },
            },
        });
    }, [controls, slide]);

    return (
        <div
            className="overflow-hidden w-full will-change-transform"
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
                controls.start({
                    x: slide,
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    },
                })
            }
        >
            <motion.div className="flex gap-6 w-max" animate={controls}>
                {allItems.map((item, idx) => renderItem(item, idx))}
            </motion.div>
        </div>
    );
};

export default MarqueeRow;
