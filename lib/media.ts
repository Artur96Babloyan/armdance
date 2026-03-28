/**
 * Optional cloud/CDN base for images and videos (no trailing slash).
 * Set NEXT_PUBLIC_MEDIA_BASE_URL when files are hosted on S3, R2, Supabase Storage,
 * CloudFront, Vercel Blob, etc. Upload the same paths as in /public (e.g. /logo.jpg → {BASE}/logo.jpg).
 * Leave unset to use files from this app’s /public folder.
 */
export function getMediaUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, '') ?? '';
  const p = path.startsWith('/') ? path : `/${path}`;
  if (!base) return p;
  return `${base}${p}`;
}

/** Always loaded from /public (same-origin), not NEXT_PUBLIC_MEDIA_BASE_URL. */
export const SITE_LOGO_PATH = '/logo.jpg' as const;

/** Videos under /public or R2; keep in sync with what you actually upload to the bucket. */
export const SITE_VIDEO_PATHS = [
  '/1662380387137459.mov',
  '/berd.MP4',
  '/harsiPars.MP4',
] as const;
