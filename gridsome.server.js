
module.exports = function(api) {
  api.loadSource(async (actions) => {
    const dirTree = require("directory-tree");
    const tree = dirTree("./static/uploads", {
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
