import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Pointer = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const pointerX = useSpring(mouseX, springConfig);
  const pointerY = useSpring(mouseY, springConfig);

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <motion.div
      className="w-16 h-16 rounded-full fixed z-[9999] bg-white mix-blend-difference pointer-events-none"
      style={{
        left: pointerX,
        top: pointerY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
};

export default Pointer;
