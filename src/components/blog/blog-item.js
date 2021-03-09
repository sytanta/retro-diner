import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { colors, fontFamily, spacing, breakpoints } from '../../theme'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
`

const PublishedDate = styled.div`
    background: transparent url('/images/icon.png') no-repeat 0 0;
    color: ${colors.cream};
    height: 69px;
    font-family: ${fontFamily.limelight};
    font-size: 24px;
    padding-top: ${spacing.md}px;
    text-align: center;
    text-decoration: none;
    width: 90px;

    span {
        display: block;
    }

    @media (max-width: ${breakpoints.mobile}px) {
        display: none;
    }
`

const PostInfo = styled.div`
    background-color: ${colors.cream};
    border: 8px solid #822619;
    border-radius: 10px;
    color: ${colors.brown};
    font-family: ${fontFamily.nunito};
    font-size: 14px;
    padding: ${spacing.md}px ${spacing.lg}px;
    width: calc(100% - 180px);

    @media (max-width: ${breakpoints.mobile}px) {
        padding: ${spacing.md}px ${spacing.sm}px;
        width: auto;
    }
`

const ImageMeta = styled.div`
    .gatsby-image-wrapper {
        float: left;
        margin-right: ${spacing.md}px;
    }

    .published-date-mobile {
        display: none;
    }

    h2 {
        margin: 0;
        text-transform: uppercase;

        a {
            font-size: 28px;
            color: ${colors.lighterBrown};
            font-family: ${fontFamily.limelight};
            font-weight: normal;
            line-height: 30px;
            margin-top: 0;
            text-decoration: none;

            :hover {
                color: ${colors.darkBlue};
            }
        }
    }

    p {
        color: ${colors.brown};
        font-weight: normal;
        margin: 25px 0 0 0;
        padding: 0;
        width: auto;
    }

    a {
        color: ${colors.lightBrown};
        text-decoration: underline;
    }

    @media (max-width: ${breakpoints.mobile}px) {
        .published-date-mobile {
            display: block;
        }
    }
`

const Excerpt = styled.p`
    clear: both;
    padding-top: ${spacing.md}px;
`

const BlogItem = ({ blog }) => {
    const { frontmatter } = blog

    const publishedDate = frontmatter.published
        .split(` `)
        .map((item) => {
            return `<span>${item}</span>`
        })
        .join(``)

    const categoryList = frontmatter.categories.map((cate, index) => {
        const lowerCase = cate.toLowerCase()
        return (
            <React.Fragment key={cate}>
                <Link to={`/category/${lowerCase}`}>{cate}</Link>
                {index < frontmatter.categories.length - 1 ? `, ` : ``}
            </React.Fragment>
        )
    })

    return (
        <StyledContainer>
            <PublishedDate
                dangerouslySetInnerHTML={{ __html: publishedDate }}
            />
            <PostInfo>
                <ImageMeta>
                    <Link to={`/blog/${frontmatter.slug}`}>
                        <Img
                            fluid={frontmatter.image.childImageSharp.fluid}
                            style={{ maxWidth: '169px', width: '100%' }}
                        />
                    </Link>
                    <h2>
                        <Link to={`/blog/${frontmatter.slug}`}>
                            {frontmatter.titleShort}
                        </Link>
                    </h2>
                    <div className="published-date-mobile">
                        {frontmatter.published}
                    </div>
                    <p>
                        Posted by{' '}
                        <Link
                            to={`/author/${frontmatter.author.toLowerCase()}`}
                        >
                            {frontmatter.author}
                        </Link>{' '}
                        in
                    </p>
                    {categoryList}
                </ImageMeta>
                <Excerpt>{blog.excerpt}</Excerpt>
            </PostInfo>
        </StyledContainer>
    )
}

BlogItem.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default BlogItem
