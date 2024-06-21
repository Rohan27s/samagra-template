// gatsby-node.js

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        fields: MarkdownRemarkFields
      }
      type Frontmatter {
        title: String
        description: String
        logo: String
        link: String
      }
      type MarkdownRemarkFields {
        sourceName: String
      }
    `;
    createTypes(typeDefs);
  };
  
  exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
  
    // Assuming Markdown files related to assets are in a specific directory
    if (node.internal.type === 'MarkdownRemark' && node.fileAbsolutePath.includes('/content/assets/')) {
      createNodeField({
        node,
        name: 'sourceName',
        value: 'assets',
      });
    }
  };
  