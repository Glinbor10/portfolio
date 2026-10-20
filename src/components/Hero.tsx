import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import { motion } from "framer-motion";
import type { Lang } from "../content";
import { hero, links } from "../content";
import { t } from "../i18n";
import photo from "../assets/guillermo.jpg";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero({ lang }: { lang: Lang }) {
  const eyebrowText = t(hero.eyebrow, lang);
  const typedEyebrow = useTypewriter(eyebrowText);

  return (
    <Box id="top" sx={{ position: "relative", overflow: "hidden" }}>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          color: "divider",
          maskImage: "radial-gradient(ellipse 80% 60% at 70% 20%, black, transparent)",
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1080, mx: "auto", px: 3, pt: { xs: 7, md: 12 }, pb: { xs: 7, md: 12 } }}>
        <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={6} sx={{ alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ flex: 1.3 }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontFamily: '"JetBrains Mono", monospace',
                letterSpacing: 1,
                display: "inline-flex",
                alignItems: "center",
                minHeight: "1.4em",
              }}
            >
              {typedEyebrow}
              <Box
                component="span"
                aria-hidden
                sx={{
                  display: "inline-block",
                  width: "0.55em",
                  height: "1em",
                  ml: "2px",
                  bgcolor: "primary.main",
                  animation: "glb-caret 1s step-end infinite",
                  "@keyframes glb-caret": { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0 } },
                }}
              />
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.6rem" }, lineHeight: 1.1, mt: 1.5, mb: 2.5 }}>
              Guillermo Linares
              <br />
              Borrego
            </Typography>
            <Typography variant="h6" component="p" sx={{ color: "text.secondary", fontWeight: 400, maxWidth: 480 }}>
              {t(hero.tagline, lang)}
            </Typography>

            <Stack direction="row" spacing={1.5} useFlexGap sx={{ mt: 4, mb: 3, flexWrap: "wrap" }}>
              <Button href={links.linkedin} target="_blank" rel="noopener" variant="contained" size="large" startIcon={<LinkedInIcon />}>
                LinkedIn
              </Button>
              <Button href={links.github} target="_blank" rel="noopener" variant="outlined" size="large" startIcon={<GitHubIcon />}>
                GitHub
              </Button>
              <Button href={links.email} variant="outlined" size="large" startIcon={<EmailIcon />}>
                Email
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
              <Chip icon={<SchoolRoundedIcon />} label={t(hero.badge1, lang)} variant="outlined" />
              <Chip icon={<BusinessRoundedIcon />} label={t(hero.badge2, lang)} variant="outlined" />
            </Stack>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <Box
              component="img"
              src={photo}
              alt="Guillermo Linares Borrego"
              sx={{
                width: { xs: 220, md: 280 },
                aspectRatio: "4 / 5",
                objectFit: "cover",
                borderRadius: 5,
                border: 1,
                borderColor: "divider",
                boxShadow: 10,
              }}
            />
          </motion.div>
        </Stack>
      </Box>
    </Box>
  );
}
