import { createTheme, type PaletteMode } from "@mui/material";

const accent = { light: "#0f9d78", dark: "#6ee7c9" };

export function createAppTheme(mode: PaletteMode) {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: { main: isDark ? accent.dark : accent.light },
      background: {
        default: isDark ? "#0a0d12" : "#f7f8fa",
        paper: isDark ? "#151a24" : "#ffffff",
      },
      text: {
        primary: isDark ? "#eef1f6" : "#14181f",
        secondary: isDark ? "#9aa4b6" : "#4c5566",
      },
      divider: isDark ? "#232a38" : "#e2e6ec",
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily: '"Inter", sans-serif',
      h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
      h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
      h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
      h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 999 },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.72rem",
          },
        },
      },
    },
  });
}
