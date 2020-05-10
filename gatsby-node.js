/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/article/${product.fields.slug}`,
      component: path.resolve(`src/templates/article-template.tsx`),
      context: {
        slug: product.fields.slug,
      },
    })
  })
}
