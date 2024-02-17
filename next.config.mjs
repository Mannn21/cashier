/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "placehold.jp"
            }
        ]
    }
};

export default nextConfig;
