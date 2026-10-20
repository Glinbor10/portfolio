import { Box, Paper, Stack, Typography } from "@mui/material";
import type { Lang } from "../content";
import { now } from "../content";
import { t } from "../i18n";
import Section from "./Section";
import GithubActivity from "./GithubActivity";

export default function NowSection({ lang }: { lang: Lang }) {
  return (
    <Section id="now" idx="03" title={t(now.title, lang)} lead={t(now.lead, lang)}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" }, gap: 3, alignItems: "start" }}>
        <Stack spacing={1.5}>
          {now.items.map((item) => (
            <Paper
              key={t(item.text, lang)}
              variant="outlined"
              sx={{
                p: 2,
                borderRadius: 2,
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
                transition: "transform 0.2s ease, border-color 0.2s ease",
                "&:hover": { borderColor: "primary.main", transform: "translateX(3px)" },
              }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>{item.emoji}</Typography>
              <Typography sx={{ color: "text.secondary" }}>{t(item.text, lang)}</Typography>
            </Paper>
          ))}
        </Stack>
        <GithubActivity lang={lang} />
      </Box>
    </Section>
  );
}
