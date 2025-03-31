import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
  alpha,
  Card,
  CardContent,
  Snackbar,
  Alert,
  IconButton,
  Tooltip,
  Link,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Send,
  ArrowForward,
} from "@mui/icons-material";

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real scenario, you would send this data to a server
      console.log("Form data submitted:", formData);

      // Show success message
      setSnackbar({
        open: true,
        message: "Your message has been sent successfully!",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setSnackbar({
        open: true,
        message: "Please fix the errors in the form.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: "1.5rem" }} />,
      title: "Email",
      value: "dp14798@gmail.com",
      link: "mailto:dp14798@gmail.com",
      color: theme.palette.primary.main,
    },
    {
      icon: <Phone sx={{ fontSize: "1.5rem" }} />,
      title: "Phone",
      value: "+1 (438)-779-7004",
      link: "tel:+14387797004",
      color: theme.palette.secondary.main,
    },
    {
      icon: <LocationOn sx={{ fontSize: "1.5rem" }} />,
      title: "Location",
      value: "Toronto, ON",
      link: null,
      color: theme.palette.error.main,
    },
    {
      icon: <LinkedIn sx={{ fontSize: "1.5rem" }} />,
      title: "LinkedIn",
      value: "dhruvp18",
      link: "https://www.linkedin.com/in/dhruvp18/",
      color: "#0077b5",
    },
    {
      icon: <GitHub sx={{ fontSize: "1.5rem" }} />,
      title: "GitHub",
      value: "Dhruv1030",
      link: "https://github.com/Dhruv1030",
      color: theme.palette.mode === "dark" ? "#ffffff" : "#24292e",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
            fontSize: { xs: "2rem", md: "2.5rem" },
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get In Touch
        </Typography>
      </motion.div>

      {/* Main content section with two columns */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mb: 8,
        }}
      >
        {/* Left column - Contact Information */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                fontSize: { xs: "1.25rem", md: "1.25rem" },
              }}
            >
              Contact Information
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1rem" }}>
              Feel free to reach out through any of the following channels. I am
              always open to new opportunities and collaborations.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: { xs: 4, md: 0 },
            }}
          >
            {contactInfo.map((info) => (
              <motion.div key={info.title} variants={itemVariants}>
                <Card
                  elevation={3}
                  sx={{
                    borderLeft: `4px solid ${info.color}`,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateX(8px)",
                      boxShadow: `0 8px 16px ${alpha(info.color, 0.2)}`,
                    },
                  }}
                >
                  <CardContent sx={{ py: 1.5 }}>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item>
                        <Box
                          sx={{
                            p: 1,
                            borderRadius: "50%",
                            bgcolor: alpha(info.color, 0.1),
                            color: info.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {info.icon}
                        </Box>
                      </Grid>
                      <Grid item xs>
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          sx={{ fontSize: "1rem" }}
                        >
                          {info.title}
                        </Typography>
                        {info.link ? (
                          <Link
                            href={info.link}
                            underline="hover"
                            target={
                              info.link.startsWith("http") ? "_blank" : "_self"
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : ""
                            }
                            sx={{
                              color: "text.primary",
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              width: "fit-content",
                              fontSize: "0.9rem",
                            }}
                          >
                            {info.value}
                            <ArrowForward sx={{ fontSize: "0.9rem" }} />
                          </Link>
                        ) : (
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ fontSize: "0.9rem" }}
                          >
                            {info.value}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Right column - Contact Form */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            width: { xs: "100%", md: "60%" },
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.background.paper,
                0.9
              )}, ${alpha(theme.palette.background.paper, 0.6)})`,
              backdropFilter: "blur(10px)",
              boxShadow: `0 8px 32px ${alpha(
                theme.palette.primary.main,
                0.15
              )}`,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
                color: theme.palette.primary.main,
                fontSize: { xs: "1.25rem", md: "1.25rem" },
              }}
            >
              Send Me a Message
            </Typography>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Grid item container spacing={3} sx={{ flex: "0 0 auto" }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                      variant="outlined"
                      InputProps={{ style: { fontSize: "0.9rem" } }}
                      InputLabelProps={{ style: { fontSize: "0.9rem" } }}
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                      variant="outlined"
                      InputProps={{ style: { fontSize: "0.9rem" } }}
                      InputLabelProps={{ style: { fontSize: "0.9rem" } }}
                      size="small"
                    />
                  </Grid>
                </Grid>

                <Grid item sx={{ flex: "0 0 auto" }}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{ style: { fontSize: "0.9rem" } }}
                    InputLabelProps={{ style: { fontSize: "0.9rem" } }}
                    size="small"
                  />
                </Grid>

                <Grid
                  item
                  sx={{
                    flex: "1 1 auto",
                    minHeight: { xs: "150px", md: "180px" },
                  }}
                >
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    multiline
                    rows={7}
                    required
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "0.9rem",
                        height: "100%",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: "0.9rem" } }}
                    sx={{
                      height: "100%",
                      "& .MuiOutlinedInput-root": {
                        height: "100%",
                      },
                      "& .MuiInputBase-inputMultiline": {
                        height: "100% !important",
                      },
                    }}
                  />
                </Grid>

                <Grid item sx={{ flex: "0 0 auto", mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="medium"
                    endIcon={<Send sx={{ fontSize: "1.1rem" }} />}
                    sx={{
                      py: 1,
                      px: 3,
                      borderRadius: 2,
                      fontSize: "0.9rem",
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      boxShadow: `0 4px 20px ${alpha(
                        theme.palette.primary.main,
                        0.4
                      )}`,
                      "&:hover": {
                        background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                        boxShadow: `0 6px 25px ${alpha(
                          theme.palette.primary.main,
                          0.6
                        )}`,
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Box>

      {/* Bottom section */}
      <Box sx={{ mt: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.background.paper,
                0.8
              )}, ${alpha(theme.palette.background.paper, 0.5)})`,
              backdropFilter: "blur(10px)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                fontSize: { xs: "1.25rem", md: "1.25rem" },
              }}
            >
              Let us Work Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 700,
                mx: "auto",
                mb: 3,
                fontSize: "1rem",
              }}
            >
              Whether you have a project in mind, job opportunity, or just want
              to say hello, I am always open to new connections and
              collaborations.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/dhruvp18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#0077b5",
                    bgcolor: alpha("#0077b5", 0.1),
                    "&:hover": { bgcolor: alpha("#0077b5", 0.2) },
                    p: 1.5,
                  }}
                >
                  <LinkedIn sx={{ fontSize: "1.5rem" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href="https://github.com/Dhruv1030"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color:
                      theme.palette.mode === "dark" ? "#ffffff" : "#24292e",
                    bgcolor: alpha(
                      theme.palette.mode === "dark" ? "#ffffff" : "#24292e",
                      0.1
                    ),
                    "&:hover": {
                      bgcolor: alpha(
                        theme.palette.mode === "dark" ? "#ffffff" : "#24292e",
                        0.2
                      ),
                    },
                    p: 1.5,
                  }}
                >
                  <GitHub sx={{ fontSize: "1.5rem" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email">
                <IconButton
                  component="a"
                  href="mailto:dp14798@gmail.com"
                  sx={{
                    color: theme.palette.primary.main,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    "&:hover": {
                      bgcolor: alpha(theme.palette.primary.main, 0.2),
                    },
                    p: 1.5,
                  }}
                >
                  <Email sx={{ fontSize: "1.5rem" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Phone">
                <IconButton
                  component="a"
                  href="tel:+14387797004"
                  sx={{
                    color: theme.palette.secondary.main,
                    bgcolor: alpha(theme.palette.secondary.main, 0.1),
                    "&:hover": {
                      bgcolor: alpha(theme.palette.secondary.main, 0.2),
                    },
                    p: 1.5,
                  }}
                >
                  <Phone sx={{ fontSize: "1.5rem" }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Paper>
        </motion.div>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
