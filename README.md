# gatsby-plugin-webpack-bundle-analyser-v2

Gatsby plugin with the latest version of [webpack-bundle-analyser](https://github.com/webpack-contrib/webpack-bundle-analyzer) to visualize size of output files with an interactive zoomable treemap.

## Install

`npm i gatsby-plugin-webpack-bundle-analyser-v2 -D`

or

`yarn add gatsby-plugin-webpack-bundle-analyser-v2 -D`

## Usage

Include the plugin in your `gatsby-config.js` file :

```javascript
/* gatsby-config.js */

module.exports = {
  plugins: [
      "gatsby-plugin-webpack-bundle-analyser-v2"
  ]
}
```

## Options

### Original plugin options

You can add all [available options](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin) of [webpack-bundle-analyser](https://github.com/webpack-contrib/webpack-bundle-analyzer) original plugin.

```javascript
// in gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "server",
        analyzerPort: "3001"
      },
    },
  ],
}
```

In this plugin, the only default option is :
```javascript
{
  analyzerMode: "static"
}
```
which generate a single html file with bundle report.

### Disable

Optionally you can disable the analyser like this :

```javascript
{
  disable: true
}
```