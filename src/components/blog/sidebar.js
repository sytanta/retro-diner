import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { colors, fontFamily, spacing, breakpoints } from '../../theme'

import SidebarList from './sidebar-list'

const Container = styled.div`
    padding-top: ${spacing.sm}px;
    text-align: center;
    width: calc(33.33% - 30px);

    h1 {
        margin-bottom: ${spacing.sm}px;
    }

    span {
        color: ${colors.brown};
        display: block;
        font-family: ${fontFamily.nunito};
        font-size: 16px;
        font-weight: normal;
    }

    a.download {
        background: transparent url('/images/button.png') no-repeat 0 -96px;
        color: ${colors.cream};
        display: block;
        font-family: ${fontFamily.lobster};
        font-size: 26px;
        height: 46px;
        line-height: 46px;
        margin: ${spacing.xl}px auto 0;
        text-decoration: none;
        width: 278px;

        :hover {
            background-position: 0 0;
        }
    }

    @media (max-width: ${breakpoints.tablet}px) {
        width: auto;
    }
`

const BlogSidebar = ({ className }) => (
    <StaticQuery
        query={graphql`
            {
                posts: allMarkdownRemark(
                    filter: { fileAbsolutePath: { regex: "/content/blog/" } }
                    sort: { fields: [frontmatter___order], order: ASC }
                    limit: 5
                ) {
                    edges {
                        node {
                            frontmatter {
                                title
                                slug
                            }
                            id
                        }
                    }
                }

                categories: allMarkdownRemark(
                    filter: {
                        fileAbsolutePath: { regex: "/content/category/" }
                    }
                ) {
                    edges {
                        node {
                            frontmatter {
                                id
                            }
                        }
                    }
                }
            }
        `}
        render={({
            posts: { edges: pEdges },
            categories: { edges: cEdges },
        }) => {
            const postList = pEdges.map(({ node: blog }) => {
                return {
                    id: blog.id,
                    title: blog.frontmatter.title,
                    link: `/blog/${blog.frontmatter.slug}`,
                }
            })

            const categoryList = cEdges.map(({ node: cate }) => {
                return {
                    id: cate.frontmatter.id,
                    title: cate.frontmatter.id,
                    link: `/category/${cate.frontmatter.id.toLowerCase()}`,
                }
            })

            return (
                <Container>
                    <SidebarList title="Recent Posts" list={postList} />
                    <SidebarList title="Categories" list={categoryList} />
                </Container>
            )
        }}
    />
)

export default BlogSidebar
