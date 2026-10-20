import { Box, Paper, Skeleton, Stack, Typography } from "@mui/material";
import type { Bilingual, Lang } from "../content";
import { t } from "../i18n";
import { useGithubActivity } from "../hooks/useGithubActivity";

const copy = {
  live: { es: "Actividad en vivo de GitHub", en: "Live GitHub activity" } satisfies Bilingual,
  lastCommit: { es: "Último commit", en: "Last commit" } satisfies Bilingual,
  on: { es: "en", en: "on" } satisfies Bilingual,
  fallback: {
    es: "Sin datos públicos recientes de GitHub ahora mismo (puede ser el límite de la API pública).",
    en: "No recent public GitHub data right now (the public API rate limit may have kicked in).",
  } satisfies Bilingual,
};

function formatRelative(iso: string, lang: Lang): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) return lang === "es" ? `hace ${days} d` : `${days}d ago`;
  if (hours > 0) return lang === "es" ? `hace ${hours} h` : `${hours}h ago`;
  if (minutes > 0) return lang === "es" ? `hace ${minutes} min` : `${minutes}m ago`;
  return lang === "es" ? "hace un momento" : "just now";
}

export default function GithubActivity({ lang }: { lang: Lang }) {
  const activity = useGithubActivity();

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2.5,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: activity.status === "ready" ? "success.main" : "text.disabled",
            animation: activity.status === "ready" ? "glb-live 1.8s ease-in-out infinite" : "none",
            "@keyframes glb-live": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0.35 },
            },
          }}
        />
        <Typography
          variant="caption"
          sx={{ textTransform: "uppercase", letterSpacing: 0.6, color: "text.secondary", fontFamily: '"JetBrains Mono", monospace' }}
        >
          {t(copy.live, lang)}
        </Typography>
      </Stack>

      {activity.status === "loading" ? (
        <Stack spacing={0.5}>
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="60%" />
        </Stack>
      ) : activity.status === "ready" ? (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
            {t(copy.lastCommit, lang)}
          </Box>{" "}
          {t(copy.on, lang)}{" "}
          <Box component="span" sx={{ fontFamily: '"JetBrains Mono", monospace', color: "primary.main" }}>
            {activity.repo}
          </Box>{" "}
          · {formatRelative(activity.date, lang)}
          {activity.message ? (
            <>
              <br />
              &ldquo;{activity.message}&rdquo;
            </>
          ) : null}
        </Typography>
      ) : (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {t(copy.fallback, lang)}
        </Typography>
      )}

      <Box
        component="img"
        src="https://github-readme-stats.vercel.app/api?username=Glinbor10&show_icons=true&hide_title=true&theme=transparent&text_color=9aa4b6&icon_color=0f9d78&title_color=0f9d78&border_color=00000000"
        alt="GitHub stats for Glinbor10"
        loading="lazy"
        sx={{ width: "100%", maxWidth: 420, mt: 0.5 }}
      />
    </Paper>
  );
}
