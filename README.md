<h1 align="center" style="border-bottom: none;">gatsby-plugin-webpack-bundle-analyser-v2</h1>
<h3 align="center">Gatsby plugin with the latest version of <a href="https://github.com/webpack-contrib/webpack-bundle-analyzer">webpack-bundle-analyser</a> to visualize size of output files with an interactive zoomable treemap.</h3>

<p align="center">
    <a href="https://travis-ci.com/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2">
        <img alt="travis build" src="https://travis-ci.com/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2.svg?branch=master">
    </a>
    <a href="#badge">
        <img alt="release number" src="https://badgen.net/github/release/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2/stable">
    </a>
    <a href="#badge">
        <img alt="dependencies status" src="https://badgen.net/david/dep/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2">
    </a>
    <a href="#badge">
        <img alt="dev dependencies status" src="https://badgen.net/david/dev/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2">
    </a>
</p>
<p align="center">
    <a href="http://commitizen.github.io/cz-cli/">
        <img alt="commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
    </a>
    <a href="https://github.com/semantic-release/semantic-release">
        <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
    </a>
    <a href="https://github.com/prettier/prettier">
        <img alt="prettier" src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg">
    </a>
    <a href="https://github.com/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2/blob/master/LICENSE">
        <img alt="license" src="https://badgen.net/github/license/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2">
    </a>
</p>

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