import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import type { Lang } from "../content";
import { nav } from "../content";
import { t } from "../i18n";
import { useActiveSection } from "../hooks/useActiveSection";

const sections: { id: string; label: keyof typeof nav }[] = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "now", label: "now" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "beyond", label: "beyond" },
];

const sectionIds = sections.map((s) => s.id);

interface HeaderProps {
  lang: Lang;
  onToggleLang: () => void;
  mode: "light" | "dark";
  onToggleMode: () => void;
}

export default function Header({ lang, onToggleLang, mode, onToggleMode }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const activeId = useActiveSection(sectionIds);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(14px)",
        bgcolor: mode === "dark" ? "rgba(10,13,18,0.78)" : "rgba(247,248,250,0.82)",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ maxWidth: 1080, width: "100%", mx: "auto", gap: 3 }}>
        <Typography
          component="a"
          href="#top"
          variant="h6"
          sx={{ fontWeight: 700, color: "text.primary", textDecoration: "none", letterSpacing: 0.4 }}
        >
          GLB
          <Box component="span" sx={{ color: "primary.main" }}>
            .
          </Box>
        </Typography>

        {isMobile ? null : (
          <Stack direction="row" spacing={3} sx={{ flex: 1 }}>
            {sections.map((s) => {
              const isActive = s.id === activeId;
              return (
                <Typography
                  key={s.id}
                  component="a"
                  href={`#${s.id}`}
                  variant="body2"
                  sx={{
                    position: "relative",
                    color: isActive ? "primary.main" : "text.secondary",
                    textDecoration: "none",
                    fontWeight: isActive ? 700 : 500,
                    transition: "color 0.2s ease",
                    "&:hover": { color: "text.primary" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: isActive ? 0 : "100%",
                      bottom: -4,
                      height: 2,
                      borderRadius: 1,
                      bgcolor: "primary.main",
                      transition: "right 0.25s ease",
                    },
                  }}
                >
                  {t(nav[s.label], lang)}
                </Typography>
              );
            })}
          </Stack>
        )}

        <Box sx={{ flex: isMobile ? 1 : 0 }} />

        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Button
            onClick={onToggleLang}
            size="small"
            variant="outlined"
            sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.78rem", px: 1.5, borderRadius: 999 }}
          >
            <Box component="span" sx={{ color: lang === "es" ? "primary.main" : "text.secondary", fontWeight: lang === "es" ? 700 : 400 }}>
              ES
            </Box>
            <Box component="span" sx={{ mx: 0.5, opacity: 0.4 }}>
              /
            </Box>
            <Box component="span" sx={{ color: lang === "en" ? "primary.main" : "text.secondary", fontWeight: lang === "en" ? 700 : 400 }}>
              EN
            </Box>
          </Button>

          <IconButton onClick={onToggleMode} size="small" sx={{ border: 1, borderColor: "divider" }}>
            {mode === "dark" ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
          </IconButton>

          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Button href="#contact" variant="outlined" size="small">
              {t(nav.contact, lang)}
            </Button>
          )}
        </Stack>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 240 }}>
          {sections.map((s) => (
            <ListItemButton key={s.id} component="a" href={`#${s.id}`} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={t(nav[s.label], lang)} />
            </ListItemButton>
          ))}
          <ListItemButton component="a" href="#contact" onClick={() => setDrawerOpen(false)}>
            <ListItemText primary={t(nav.contact, lang)} />
          </ListItemButton>
        </List>
      </Drawer>
    </AppBar>
  );
}
