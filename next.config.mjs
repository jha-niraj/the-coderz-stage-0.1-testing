/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', "avatar.vercel.sh", "aceternity.com", 'avatars.githubusercontent.com', 'picsum.photos', 'lh3.googleusercontent.com', 'tse4.mm.bing.net', 'source.unsplash.com', 'assets.aceternity.com'],
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });

        return config;
    }
};

export default nextConfig;
