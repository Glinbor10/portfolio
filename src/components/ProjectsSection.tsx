import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import type { Lang } from "../content";
import { projects } from "../content";
import { t } from "../i18n";
import Section from "./Section";

export default function ProjectsSection({ lang }: { lang: Lang }) {
  const labels = {
    problem: { es: "Problema", en: "Problem" },
    action: { es: "Qué hice", en: "What I did" },
    result: { es: "Resultado", en: "Result" },
  };

  return (
    <Section id="projects" idx="02" title={t(projects.title, lang)} lead={t(projects.lead, lang)}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
        {projects.items.map((project) => (
          <Card
            key={project.name}
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              gridColumn: project.featured ? { md: "span 1" } : undefined,
              transition: "transform 0.2s ease, border-color 0.2s ease",
              "&:hover": { borderColor: "primary.main", transform: "translateY(-3px)" },
            }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.2, flex: 1 }}>
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="caption" sx={{ color: "text.secondary", fontFamily: '"JetBrains Mono", monospace' }}>
                  {t(project.date, lang)}
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Typography variant="body2">
                  <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                    {t(labels.problem, lang)}:{" "}
                  </Box>
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    {t(project.problem, lang)}
                  </Box>
                </Typography>
                <Typography variant="body2">
                  <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                    {t(labels.action, lang)}:{" "}
                  </Box>
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    {t(project.action, lang)}
                  </Box>
                </Typography>
                <Typography variant="body2">
                  <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                    {t(labels.result, lang)}:{" "}
                  </Box>
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    {t(project.result, lang)}
                  </Box>
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} useFlexGap sx={{ mt: "auto", pt: 1, flexWrap: "wrap" }}>
                {project.tech.map((tech) => (
                  <Chip key={tech} label={tech} size="small" variant="outlined" color="primary" />
                ))}
              </Stack>

              <Button href={project.link} target="_blank" rel="noopener" size="small" sx={{ alignSelf: "flex-start", mt: 1 }}>
                GitHub ↗
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Section>
  );
}
