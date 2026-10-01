import type { ReactNode } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  idx: string;
  title: string;
  lead?: string;
  children: ReactNode;
}

export default function Section({ id, idx, title, lead, children }: SectionProps) {
  return (
    <Box id={id} component="section" sx={{ maxWidth: 1080, mx: "auto", px: 3, py: { xs: 5, md: 7 }, borderTop: 1, borderColor: "divider" }}>
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "baseline", mb: lead ? 1 : 3.5 }}>
          <Typography component="span" sx={{ fontFamily: '"JetBrains Mono", monospace', color: "primary.main", fontSize: "0.9rem" }}>
            {idx}
          </Typography>
          <Typography variant="h4">{title}</Typography>
        </Stack>
        {lead ? (
          <Typography sx={{ color: "text.secondary", mb: 3.5, maxWidth: "60ch" }}>{lead}</Typography>
        ) : null}
        {children}
      </motion.div>
    </Box>
  );
}
