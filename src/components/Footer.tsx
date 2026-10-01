import { Box, Stack, Typography } from "@mui/material";
import type { Lang } from "../content";
import { footer } from "../content";
import { t } from "../i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", py: 3 }}>
      <Stack direction="row" sx={{ justifyContent: "space-between", maxWidth: 1080, mx: "auto", px: 3, color: "text.secondary" }}>
        <Typography variant="caption">© 2026 Guillermo Linares Borrego</Typography>
        <Typography variant="caption">{t(footer.loc, lang)}</Typography>
      </Stack>
    </Box>
  );
}
