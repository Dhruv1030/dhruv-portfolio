import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  Speed,
  DirectionsCar,
  Code,
  School,
  RocketLaunch,
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
      icon: <Speed fontSize="large" />,
      title: "High Performance",
      description:
        "Crafting optimized code that runs smoothly and efficiently, just like a well-tuned sports car.",
    },
    {
      icon: <RocketLaunch fontSize="large" />,
      title: "WordPress & SEO Specialist",
      description:
        "Optimizing Travelstic for peak SEO performance and seamless WordPress management to drive traffic and engagement.",
    },
    {
      icon: <Code fontSize="large" />,
      title: "Front-end Specialist",
      description:
        "Expertise in React.js, Next.js, and modern JavaScript to build responsive and interactive interfaces.",
    },
    {
      icon: <School fontSize="large" />,
      title: "Continuous Learning",
      description:
        "Always studying new technologies and techniques to stay at the cutting edge of web development.",
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
            I am Dhruv Patel, a front-end developer with a passion for creating
            sleek, high-performance web applications. My approach to development
            is influenced by my love for cars—focusing on efficiency, design,
            and user experience. Just as a sports car needs to be both beautiful
            and powerful, I believe websites should be visually appealing while
            functioning flawlessly under the hood.
          </Typography>

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
              <TimelineItem>
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
                      Georgian College, Toronto (2023-2025)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
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
                      Front-end Developer
                    </Typography>
                    <Typography variant="body2">
                      Ranogic IT Solutions, India (Nov 2018 – Dec 2019)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: "#f12711" }}>
                    <Code />
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
                      Gujarat Technological University, India (2019-2022)
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
