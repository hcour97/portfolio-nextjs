/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'dist',
    trailingSlash: true,
    // assetPrefix: '.',
    assetPrefix: '/'
};

export default nextConfig;
