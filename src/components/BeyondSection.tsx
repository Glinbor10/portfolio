import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { BeyondIcon, Lang } from "../content";
import { beyond } from "../content";
import { t } from "../i18n";
import Section from "./Section";
import { DiningIcon, HandballIcon, MusicGlyphIcon } from "./icons/BeyondIcons";

const icons: Record<BeyondIcon, typeof HandballIcon> = {
  handball: HandballIcon,
  hospitality: DiningIcon,
  music: MusicGlyphIcon,
};

export default function BeyondSection({ lang }: { lang: Lang }) {
  return (
    <Section id="beyond" idx="06" title={t(beyond.title, lang)}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 3, mb: 3 }}>
        {beyond.cards.map((card, i) => {
          const Icon = icons[card.icon];
          return (
            <motion.div
              key={t(card.title, lang)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                  "&:hover": { borderColor: "primary.main", transform: "translateY(-3px)" },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    bgcolor: (theme) => (theme.palette.mode === "dark" ? "rgba(110, 231, 201, 0.12)" : "rgba(15, 157, 120, 0.1)"),
                    color: "primary.main",
                  }}
                >
                  <Icon sx={{ fontSize: "1.6rem" }} />
                </Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {t(card.title, lang)}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {t(card.text, lang)}
                </Typography>
              </Paper>
            </motion.div>
          );
        })}
      </Box>
      <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary", maxWidth: "60ch" }}>
        {t(beyond.note, lang)}
      </Typography>
    </Section>
  );
}
