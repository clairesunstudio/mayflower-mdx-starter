const path = require('path');
const assets = require('@massds/mayflower-assets');

module.exports = {
  siteMetadata: {
    title: 'Mayflower',
    description: 'A design system for the Commonwealth of Massachusetts',
    url: 'https://mayflower.digital.mass.gov/'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: `${path.dirname(require.resolve('@massds/mayflower-assets'))}/static/images/logo/stateseal.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require("sass"),
        sourceMap: true,
        useResolveUrlLoader: {
          sourceMap: true
        },
        cssLoaderOptions: {
          sourceMap: true,
          esModule: true
        },
        includePaths: [
          'src',
          'node_modules',
          `${path.dirname(require.resolve('@massds/mayflower-react'))}/dist`,
          `${path.dirname(require.resolve('@massds/mayflower-react'))}/styles`
        ].concat(assets.includePaths)
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
