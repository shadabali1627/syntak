/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Fixes the RxJS/Sanity Crash
    reactStrictMode: false,

    // 2. Fixes Styled Components (Sanity uses this)
    compiler: {
        styledComponents: true,
    },

    // 3. Allows images from Sanity and Unsplash to be shown
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;