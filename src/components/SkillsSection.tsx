import { Box, Stack, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import type { Lang } from "../content";
import { skills } from "../content";
import { t } from "../i18n";
import Section from "./Section";

export default function SkillsSection({ lang }: { lang: Lang }) {
  return (
    <Section id="skills" idx="05" title={t(skills.title, lang)}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(auto-fit, minmax(220px, 1fr))" }, gap: 3 }}>
        {skills.groups.map((group) => (
          <Box key={t(group.title, lang)}>
            <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
              {t(group.title, lang)}
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
              {group.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" color="primary" />
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
