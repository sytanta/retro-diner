import React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'
import Container from '../components/blog/container'
import BlogList from '../components/blog/blog-list'
import Sidebar from '../components/blog/sidebar'

const BlogPage = ({ data }) => (
    <>
        <Seo title="Blogs" />
        <Container>
            <BlogList blogs={data.allMarkdownRemark.edges} />
            <Sidebar />
        </Container>
    </>
)

export default BlogPage

export const blogQuery = graphql`
    query MyQuery {
        allMarkdownRemark(
            sort: { fields: frontmatter___published, order: ASC }
            filter: { fileAbsolutePath: { regex: "/content/blog/" } }
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
                        published
                        categories
                        author
                    }
                    excerpt(pruneLength: 200)
                    id
                }
            }
        }
    }
`
