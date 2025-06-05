import { motion } from "framer-motion";
import hoverEffect from "hover-effect";
import { useEffect, useRef } from "react";
import "./glow.css";

interface ProjectCardProps {
  techStack: string;
  projectName: string;
  mainImg: string;
  secImg: string;
  overlayImg: string;
  svgNumberImg: string;
  githubLink: string;
  liveLink: string;
  identifier: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  techStack,
  projectName,
  mainImg,
  secImg,
  overlayImg,
  svgNumberImg,
  githubLink,
  liveLink,
  identifier,
}) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 1. hover-effect image switching
  useEffect(() => {
    if (!imageRef.current) return;

    try {
      new hoverEffect({
        parent: imageRef.current,
        intensity: 0.3,
        image1: secImg,
        image2: mainImg,
        displacementImage: overlayImg,
      });
    } catch (error) {
      console.error("Hover effect failed:", error);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.innerHTML = "";
      }
    };
  }, [mainImg, secImg, overlayImg]);

  // 2. glowing effect on mouse move
  useEffect(() => {
    const CONTAINER = containerRef.current;
    const CARDS = CONTAINER
      ? CONTAINER.querySelectorAll(`.glow-card-${identifier}`)
      : [];

    const CONFIG = {
      proximity: 260,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: { x: number; y: number }) => {
      for (const CARD of CARDS) {
        const bounds = CARD.getBoundingClientRect();

        const inProximity =
          event.x > bounds.left - CONFIG.proximity &&
          event.x < bounds.right + CONFIG.proximity &&
          event.y > bounds.top - CONFIG.proximity &&
          event.y < bounds.bottom + CONFIG.proximity;

        (CARD as HTMLElement).style.setProperty("--active", inProximity ? "1" : `${CONFIG.opacity}`);

        const center = [bounds.left + bounds.width / 2, bounds.top + bounds.height / 2];
        let angle = (Math.atan2(event.y - center[1], event.x - center[0]) * 180) / Math.PI;
        if (angle < 0) angle += 360;

        (CARD as HTMLElement).style.setProperty("--start", `${angle + 90}`);
      }
    };

    document.body.addEventListener("pointermove", UPDATE);
    return () => document.body.removeEventListener("pointermove", UPDATE);
  }, [identifier]);

  return (
    <motion.div
      ref={containerRef}
      className={`glow-container glow-container-${identifier} relative w-full max-w-3xl mx-auto my-50`}
    >
      <article
        className={`glow-card glow-card-${identifier} relative w-full bg-gradient-to-t border-2 border-dashed border-[#2A2B37] from-[#15161C] to-[#000] rounded-[40px] px-3 py-8 md:px-24 md:py-12 flex flex-col md:flex-row items-center gap-4 md:gap-10 shadow-[0_0_40px_rgba(0,0,0,0.4)]`}
      >
        <div className=" glows"></div> {/* <- required for actual glow */}

        <div className="absolute -top-30 -right-10 w-60 h-60 opacity-80">
          <img src={svgNumberImg} alt={`Project ${projectName} number`} className="w-full h-full object-contain" />
        </div>

        <div ref={imageRef} className="flex rounded-3xl w-full md:w-[340px] h-64 sm:h-80 md:h-96 item-image overflow-hidden">
        </div>

        <div className="flex-1 text-white md:space-y-3 md:w-1/3 text-center md:text-left">
          <h3 className="text-4xl font-bold leading-snug">{projectName}</h3>

          <a href={liveLink} target="_blank" className="text-teal-300 uppercase text-sm tracking-widest border-b-2 border-teal-300 pb-1 hover:opacity-80 transition block my-4 w-auto">
            Visit the Website
          </a>

          <a href={githubLink} target="_blank" className="text-teal-300 uppercase text-sm tracking-widest border-b-2 border-teal-300 pb-1 hover:opacity-80 transition block">
            Github URL
          </a>
        </div>

        <div className="hidden md:block absolute left-13 bottom-22 -rotate-90 origin-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          {techStack}
        </div>
      </article>
    </motion.div>
  );
};

export default ProjectCard;
