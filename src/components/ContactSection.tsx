import { Box, Button, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import type { Lang } from "../content";
import { contact, links } from "../content";
import { t } from "../i18n";
import Section from "./Section";

export default function ContactSection({ lang }: { lang: Lang }) {
  return (
    <Section id="contact" idx="07" title={t(contact.title, lang)}>
      <Box sx={{ textAlign: "center", pb: 4 }}>
        <Typography sx={{ color: "text.secondary", mb: 3, maxWidth: "50ch", mx: "auto" }}>{t(contact.lead, lang)}</Typography>
        <Stack direction="row" spacing={2} useFlexGap sx={{ justifyContent: "center", flexWrap: "wrap" }}>
          <Button href={links.linkedin} target="_blank" rel="noopener" variant="contained" size="large" startIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
          <Button href={links.github} target="_blank" rel="noopener" variant="outlined" size="large" startIcon={<GitHubIcon />}>
            GitHub
          </Button>
          <Button href={links.email} variant="outlined" size="large" startIcon={<EmailIcon />}>
            {links.emailDisplay}
          </Button>
        </Stack>
      </Box>
    </Section>
  );
}
