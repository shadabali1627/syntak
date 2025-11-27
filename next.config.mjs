/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Fixes the RxJS/Sanity Crash
    reactStrictMode: false,

    // 2. Fixes Styled Components (Sanity uses this)
    compiler: {
        styledComponents: true,
    },

    // 3. Allows images from Sanity to be shown
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
};

export default nextConfig;