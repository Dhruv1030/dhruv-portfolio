// Let's start with the components and core structure
// === components/Navbar.js ===
// Paste your exact Navbar code, but replace "react-router-dom" with "next/link"
import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  DarkMode,
  LightMode,
  Speed,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const SpeedIndicator = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const NavLinks = styled(Box)`
  display: flex;
  align-items: center;

  & > a {
    margin: 0 15px;
    text-decoration: none;
    color: inherit;
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;

    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #f12711, #f5af19);
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

const StyledAppBar = styled(AppBar)`
  background: ${(props) => props.theme.palette.background.paper};
  color: ${(props) => props.theme.palette.text.primary};
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const ThemeSwitchWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Box
          component="span"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Speed sx={{ mr: 1 }} /> Dhruv Patel
        </Box>
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link
              href={item.path}
              style={{
                textDecoration: "none",
                width: "100%",
                color: "inherit",
              }}
            >
              <ListItemText primary={item.name} sx={{ textAlign: "center" }} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="sticky" theme={theme}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Speed sx={{ mr: 1 }} />
              <SpeedIndicator
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Dhruv Patel
              </SpeedIndicator>
            </Box>
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <NavLinks sx={{ flexGrow: 1, justifyContent: "center" }}>
                {navItems.map((item) => (
                  <Link key={item.name} href={item.path}>
                    {item.name}
                  </Link>
                ))}
              </NavLinks>

              <ThemeSwitchWrapper>
                <DarkMode />
                <Switch
                  checked={currentTheme === "light"}
                  onChange={toggleTheme}
                  color="default"
                />
                <LightMode />
              </ThemeSwitchWrapper>
            </>
          )}
        </Toolbar>
      </StyledAppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
