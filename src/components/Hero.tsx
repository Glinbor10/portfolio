import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { Lang } from "../content";
import { hero, links } from "../content";
import { t } from "../i18n";
import photo from "../assets/guillermo.jpg";

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <Box id="top" sx={{ maxWidth: 1080, mx: "auto", px: 3, pt: { xs: 7, md: 12 }, pb: { xs: 7, md: 12 } }}>
      <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={6} sx={{ alignItems: "center" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ flex: 1.3 }}>
          <Typography variant="overline" sx={{ color: "primary.main", fontFamily: '"JetBrains Mono", monospace', letterSpacing: 1 }}>
            {t(hero.eyebrow, lang)}
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
            <Button href={links.linkedin} target="_blank" rel="noopener" variant="contained" size="large">
              LinkedIn ↗
            </Button>
            <Button href={links.github} target="_blank" rel="noopener" variant="outlined" size="large">
              GitHub ↗
            </Button>
          </Stack>

          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
            <Chip label={`🎓 ${t(hero.badge1, lang)}`} variant="outlined" />
            <Chip label={`🏢 ${t(hero.badge2, lang)}`} variant="outlined" />
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
  );
}
