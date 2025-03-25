import fs from 'fs';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Load user config dynamically
let userConfig = {};
try {
  const userConfigPath = path.resolve('./v0-user-next.config.mjs');
  if (fs.existsSync(userConfigPath)) {
    userConfig = (await import(userConfigPath)).default;
  }
} catch (e) {
  // Ignore error if user config is not found or invalid
}

// Merge configurations
function mergeConfigs(baseConfig, userConfig) {
  if (!userConfig || typeof userConfig !== 'object') {
    return baseConfig;
  }

  const result = { ...baseConfig };

  for (const key in userConfig) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key])
    ) {
      result[key] = {
        ...baseConfig[key],
        ...userConfig[key],
      };
    } else {
      result[key] = userConfig[key];
    }
  }

  return result;
}

// Export the merged config
export default mergeConfigs(nextConfig, userConfig);