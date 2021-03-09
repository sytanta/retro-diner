import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { colors, fontFamily, spacing, breakpoints } from '../../../theme'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    width: calc(66.66% - 20px);

    @media (max-width: ${breakpoints.tablet}px) {
        width: auto;
    }
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
        font-size: 28px;
        color: ${colors.lighterBrown};
        font-family: ${fontFamily.limelight};
        font-weight: normal;
        line-height: 30px;
        margin: 0;
        text-transform: uppercase;
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

const Content = styled.div`
    clear: both;
    padding-top: ${spacing.md}px;
`

const BlogContent = ({ blog }) => {
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
                    <Img
                        fluid={frontmatter.image.childImageSharp.fluid}
                        style={{ maxWidth: '169px', width: '100%' }}
                    />
                    <h2>{frontmatter.title}</h2>
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
                <Content dangerouslySetInnerHTML={{ __html: blog.html }} />
            </PostInfo>
        </StyledContainer>
    )
}

BlogContent.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default BlogContent
