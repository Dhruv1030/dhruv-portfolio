import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  alpha,
  Chip,
} from "@mui/material";
import { GitHub, Language } from "@mui/icons-material";
const featuredProject = {
  id: "highlight",
  title: "Splitwise Expense Manager (Ongoing) 🚧",
  description: `A modern expense-sharing app built with Next.js that lets users track group expenses, split bills, and settle balances. It features real-time charts, JWT authentication, responsive design, and an intuitive user experience.

🤝 **Contribute**
This is an open-source project, and I'm actively working on new features, optimizations, and UI improvements.

Whether you're into frontend, data visualization, UI/UX, or just love building cool tools — I'd love your input!

✅ Found a bug? Open an issue  
💡 Got an idea? Start a discussion or open a pull request  
🔧 Want to help? Fork it, build it, and submit a PR 🙌

Let's build something awesome together 💡`,
  image: "/images/ai-builder.jpg",
  github: "https://github.com/Dhruv1030/My-Splitwise/tree/main",
  liveDemo: "/coming-soon",
  technologies: [
    "Next.js",
    "Bootstarp5",
    "Styled Components",
    "Vercel",
    "Firebase",
  ],
};

const completedProjects = [
  {
    id: 0,
    title: "DhruvBot Pro™ — AI Assistant 🤖",
    description:
      "Chat with my AI twin trained on my experience, skills, and background. It can answer your questions, send push notifications, and log your interest — just like a smart agent should.",
    image: "/chatbot.svg", // 🔁 Replace with your actual image path
    technologies: ["OpenAI GPT-4o", "Python", "Gradio", "Pushover", "Render"],
    github: "https://github.com/Dhruv1030/dhruvbot-pro",
    liveDemo: "https://dhruvbot-pro.onrender.com",
    featured: true,
  },

  {
    id: 1,
    title: "Pig Game 🎲",
    description:
      "Fun two-player dice game. Rolling 1 resets the turn. Built with JS and styled beautifully.",
    image: "/images/pig-game.jpg",
    github: "https://github.com/Dhruv1030/Pig-Game",
    liveDemo: "https://dhruv1030.github.io/Pig-Game/",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Currency Converter 💱",
    description:
      "JavaScript-based web app for real-time currency conversion using REST APIs.",
    image: "/images/currency.jpg",
    github: "https://github.com/Dhruv1030/Currancy-convertor",
    liveDemo: "https://dhruv1030.github.io/Currancy-convertor/",
    technologies: ["JavaScript", "REST API", "Fetch"],
  },
  {
    id: 3,
    title: "E-Book Responsive Site 📚",
    description:
      "Responsive e-book platform with animations, login, search, and theme switch.",
    image: "/images/ebook.jpg",
    github: "https://github.com/Dhruv1030/E-book-Responsive-website",
    liveDemo: "#",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
];

const Projects = () => {
  const theme = useTheme();

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          My Projects
        </Typography>
      </motion.div>

      {/* Highlighted Project */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Highlighted Project 🚧
      </Typography>

      <Card
        elevation={6}
        sx={{
          mb: 10,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={featuredProject.image}
          sx={{ width: { md: "50%" }, height: "auto" }}
        />
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            {featuredProject.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {featuredProject.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            {featuredProject.technologies.map((tech, i) => (
              <Chip key={i} label={tech} size="small" />
            ))}
          </Box>
          <Button
            variant="contained"
            href={featuredProject.github}
            startIcon={<GitHub />}
            sx={{ mr: 2 }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            href={featuredProject.liveDemo}
            startIcon={<Language />}
          >
            Live Demo
          </Button>
        </CardContent>
      </Card>

      {/* Completed Projects */}
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Completed Projects ✅
      </Typography>

      <Grid container spacing={3}>
        {completedProjects.map((project) => (
          <Grid item xs={12} sm={4} md={4} key={project.id}>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <Card
                elevation={5}
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                  backdropFilter: "blur(5px)",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  sx={{
                    width: { md: "20%" },
                    height: "auto", // Or use a fixed height like "300px"
                    objectFit: "cover", // or "cover" depending on how you want it
                    backgroundColor: "#f5f5f5", // optional for visibility
                    // optional padding
                  }}
                />

                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}
                  >
                    {project.technologies.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                        }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      variant="contained"
                      href={featuredProject.github}
                      startIcon={<GitHub />}
                      sx={{ mr: 2 }}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      href={featuredProject.liveDemo}
                      startIcon={<Language />}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
