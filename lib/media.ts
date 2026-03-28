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

/** Video filenames that exist locally under /public; used for blog + videos pages. */
export const SITE_VIDEO_PATHS = [
  '/copy_23123E67-CF85-4A95-8FA6-B666B7A947FF (3).mov',
  '/1662380387137459.mov',
  '/berd.MP4',
  '/arcax.MP4.MP4',
  '/harsiPars.MP4',
  '/IMG_2686.MOV',
] as const;
