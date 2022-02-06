import React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'
import Container from '../components/blog/container'
import BlogContent from '../components/blog/blog-post/blog-content'
import Sidebar from '../components/blog/sidebar'

const BlogPostTemplate = ({ data: { markdownRemark } }) => (
    <>
        <Seo title={markdownRemark.frontmatter.title} />
        <Container>
            <BlogContent blog={markdownRemark} />
            <Sidebar />
        </Container>
    </>
)

export default BlogPostTemplate

export const blogQuery = graphql`
    query GetPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                author
                categories
                image {
                    childImageSharp {
                        fluid(maxWidth: 450, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
                title
                slug
                published
            }
        }
    }
`
