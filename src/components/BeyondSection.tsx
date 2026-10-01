import { Box, Paper, Typography } from "@mui/material";
import type { Lang } from "../content";
import { beyond } from "../content";
import { t } from "../i18n";
import Section from "./Section";

export default function BeyondSection({ lang }: { lang: Lang }) {
  return (
    <Section id="beyond" idx="06" title={t(beyond.title, lang)}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 3, mb: 3 }}>
        {beyond.cards.map((card) => (
          <Paper key={t(card.title, lang)} variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
            <Typography sx={{ fontSize: "1.8rem", mb: 1 }}>{card.emoji}</Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {t(card.title, lang)}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {t(card.text, lang)}
            </Typography>
          </Paper>
        ))}
      </Box>
      <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary", maxWidth: "60ch" }}>
        {t(beyond.note, lang)}
      </Typography>
    </Section>
  );
}
