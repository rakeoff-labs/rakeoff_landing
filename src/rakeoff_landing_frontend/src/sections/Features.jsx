import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import rakeoffBank from "../../assets/rakeoff_bank.png";

const Features = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-25%", "100%"]
  );

  return (
    <section className="scroll-container" ref={containerRef}>
      <div className="copy">
        <h2>Lorem ipsum dolor sit amet</h2>
      </div>
      <div className="img-container">
        <motion.div className="img-inner" style={{ translateX: imageValue }}>
          <motion.div
            className="bottom-shadow"
            style={{ translateX: bottomShadowValue }}
          />
          <img src={rakeoffBank} alt="a green plant" />
          <motion.div
            className="top-shadow"
            style={{ translateX: topShadowValue }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
