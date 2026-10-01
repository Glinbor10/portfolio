import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import type { Lang } from "../content";
import { experience } from "../content";
import { t } from "../i18n";
import Section from "./Section";

export default function ExperienceSection({ lang }: { lang: Lang }) {
  return (
    <Section id="experience" idx="04" title={t(experience.title, lang)}>
      <Timeline sx={{ p: 0, m: 0, "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 } }}>
        {experience.jobs.map((job, index) => (
          <TimelineItem key={t(job.role, lang)}>
            <TimelineSeparator>
              <TimelineDot color={job.current ? "primary" : "grey"} variant={job.current ? "filled" : "outlined"} />
              {index < experience.jobs.length - 1 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent sx={{ pb: 4 }}>
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
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
