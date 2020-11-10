// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Duck Atelier",
  siteDescription: "Allison's quacky pond",
  titleTemplate: `Duck Atelier - %s `,
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "static/posts",
        pathPrefix: '/blog',
        typeName: "Post",
        remark: {
          // remark options
        },
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-XXXXXXXXX-X",
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
  ],
  templates: {
    Post: "/blog/:year/:month/:day/:slug",
  },
};
