/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "placehold.jp"
            },
            {
                hostname: "firebasestorage.googleapis.com"
            }
        ]
    }
};

export default nextConfig;
