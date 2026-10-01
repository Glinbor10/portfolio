import { Box, Stack, Typography } from "@mui/material";
import type { Lang } from "../content";
import { experience } from "../content";
import { t } from "../i18n";
import Section from "./Section";

export default function ExperienceSection({ lang }: { lang: Lang }) {
  return (
    <Section id="experience" idx="04" title={t(experience.title, lang)}>
      <Box sx={{ position: "relative", pl: 4 }}>
        <Box sx={{ position: "absolute", left: 5, top: 6, bottom: 6, width: 2, bgcolor: "divider" }} />
        {experience.jobs.map((job, index) => (
          <Box key={t(job.role, lang)} sx={{ position: "relative", pb: index < experience.jobs.length - 1 ? 4 : 0 }}>
            <Box
              sx={{
                position: "absolute",
                left: -28,
                top: 5,
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: job.current ? "primary.main" : "background.default",
                border: 2,
                borderColor: job.current ? "primary.main" : "text.secondary",
                boxShadow: job.current ? "0 0 0 4px rgba(15,157,120,0.18)" : "none",
              }}
            />
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
              <Typography variant="h6">{t(job.role, lang)}</Typography>
              <Typography variant="caption" sx={{ color: "text.secondary", fontFamily: '"JetBrains Mono", monospace' }}>
                {t(job.date, lang)}
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "primary.main", mb: 1 }}>
              {job.org}
            </Typography>
            {job.bullets.length > 0 ? (
              <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                {job.bullets.map((bullet) => (
                  <Typography key={t(bullet, lang)} component="li" variant="body2" sx={{ mb: 0.5 }}>
                    {t(bullet, lang)}
                  </Typography>
                ))}
              </Box>
            ) : null}
          </Box>
        ))}
      </Box>
    </Section>
  );
}
