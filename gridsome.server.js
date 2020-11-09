// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async (actions) => {
    const dirTree = require("directory-tree");
    const tree = dirTree("./src/assets/images/gallery", {
      extensions: /\.jpg$/,
    });
    const images = tree.children;

    const collection = actions.addCollection({
      typeName: "Images",
    });

    for (let el of Object.keys(images)) {
      collection.addNode(images[el]);
    }

    api.createPages(async ({ graphql, createPage }) => {
      const { data } = await graphql(`
        {
          allImages {
            edges {
              node {
                path
                name
              }
            }
          }
        }
      `);
    });
  });
};
