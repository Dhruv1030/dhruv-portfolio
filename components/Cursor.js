import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const CursorDot = styled(motion.div)`
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #f12711, #f5af19);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CursorRing = styled(motion.div)`
  width: 30px;
  height: 30px;
  border: 2px solid rgba(255, 75, 0, 0.8);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: difference;
`;

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  const variants = {
    dot: {
      active: {
        scale: 1.5,
      },
      inactive: {
        scale: 1,
      },
    },
    ring: {
      active: {
        scale: 0.8,
      },
      inactive: {
        scale: 1,
      },
    },
  };

  return (
    <>
      <CursorDot
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          ...(isClicking ? variants.dot.active : variants.dot.inactive),
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <CursorRing
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          ...(isClicking ? variants.ring.active : variants.ring.inactive),
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  );
};

export default Cursor;
