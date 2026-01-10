/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpilation du Design System
  transpilePackages: ['@lenny/ui'],

  // Optimisations de sécurité et performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Optimisation des images (LCP)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Optimisations expérimentales
  experimental: {
    optimizeCss: true,
    // Optimisation des imports (tree-shaking amélioré)
    optimizePackageImports: ['@lenny/ui', 'lucide-react'],
  },
}

module.exports = nextConfig
