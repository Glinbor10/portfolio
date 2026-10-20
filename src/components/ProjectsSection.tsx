import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";
import type { Lang } from "../content";
import { projects } from "../content";
import { t } from "../i18n";
import Section from "./Section";

const liveLabel = { es: "En producción", en: "Live" };

export default function ProjectsSection({ lang }: { lang: Lang }) {
  const labels = {
    problem: { es: "Problema", en: "Problem" },
    action: { es: "Qué hice", en: "What I did" },
    result: { es: "Resultado", en: "Result" },
  };

  return (
    <Section id="projects" idx="02" title={t(projects.title, lang)} lead={t(projects.lead, lang)}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
        {projects.items.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Card
              variant="outlined"
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: 3,
                overflow: "hidden",
                transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                "&:hover": { borderColor: "primary.main", transform: "translateY(-3px)", boxShadow: 6 },
                "&::before": project.liveLink
                  ? {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: "linear-gradient(90deg, var(--mui-palette-primary-main), transparent)",
                    }
                  : undefined,
              }}
            >
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.2, flex: 1 }}>
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 1 }}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Typography variant="h6">{project.name}</Typography>
                    {project.liveLink ? (
                      <Chip
                        size="small"
                        color="primary"
                        label={t(liveLabel, lang)}
                        sx={{
                          height: 20,
                          fontSize: "0.65rem",
                          "& .MuiChip-label": { px: 1 },
                          animation: "glb-pulse 2.4s ease-in-out infinite",
                          "@keyframes glb-pulse": {
                            "0%, 100%": { opacity: 1 },
                            "50%": { opacity: 0.55 },
                          },
                        }}
                      />
                    ) : null}
                  </Stack>
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

                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  <Button href={project.link} target="_blank" rel="noopener" size="small" sx={{ alignSelf: "flex-start" }}>
                    GitHub ↗
                  </Button>
                  {project.liveLink ? (
                    <Button
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener"
                      size="small"
                      variant="outlined"
                      color="primary"
                      endIcon={<OpenInNewIcon sx={{ fontSize: "0.9rem !important" }} />}
                      sx={{ alignSelf: "flex-start" }}
                    >
                      {t(liveLabel, lang)}
                    </Button>
                  ) : null}
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Section>
  );
}
