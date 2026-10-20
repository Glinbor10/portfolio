import { SvgIcon, type SvgIconProps } from "@mui/material";

/**
 * Small hand-drawn-style line icons, sketched specifically for this page
 * instead of reaching for stock Material icons or emoji.
 */

export function HandballIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="7.2" />
        <line x1="12" y1="4.8" x2="12" y2="19.2" />
        <path d="M12 4.8c-4 2.5-4 12.1 0 14.4" />
        <path d="M12 4.8c4 2.5 4 12.1 0 14.4" />
      </g>
    </SvgIcon>
  );
}

export function DiningIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        <line x1="12" y1="8" x2="12" y2="5.3" />
        <circle cx="12" cy="4.3" r="1" fill="currentColor" stroke="none" />
        <line x1="2.5" y1="16" x2="21.5" y2="16" />
        <line x1="3.5" y1="19" x2="20.5" y2="19" />
      </g>
    </SvgIcon>
  );
}

export function MusicGlyphIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="17.3" r="2.2" fill="currentColor" stroke="none" />
        <circle cx="16" cy="15.3" r="2.2" fill="currentColor" stroke="none" />
        <path d="M9.2 17.3V6.5l8.8-2v10.8" />
        <path d="M9.2 9l8.8-2" />
      </g>
    </SvgIcon>
  );
}
