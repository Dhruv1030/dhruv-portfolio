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
  Chip,
  Button,
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
  Code,
} from "@mui/icons-material";

const experienceData = [
  {
    id: 1,
    title: "Full Stack Java Developer",
    company: "Dentons",
    location: "Toronto, ON",
    duration: "Nov 2024 – Present",
    type: "work",
    description: [
      "Developing Microservices using Spring Boot and integrating with AWS services like Lambda, SQS, DynamoDB, and CloudWatch.",
      "Built scalable APIs with Spring Security (OAuth2, JWT), integrated Kafka and RabbitMQ for messaging.",
      "Developed responsive UI with Angular, React.js, HTML5, CSS3 and modern JavaScript.",
      "Implemented CI/CD using Jenkins and Docker containers deployed on Kubernetes clusters via Helm charts and OpenShift.",
      "Performed testing using JMeter, Protractor, Jasmine, and used ELK stack for log analysis.",
    ],
    technologies: [
      "Java 11",
      "Spring Boot",
      "React.js",
      "Angular",
      "Kafka",
      "AWS",
      "Kubernetes",
      "Docker",
      "JMeter",
      "RabbitMQ",
    ],
  },
  {
    id: 2,
    title: "Java Developer",
    company: "Infosys",
    location: "Chennai, India",
    duration: "Jan 2021 – Mar 2023",
    type: "work",
    description: [
      "Developed microservices using Spring Boot, JPA, and secured APIs with Spring Security and OAuth2.",
      "Built frontend apps using Angular 4.0, HTML5, CSS3 and Node.js.",
      "Integrated Kafka for messaging and Spark Streaming for real-time data processing.",
      "Worked with MongoDB for NoSQL storage and used Hibernate for ORM in RDBMS systems.",
      "Managed AWS infrastructure and created Docker containers for deployment.",
    ],
    technologies: [
      "Java 8",
      "Spring Boot",
      "Angular",
      "Node.js",
      "Kafka",
      "MongoDB",
      "Docker",
      "AWS",
      "Hibernate",
    ],
  },
  {
    id: 3,
    title: "Advanced Diploma, Computer Programming",
    company: "Georgian College",
    location: "Toronto, ON",
    duration: "2023 – 2025",
    type: "education",
    description: [
      "Studying object-oriented programming, web development, cloud computing, and database systems.",
    ],
    technologies: [],
  },
  {
    id: 4,
    title: "Diploma in Information Technology",
    company: "Gujarat Technological University",
    location: "India",
    duration: "2019 – 2022",
    type: "education",
    description: [
      "Studied programming languages including Java, PHP, HTML, CSS, and foundational computer science.",
    ],
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
  const skillCategories = {
    Frontend: ["React.js", "Angular", "JavaScript", "HTML5", "CSS3"],
    Backend: ["Java 11", "Spring Boot", "Node.js", "REST APIs"],
    DevOps: ["Docker", "Kubernetes", "Git"],
    Cloud: ["AWS"],
    Messaging: ["Kafka", "RabbitMQ"],
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
            Full Stack Development Journey
          </Typography>
          <Typography variant="body1" paragraph>
            I am a Java Full Stack Developer with around 3 years of experience
            building enterprise-grade applications using Java, Spring Boot,
            Angular, React, and cloud platforms like AWS. I have delivered
            scalable microservices, integrated REST APIs, and implemented secure
            systems using OAuth2 and JWT. Skilled in Docker, Kubernetes, Kafka,
            and modern CI/CD practices, I bring both backend strength and
            frontend finesse to full-stack projects.
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
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Code /> Tech Skills Summary
                </Typography>
                <Typography variant="body1" paragraph>
                  Here are the core technologies and tools I have worked with
                  professionally, organized by domain:
                </Typography>
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <Box key={category} sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {category}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            background:
                              "linear-gradient(135deg, #f12711, #f5af19)",
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
                <Button
                  variant="outlined"
                  href="/skills"
                  sx={{
                    mt: 4,
                    borderRadius: 2,
                    borderColor: "#f12711",
                    color: "#f12711",
                  }}
                >
                  View Detailed Skills →
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Experience;
