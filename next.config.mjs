/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // NOTE: change your base path when deploying to non-root paths
    assetPrefix: process.env.ASSET_PREFIX,
    basePath: process.env.BASE_PATH || '',
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(svg|otf|ttf|woff2?)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]',
            },
        })

        return config
    },
}

export default nextConfig
