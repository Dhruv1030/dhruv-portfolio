// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   CardActions,
//   Button,
//   Chip,
//   useTheme,
//   alpha,
// } from "@mui/material";
// import { GitHub, Language, Code } from "@mui/icons-material";

// const project = {
//   id: 1,
//   title: "Pig Game – A Classic Dice Game 🎲",
//   description:
//     "A fun two-player dice game where players take turns rolling the dice to reach a target score. Be strategic—rolling a 1 resets your turn score! Built using JavaScript for interactive gameplay. 🚀",
//   technologies: ["HTML", "Tailwind CSS", "Styled Components", "JavaScript"],
//   github: "https://github.com/Dhruv1030/Pig-Game",
//   liveDemo: "https://dhruv1030.github.io/Pig-Game/",
//   featured: true,
// };

// const projectsData = [
//   {
//     id: 1,
//     title: "Pig Game – A Classic Dice Game 🎲 ",
//     description:
//       "A fun two-player dice game where players take turns rolling the dice to reach a target score. Be strategic—rolling a 1 resets your turn score! Built using JavaScript for interactive gameplay. 🚀 ",
//     image: "#", // Replace with actual path
//     technologies: ["HTMML", "Tailwind CSS", "Styled Components", "JAVA SCRIPT"],
//     github: "https://github.com/Dhruv1030/Pig-Game",
//     liveDemo: "https://dhruv1030.github.io/Pig-Game/",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Currency Converter",
//     description:
//       "A fully functional JavaScript web application using APIs for real-time currency exchange rates. Implements advanced JavaScript concepts including promises, async functions, and fetch API.",
//     image: "/images/currency.jpg", // Replace with actual path
//     technologies: ["JavaScript", "REST API", "Async/Await", "Fetch API"],
//     github: "#",
//     liveDemo: "#",
//     featured: true,
//   },
//   {
//     id: 3,
//     title: "E-Book Responsive Website",
//     description:
//       "A responsive e-book website built with HTML, CSS, and JavaScript. Features include dark/light theme, animations, search functionality, and a login model. Compatible with all mobile devices.",
//     image: "/images/ebook.jpg", // Replace with actual path
//     technologies: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Bundle JS",
//       "Responsive Design",
//     ],
//     github: "#",
//     liveDemo: "#",
//     featured: false,
//   },
// ];

// const Projects = () => {
//   const theme = useTheme();
//   const [selectedFilter, setSelectedFilter] = useState("all");
//   const [filteredProjects, setFilteredProjects] = useState(projectsData);

//   useEffect(() => {
//     if (selectedFilter === "all") {
//       setFilteredProjects(projectsData);
//     } else if (selectedFilter === "featured") {
//       setFilteredProjects(projectsData.filter((project) => project.featured));
//     }
//   }, [selectedFilter]);

//   // Extract unique technologies for filter chips
//   const allTechnologies = [
//     ...new Set(projectsData.flatMap((project) => project.technologies)),
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Typography
//           variant="h2"
//           component="h1"
//           align="center"
//           sx={{
//             fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
//             fontWeight: 700,
//             mb: 6,
//             background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           My Projects
//         </Typography>
//       </motion.div>

//       <Box
//         sx={{
//           mb: 4,
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: 1,
//         }}
//       >
//         <Chip
//           label="All Projects"
//           onClick={() => setSelectedFilter("all")}
//           color={selectedFilter === "all" ? "primary" : "default"}
//           variant={selectedFilter === "all" ? "filled" : "outlined"}
//           sx={{ mb: 1 }}
//         />
//         <Chip
//           label="Featured"
//           onClick={() => setSelectedFilter("featured")}
//           color={selectedFilter === "featured" ? "primary" : "default"}
//           variant={selectedFilter === "featured" ? "filled" : "outlined"}
//           sx={{ mb: 1 }}
//         />
//       </Box>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <Grid container spacing={3}>
//           {filteredProjects.map((project) => (
//             <Grid item key={project.id} xs={12} sm={6} md={4}>
//               <motion.div variants={itemVariants}>
//                 <Card
//                   elevation={6}
//                   sx={{
//                     height: "10%",
//                     display: "flex",
//                     flexDirection: "column",
//                     transition:
//                       "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//                     "&:hover": {
//                       transform: "translateY(-8px)",
//                       boxShadow: `0 14px 28px ${alpha(
//                         theme.palette.primary.main,
//                         0.2
//                       )}`,
//                     },
//                     position: "relative",
//                     overflow: "hidden",
//                     bgcolor:
//                       theme.palette.mode === "dark"
//                         ? alpha(theme.palette.background.paper, 0.8)
//                         : theme.palette.background.paper,
//                     backdropFilter: "blur(5px)",
//                   }}
//                 >
//                   {project.featured && (
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 0,
//                         right: 0,
//                         bgcolor: theme.palette.secondary.main,
//                         color: theme.palette.secondary.contrastText,
//                         px: 2,
//                         py: 0.5,
//                         transform: "rotate(45deg) translate(15px, -15px)",
//                         transformOrigin: "top right",
//                         zIndex: 1,
//                       }}
//                     >
//                       <Typography variant="caption">Featured</Typography>
//                     </Box>
//                   )}
//                   <CardMedia
//                     component="div"
//                     sx={{
//                       pt: "56.25%", // 16:9 aspect ratio
//                       position: "relative",
//                       overflow: "hidden",
//                     }}
//                     image={project.image}
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography
//                       variant="h6"
//                       component="h3"
//                       sx={{
//                         fontWeight: 600,
//                         fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
//                       }}
//                     >
//                       {project.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       paragraph
//                     >
//                       {project.description}
//                     </Typography>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexWrap: "wrap",
//                         gap: 0.5,
//                         mt: 2,
//                       }}
//                     >
//                       {project.technologies.map((tech, index) => (
//                         <Chip
//                           key={index}
//                           label={tech}
//                           size="small"
//                           sx={{
//                             bgcolor: alpha(theme.palette.primary.main, 0.1),
//                             color: theme.palette.primary.main,
//                             fontSize: "0.7rem",
//                           }}
//                         />
//                       ))}
//                     </Box>
//                   </CardContent>
//                   <CardActions
//                     sx={{ justifyContent: "space-between", px: 2, pb: 2 }}
//                   >
//                     <Button
//                       size="small"
//                       startIcon={<GitHub />}
//                       href={project.github}
//                       target="_blank"
//                     >
//                       GitHub
//                     </Button>
//                     <Button
//                       size="small"
//                       startIcon={<Language />}
//                       href={project.liveDemo}
//                       target="_blank"
//                     >
//                       Live Demo
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </motion.div>
//     </Container>
//   );
// };

// export default Projects;

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
                  height="180"
                  image={project.image}
                  alt={project.title}
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
                      size="small"
                      href={project.github}
                      startIcon={<GitHub />}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      href={project.liveDemo}
                      startIcon={<Language />}
                      target="_blank"
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
