module.exports = {
  siteName: "Duck Atelier",
  siteDescription: "Allison's quacky pond",
  titleTemplate: `Duck Atelier - %s `,
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "static/posts",
        pathPrefix: "/blog",
        typeName: "Post",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
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
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
  ],
  templates: {
    Post: "/blog/:id",
  },

  chainWebpack: (config) => {
    config.module
      .rule("css")
      .oneOf("normal")
      .use("postcss-loader")
      .tap((options) => {
        options.plugins.unshift(
          ...[
            require("postcss-import"),
            require("postcss-nested"),
            require("tailwindcss"),
          ]
        );

        return options;
      });
  },
};
