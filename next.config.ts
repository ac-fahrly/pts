import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
