import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const nextConfig: NextConfig = BuilderDevTools()({
  output: 'standalone',
  reactStrictMode: false,
  trailingSlash: true,
  transpilePackages: ['beasties'],
  turbopack: {
    resolveAlias: {
      lodash: 'underscore',
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  experimental: {
    optimizeCss: true,
  },

  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  poweredByHeader: false,

  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }

    return config;
  },

  compiler: {
    // Strip console.* except error and warn in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
});

export default nextConfig;
