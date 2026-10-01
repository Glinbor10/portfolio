import { useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import type { Lang } from "./content";
import { createAppTheme } from "./theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import NowSection from "./components/NowSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import BeyondSection from "./components/BeyondSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function readStoredLang(): Lang {
  const stored = localStorage.getItem("glb-lang");
  return stored === "en" ? "en" : "es";
}

function readStoredMode(): "light" | "dark" {
  const stored = localStorage.getItem("glb-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => readStoredLang());
  const [mode, setMode] = useState<"light" | "dark">(() => readStoredMode());

  const handleToggleLang = () => {
    const next = lang === "es" ? "en" : "es";
    setLang(next);
    localStorage.setItem("glb-lang", next);
  };

  const handleToggleMode = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    localStorage.setItem("glb-theme", next);
  };

  return (
    <ThemeProvider theme={createAppTheme(mode)}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <Header lang={lang} onToggleLang={handleToggleLang} mode={mode} onToggleMode={handleToggleMode} />
        <Hero lang={lang} />
        <About lang={lang} />
        <ProjectsSection lang={lang} />
        <NowSection lang={lang} />
        <ExperienceSection lang={lang} />
        <SkillsSection lang={lang} />
        <BeyondSection lang={lang} />
        <ContactSection lang={lang} />
        <Footer lang={lang} />
      </Box>
    </ThemeProvider>
  );
}
