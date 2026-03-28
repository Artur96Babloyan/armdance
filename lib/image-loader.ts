/**
 * - Remote (http/https): return as-is (R2, etc.).
 * - Local (/public paths): return as-is so the browser loads static files directly —
 *   avoids `/_next/image` 404s and custom-loader + `fill` width quirks in dev.
 * - Anything else: fall back to the built-in optimizer query.
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
  if (src.startsWith('/')) {
    return src;
  }
  const q = quality ?? 75;
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${q}`;
}
