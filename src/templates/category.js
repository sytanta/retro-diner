import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/blog/container"
import BlogList from "../components/blog/blog-list"
import Sidebar from "../components/blog/sidebar"

const CategoryTemplate = ({ data: { posts } }) => (
  <Layout>
    <SEO title="Blogs by category" />
    <Container>
      <BlogList blogs={posts.edges} />
      <Sidebar />
    </Container>
  </Layout>
)

export default CategoryTemplate

export const blogQuery = graphql`
  query GetPostsByCategory($categoryRegex: String!) {
    posts: allMarkdownRemark(
      sort: { fields: frontmatter___published, order: ASC }
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { categories: { regex: $categoryRegex } }
      }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            titleShort
            title
            slug
            image {
              childImageSharp {
                fluid(maxWidth: 450, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            categories
            author
            published
          }
          excerpt(pruneLength: 200)
          id
        }
      }
    }
  }
`
