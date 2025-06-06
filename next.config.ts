import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@use '@/styles/variable.scss' as *;`,
  },

};

export default nextConfig;