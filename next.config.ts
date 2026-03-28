import type { NextConfig } from "next";

function mediaRemotePatterns(): NonNullable<NextConfig["images"]>["remotePatterns"] {
  const patterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
    {
      protocol: "https",
      hostname: "*.r2.dev",
      pathname: "/**",
    },
  ];

  const base = process.env.NEXT_PUBLIC_MEDIA_BASE_URL;
  if (!base) return patterns;
  try {
    const u = new URL(base);
    const host = u.hostname;
    const protocol = u.protocol === "http:" ? "http" : "https";
    const alreadyR2 = host === "r2.dev" || host.endsWith(".r2.dev");
    if (!alreadyR2) {
      patterns.push({
        protocol,
        hostname: host,
        ...(u.port ? { port: u.port } : {}),
        pathname: "/**",
      });
    }
  } catch {
    /* ignore invalid URL */
  }
  return patterns;
}

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    remotePatterns: mediaRemotePatterns(),
  },
};

export default nextConfig;
