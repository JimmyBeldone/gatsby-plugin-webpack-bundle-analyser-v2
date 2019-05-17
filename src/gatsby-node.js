const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

exports.onCreateWebpackConfig = (
    { stage, actions },
    { disable = false, ...options },
) => {
    if (disable) return;

    if (stage === 'build-javascript') {
        const defaultOptions = {
            analyzerMode: 'static',
            ...options,
        };

        actions.setWebpackConfig({
            plugins: [new BundleAnalyzerPlugin(defaultOptions)],
        });
    }
};
