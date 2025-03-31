import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const LoadingContainer = styled(Box)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const CarSilhouette = styled(motion.div)`
  width: 300px;
  height: 80px;
  background-image: url("/car-silhouette.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 30px;
`;

const TrackLine = styled(Box)`
  width: 80%;
  height: 4px;
  background-color: #333;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  margin: 30px 0;
`;

const Car = styled(motion.div)`
  width: 60px;
  height: 30px;
  background-image: url("/car-icon.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: -13px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <CarSilhouette
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <Typography variant="h4" color="white" sx={{ mb: 2 }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          STARTING ENGINE
        </motion.span>
      </Typography>

      <TrackLine>
        <Car
          initial={{ left: "-60px" }}
          animate={{ left: "calc(100%)" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </TrackLine>

      <Typography variant="body1" color="#888">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Revving up your portfolio...
        </motion.span>
      </Typography>
    </LoadingContainer>
  );
};

export default Loading;
