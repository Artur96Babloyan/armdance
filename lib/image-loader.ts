/**
 * Use the default `/_next/image` optimizer for local paths only.
 * For absolute URLs (R2, Supabase, CloudFront, etc.), return the URL as-is so the
 * browser loads the file directly — avoids 500/504 from the optimizer fetching remote media.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  const q = quality ?? 75;
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${q}`;
}
