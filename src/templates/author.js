import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Container from '../components/blog/container'
import BlogList from '../components/blog/blog-list'
import Sidebar from '../components/blog/sidebar'

const AuthorTemplate = ({ data: { posts } }) => (
    <>
        <SEO title="Blogs by author" />
        <Container>
            <BlogList blogs={posts.edges} />
            <Sidebar />
        </Container>
    </>
)

export default AuthorTemplate

export const blogQuery = graphql`
    query GetPostsByAuthorName($authorName: String!) {
        posts: allMarkdownRemark(
            sort: { fields: frontmatter___published, order: ASC }
            filter: {
                fileAbsolutePath: { regex: "/content/blog/" }
                frontmatter: { author: { eq: $authorName } }
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
