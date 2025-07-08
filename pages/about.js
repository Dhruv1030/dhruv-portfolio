import React from "react";
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  Speed,
  DirectionsCar,
  Code,
  School,
  RocketLaunch,
  Work,
  Cloud,
  FileDownload,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const AboutSection = styled(Box)`
  padding: 120px 0;
`;

const FeatureCard = styled(Paper)`
  padding: 24px;
  height: 100%;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(241, 39, 17, 0.5);
  }
`;

const IconWrapper = styled(Box)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f12711, #f5af19);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const TimelineWrapper = styled(Box)`
  margin-top: 60px;
`;

const GradientText = styled("span")`
  background: linear-gradient(135deg, #f12711, #f5af19);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const About = () => {
  const features = [
    {
      icon: <Work fontSize="large" />,
      title: "Full Stack Developer",
      description:
        "3+ years of professional experience developing scalable microservices and front-end systems using Java, Spring Boot, React, and Angular.",
    },
    {
      icon: <Cloud fontSize="large" />,
      title: "Cloud & DevOps",
      description:
        "Hands-on with AWS, Docker, Kubernetes, and Jenkins CI/CD pipelines; deployed containerized applications to production on OpenShift.",
    },
    {
      icon: <Code fontSize="large" />,
      title: "Backend & API Specialist",
      description:
        "Proficient in building REST APIs using Spring Boot, with secure authentication using Spring Security, OAuth2, and JWT.",
    },
    {
      icon: <RocketLaunch fontSize="large" />,
      title: "Continuous Learning",
      description:
        "Passionate about learning emerging tech, contributing to open-source, and staying sharp with new frameworks and tools.",
    },
  ];

  return (
    <Container maxWidth="xl">
      <AboutSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            About <GradientText>Me</GradientText>
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, maxWidth: "800px" }}>
            I am Dhruv Patel — a Java Full Stack Developer with around 3 years
            of experience delivering high-performance web applications and
            enterprise solutions. My stack includes Java 11, Spring Boot,
            React.js, Angular, and cloud-native deployments using Docker and
            AWS. I thrive on clean code, pixel-perfect UIs, and solving
            real-world business problems with technology.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<FileDownload />}
            href="/Dhruv_Full_Stack_Java_Developer_Sample_Resume.pdf"
            target="_blank"
            rel="noopener"
            sx={{
              mb: 6,
              borderRadius: 2,
              background: "linear-gradient(90deg, #f12711, #f5af19)",
            }}
          >
            Download Resume
          </Button>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <FeatureCard elevation={0}>
                    <IconWrapper>{feature.icon}</IconWrapper>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2">
                      {feature.description}
                    </Typography>
                  </FeatureCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <TimelineWrapper>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
              My <GradientText>Journey</GradientText>
            </Typography>

            <Timeline position="alternate">
              <TimelineItem position="left">
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: "#f12711" }}>
                    <Work />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={0}
                    sx={{ p: 2, bgcolor: "background.paper" }}
                  >
                    <Typography variant="h6" component="h3">
                      Full Stack Java Developer
                    </Typography>
                    <Typography variant="body2">
                      Dentons, Toronto (2024–Present)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem position="right">
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: "#f12711" }}>
                    <School />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={0}
                    sx={{ p: 2, bgcolor: "background.paper" }}
                  >
                    <Typography variant="h6" component="h3">
                      Advanced Diploma in Computer Programming
                    </Typography>
                    <Typography variant="body2">
                      Georgian College, Toronto (2023–2024)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem position="left">
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: "#f5af19" }}>
                    <Work />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={0}
                    sx={{ p: 2, bgcolor: "background.paper" }}
                  >
                    <Typography variant="h6" component="h3">
                      Java Developer
                    </Typography>
                    <Typography variant="body2">
                      Infosys, Chennai (2021–2023)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem position="right">
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: "#f5af19" }}>
                    <School />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={0}
                    sx={{ p: 2, bgcolor: "background.paper" }}
                  >
                    <Typography variant="h6" component="h3">
                      Diploma in Information Technology
                    </Typography>
                    <Typography variant="body2">
                      Gujarat Technological University, India (2019–2022)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TimelineWrapper>
        </motion.div>
      </AboutSection>
    </Container>
  );
};

export default About;
