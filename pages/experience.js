import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Paper,
  useTheme,
  alpha,
  Grid,
  Divider,
  Avatar,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  Work,
  School,
  LocationOn,
  DateRange,
  ArrowDownward,
} from "@mui/icons-material";

const experienceData = [
  {
    id: 2,
    title: "Founder & SEO Specialist",
    company: "Travelstic.com",
    location: "Remote",
    duration: "2024 - Present",
    type: "experience",
    description: [
      "Built and managed Travelstic, a travel-focused website optimized for SEO and user engagement.",
      "Implemented advanced SEO strategies to increase organic traffic and search engine rankings.",
      "Designed and customized the website using WordPress, ensuring optimal performance and UI/UX.",
      "Developed content marketing strategies to enhance audience reach and engagement.",
      "Monitored website analytics and optimized content based on performance data.",
    ],
    technologies: [
      "WordPress",
      "SEO",
      "Google Analytics",
      "Content Marketing",
      "Web Performance Optimization",
    ],
  },

  {
    id: 2,
    title: "Advanced Diploma, Computer Programming",
    company: "Georgian College",
    location: "Toronto",
    duration: "2023-2025",
    type: "education",
    description: [
      "Studying Object-oriented programming, scripting languages, application & web development",
    ],
    technologies: [],
  },
  {
    id: 3,
    title: "Front-end developer",
    company: "Ranogic IT Solutions",
    location: "India",
    duration: "JUL 2022 – Dec 2022",
    type: "work",
    description: [
      "Designed and developed a web application to predict product stock for future requirements",
      "Worked with technologies such as React, JavaScript, and NextJS",
      "Developed applications using React and CSS",
      "Collaborated in a team environment as an intern",
    ],
    technologies: ["React", "JavaScript", "NextJS", "CSS"],
  },
  {
    id: 4,
    title: "Diploma in Information Technology",
    company: "Gujarat Technological University",
    location: "India",
    duration: "2019-2022",
    type: "education",
    description: ["Studied Java, PHP, HTML, CSS, OOPs concepts"],
    technologies: ["Java", "PHP", "HTML", "CSS", "OOP"],
  },
];

const Experience = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            mb: 6,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Experience
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mb: 4,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 3,
            borderRadius: 2,
            maxWidth: 700,
            width: "100%",
            backgroundColor: alpha(theme.palette.background.paper, 0.7),
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 600, color: theme.palette.primary.main }}
          >
            Professional Journey
          </Typography>
          <Typography variant="body1" paragraph>
            With experience in front-end development and a strong educational
            background in computer programming and information technology, I
            have built a diverse skill set focusing on modern web technologies
            and application development.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <ArrowDownward
              color="primary"
              sx={{ fontSize: 32, animation: "bounce 2s infinite" }}
            />
          </Box>
        </Paper>
      </Box>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Timeline position="alternate">
          {experienceData.map((exp, index) => (
            <TimelineItem key={exp.id}>
              <TimelineOppositeContent sx={{ m: "auto 0" }}>
                <motion.div variants={itemVariants}>
                  <Typography variant="body2" color="text.secondary">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        justifyContent:
                          index % 2 === 0 ? "flex-end" : "flex-start",
                      }}
                    >
                      <DateRange fontSize="small" />
                      {exp.duration}
                    </Box>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        justifyContent:
                          index % 2 === 0 ? "flex-end" : "flex-start",
                      }}
                    >
                      <LocationOn fontSize="small" />
                      {exp.location}
                    </Box>
                  </Typography>
                </motion.div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector
                  sx={{
                    bgcolor:
                      index === 0 ? "transparent" : theme.palette.primary.main,
                  }}
                />
                <TimelineDot
                  sx={{
                    bgcolor:
                      exp.type === "work"
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main,
                    boxShadow: `0 0 10px ${
                      exp.type === "work"
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main
                    }`,
                  }}
                >
                  {exp.type === "work" ? <Work /> : <School />}
                </TimelineDot>
                <TimelineConnector
                  sx={{
                    bgcolor:
                      index === experienceData.length - 1
                        ? "transparent"
                        : theme.palette.primary.main,
                  }}
                />
              </TimelineSeparator>
              <TimelineContent sx={{ py: 2 }}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      backgroundColor: alpha(
                        theme.palette.background.paper,
                        0.8
                      ),
                      backdropFilter: "blur(5px)",
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: `0 10px 20px ${alpha(
                          theme.palette.primary.main,
                          0.2
                        )}`,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color:
                          exp.type === "work"
                            ? theme.palette.primary.main
                            : theme.palette.secondary.main,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 1, fontWeight: 500 }}
                    >
                      {exp.company}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Box sx={{ mt: 2 }}>
                      {exp.description.map((item, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{
                            mb: 1,
                            display: "flex",
                            alignItems: "flex-start",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{ mr: 1, color: theme.palette.text.secondary }}
                          >
                            •
                          </Box>
                          {item}
                        </Typography>
                      ))}
                    </Box>
                    {exp.technologies.length > 0 && (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mt: 2,
                        }}
                      >
                        {exp.technologies.map((tech, index) => (
                          <Typography
                            key={index}
                            variant="caption"
                            sx={{
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                              color: theme.palette.primary.main,
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Box sx={{ mt: 8 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: alpha(theme.palette.background.paper, 0.7),
              backdropFilter: "blur(10px)",
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      bgcolor: theme.palette.primary.main,
                      boxShadow: `0 0 20px ${alpha(
                        theme.palette.primary.main,
                        0.5
                      )}`,
                    }}
                  >
                    <Typography variant="h2">DP</Typography>
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  Skills Summary
                </Typography>
                <Typography variant="body1" paragraph>
                  With a strong foundation in front-end development and
                  continuous learning in computer programming, I bring a
                  comprehensive skill set to any project.
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                  {[
                    "React",
                    "NextJS",
                    "JavaScript",
                    "Typescript",
                    "HTML5",
                    "CSS",
                    "Wordpress",
                    "SASS",
                    "Tailwind CSS",
                    "Redux",
                    "REST APIs",
                    "Git",
                  ].map((skill) => (
                    <Typography
                      key={skill}
                      variant="body2"
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Experience;
