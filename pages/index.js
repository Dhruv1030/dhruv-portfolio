import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Speed, Code, GitHub, LinkedIn, Email } from "@mui/icons-material";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styled from "@emotion/styled";

const HeroSection = styled(Box)`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const GradientText = styled(Typography)`
  background: linear-gradient(90deg, #f12711, #f5af19);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;

const SpeedLines = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const SocialLinks = styled(Box)`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const SocialButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.palette.text.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #f12711, #f5af19);
    transform: translateY(-5px);
  }
`;

const Home = () => {
  const router = useRouter();

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <Container maxWidth="xl">
      <HeroSection>
        <SpeedLines>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#f5af19",
                },
                shape: {
                  type: "circle", // Change to line, triangle, etc., as per your choice
                },
                opacity: {
                  value: 0.5,
                  random: true,
                },
                size: {
                  value: 3,
                  random: true,
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  enable: true,
                  speed: 1, // Reduced speed from 30 to 10 (you can adjust this further)
                  direction: "right",
                  random: false,
                  straight: true,
                  out_mode: "out",
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
              },
              retina_detect: true,
            }}
          />
        </SpeedLines>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" component="div" gutterBottom>
            Hello, I am
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 800,
              fontSize: {
                xs: "1.5rem",
                sm: "2.5rem",
                md: "3.5rem",
                lg: "4rem",
              },
            }}
          >
            <GradientText sx={{ fontSize: "inherit" }}>
              Dhruv Patel
            </GradientText>
          </Typography>

          <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
            <Box
              component="span"
              sx={{ display: "flex", alignItems: "center", fontSize: "1.8rem" }}
            >
              <Speed sx={{ mr: 1 }} />
              Full stack Developer
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              maxWidth: "600px",
              lineHeight: "1.9",
              fontSize: "1.25rem",
            }}
          >
            Building high-performance web applications with the precision of a
            finely tuned engine. Passionate about creating smooth user
            experiences and optimized code.
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/projects")}
              sx={{
                background: "linear-gradient(90deg, #f12711, #f5af19)",
                borderRadius: "30px",
                px: 4,
              }}
            >
              <Code sx={{ mr: 1 }} /> View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => router.push("/about")}
              sx={{
                borderRadius: "30px",
                px: 4,
              }}
            >
              Learn More
            </Button>
          </Box>

          <SocialLinks>
            <SocialButton
              href="https://github.com/Dhruv1030"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHub />
            </SocialButton>
            <SocialButton
              href="https://www.linkedin.com/in/dhruvp18/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedIn />
            </SocialButton>
            <SocialButton
              href="mailto:dhruvp30.work@gmail.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Email />
            </SocialButton>
          </SocialLinks>
        </motion.div>
      </HeroSection>
    </Container>
  );
};

export default Home;
