import React from "react";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Home, RocketLaunch } from "@mui/icons-material";
import Link from "next/link";

const ComingSoon = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 10, textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2.4rem", md: "3rem" },
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 3,
          }}
        >
          🚀 Something Awesome is Coming!
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", color: "text.secondary", mb: 4 }}
        >
          I am cooking up a brand new project. It is not quite ready yet, but
          stay tuned!
        </Typography>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Box
            component="img"
            src="/images/under-construction.svg"
            alt="Coming Soon"
            sx={{ maxWidth: "100%", height: "auto", mb: 4 }}
          />
        </motion.div>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            component={Link}
            href="/"
            variant="outlined"
            startIcon={<Home />}
          >
            Back to Home
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<RocketLaunch />}
            onClick={() => alert("Subscribe feature coming soon!")}
          >
            Notify Me
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ComingSoon;
