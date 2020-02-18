import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/blog/container"
import MenuDetail from "../components/menu/menu-detail"
import MenuList from "../components/menu/menu-list"

const MenuTemplate = ({ data: { menu, allMenus }, pageContext }) => (
  <Layout>
    <SEO title={`${menu.frontmatter.title} Menu`} />
    <Container spaceBetween noMarginTop>
      <MenuDetail menu={menu} />
      <MenuList
        menus={allMenus.edges}
        menuFileLink={pageContext.menuFileLink}
      />
    </Container>
  </Layout>
)

export default MenuTemplate

export const menuQuery = graphql`
  query menu($id: String!) {
    menu: markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 450, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        slug
        title
      }
      id
      html
    }

    allMenus: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/menu/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
          id
        }
      }
    }
  }
`
