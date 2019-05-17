const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

exports.onCreateWebpackConfig = (
    { stage, actions },
    { disable = false, devMode = false, ...options },
) => {
    if (disable) return;

    if ((stage === 'develop' && devMode) || stage === 'build-javascript') {
        const defaultOptions = {
            analyzerMode: 'server',
            analyzerPort: 3001,
            ...options,
        };

        actions.setWebpackConfig({
            plugins: [new BundleAnalyzerPlugin(defaultOptions)],
        });
    }
};
