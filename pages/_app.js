import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (loading) return <Loading />;

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Cursor />
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
