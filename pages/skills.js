import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  LinearProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";

const GradientText = styled.span`
  background: linear-gradient(90deg, #f12711, #f5af19);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsSection = styled(Box)`
  padding: 120px 0;
`;

const SkillCard = styled(Paper)`
  padding: 24px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(241, 39, 17, 0.5);
  }
`;

const IconWrapper = styled(Box)`
  font-size: 48px;
  margin-bottom: 16px;
  color: ${(props) => props.color};
`;

const StyledLinearProgress = styled(LinearProgress)`
  height: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 8px;

  & .MuiLinearProgress-bar {
    background: linear-gradient(90deg, #f12711, #f5af19);
  }
`;

const SkillsGrid = styled(Grid)`
  margin-top: 60px;
`;

const TechStack = styled(Box)`
  margin-top: 80px;
  border-radius: 16px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;
const TechIcon = styled(Box)`
  font-size: 56px;
  margin: 0 16px;
  color: ${(props) => props.color || props.theme.palette.text.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    color: ${(props) => props.hoverColor || "#f12711"};
  }
`;

const Skills = () => {
  const skills = [
    { name: "React", icon: <SiReact />, color: "#61DAFB", level: 90 },
    { name: "Next.js", icon: <SiNextdotjs />, color: "white", level: 85 },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 90 },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", level: 95 },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6", level: 85 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#38B2AC",
      level: 80,
    },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 75 },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC", level: 80 },
  ];

  const techStack = [
    { icon: <SiReact />, color: "#61DAFB", name: "React" },
    { icon: <SiNextdotjs />, color: "white", name: "Next.js" },
    { icon: <SiJavascript />, color: "#F7DF1E", name: "JavaScript" },
    { icon: <SiTypescript />, color: "#3178C6", name: "TypeScript" },
    { icon: <SiRedux />, color: "#764ABC", name: "Redux" },
    { icon: <SiTailwindcss />, color: "#38B2AC", name: "Tailwind" },
    { icon: <SiGit />, color: "#F05032", name: "Git" },
    { icon: <SiNodedotjs />, color: "#339933", name: "Node.js" },
  ];

  return (
    <Container maxWidth="xl">
      <SkillsSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            My <GradientText>Skills</GradientText>
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, maxWidth: "800px" }}>
            I combine technical expertise with a keen eye for detail to build
            seamless and high-performing web experiences. Here is my
            toolkit&quot;
          </Typography>

          <SkillsGrid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SkillCard elevation={0}>
                    <IconWrapper color={skill.color}>{skill.icon}</IconWrapper>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {skill.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography variant="body2">Proficiency</Typography>
                      <Typography variant="body2">{skill.level}%</Typography>
                    </Box>
                    <StyledLinearProgress
                      variant="determinate"
                      value={skill.level}
                    />
                  </SkillCard>
                </motion.div>
              </Grid>
            ))}
          </SkillsGrid>

          <TechStack>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ mb: 4, textAlign: "center" }}
            >
              Tech <GradientText>Stack</GradientText>
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 4,
              }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <TechIcon color={tech.color}>{tech.icon}</TechIcon>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {tech.name}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </TechStack>
        </motion.div>
      </SkillsSection>
    </Container>
  );
};

export default Skills;
