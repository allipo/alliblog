// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Duck Atelier",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: ".src/assets/blog/**/*.md",
        typeName: "Post",
        remark: {
          // remark options
        },
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Documentation", // Required
        baseDir: "./content/docs", // Where .md files are located
        pathPrefix: "/docs", // Add route prefix. Optional
        template: "./src/templates/Documentation.vue", // Optional
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
  ],
  templates: {
    Post: "/blog/:year/:month/:day/:slug",
  },
  transformers: {
    remark: {
      // global remark options
    },
  },
};
