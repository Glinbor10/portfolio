import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import type { Lang } from "../content";
import { about } from "../content";
import { t } from "../i18n";
import Section from "./Section";

export default function About({ lang }: { lang: Lang }) {
  return (
    <Section id="about" idx="01" title={t(about.title, lang)}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" }, gap: 5 }}>
        <Box>
          <Stack spacing={2}>
            <Typography sx={{ color: "text.secondary" }}>{t(about.p1, lang)}</Typography>
            <Typography sx={{ color: "text.secondary" }}>{t(about.p2, lang)}</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {lang === "es" ? (
                <>
                  Antes de eso me gradué en Ingeniería Informática – Ingeniería del Software por la Universidad de
                  Sevilla, donde defendí mi Trabajo de Fin de Grado (
                  <Link href="https://github.com/Glinbor10/SectorMindAI" target="_blank" rel="noopener">
                    SectorMindAI
                  </Link>
                  ) con un 9,4, y participé en{" "}
                  <Link href="https://github.com/StreetAsk-ISPP/ISPP-G10" target="_blank" rel="noopener">
                    StreetAsk
                  </Link>
                  , un proyecto de equipo (20 personas) reconocido entre los mejores de la asignatura.
                </>
              ) : (
                <>
                  Before that, I graduated in Computer Engineering – Software Engineering from the University of
                  Seville, where I defended my final degree project (
                  <Link href="https://github.com/Glinbor10/SectorMindAI" target="_blank" rel="noopener">
                    SectorMindAI
                  </Link>
                  ) with a 9.4/10, and took part in{" "}
                  <Link href="https://github.com/StreetAsk-ISPP/ISPP-G10" target="_blank" rel="noopener">
                    StreetAsk
                  </Link>
                  , a 20-person team project recognized among the best of the course.
                </>
              )}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={2}>
            {[
              { num: "4", label: t(about.stat1, lang) },
              { num: "9,4", label: t(about.stat2, lang) },
              { num: "4", label: t(about.stat3, lang) },
            ].map((stat) => (
              <Paper key={stat.label} variant="outlined" sx={{ p: 2.5, borderRadius: 3 }}>
                <Typography variant="h4" sx={{ color: "primary.main" }}>
                  {stat.num}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {stat.label}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
    </Section>
  );
}
