import { Box, Paper, Stack, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import type { Lang, NowIcon } from "../content";
import { now } from "../content";
import { t } from "../i18n";
import Section from "./Section";
import GithubActivity from "./GithubActivity";

const icons: Record<NowIcon, typeof HomeRoundedIcon> = {
  home: HomeRoundedIcon,
  rocket: RocketLaunchRoundedIcon,
  lock: LockRoundedIcon,
  brain: PsychologyRoundedIcon,
  coffee: LocalCafeRoundedIcon,
};

export default function NowSection({ lang }: { lang: Lang }) {
  return (
    <Section id="now" idx="03" title={t(now.title, lang)} lead={t(now.lead, lang)}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" }, gap: 3, alignItems: "start" }}>
        <Stack spacing={1.5}>
          {now.items.map((item) => {
            const Icon = icons[item.icon];
            return (
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
                <Icon sx={{ fontSize: "1.3rem", color: "primary.main", flexShrink: 0, mt: "2px" }} />
                <Typography sx={{ color: "text.secondary" }}>{t(item.text, lang)}</Typography>
              </Paper>
            );
          })}
        </Stack>
        <GithubActivity lang={lang} />
      </Box>
    </Section>
  );
}
