import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { colors, fontFamily, spacing, breakpoints } from '../../theme'

const StyledMenuContainer = styled.div`
    background-color: ${colors.cream};
    border: 8px solid ${colors.lighterBrown};
    border-radius: 10px;
    color: ${colors.brown};
    margin: ${spacing.lg}px 0;
    padding: ${spacing.md}px 32px;
    width: calc(66.66% - 100px);

    ul {
        list-style-type: none;
        margin: 0 -22px;
        padding: 0;
    }

    li {
        border-color: #0f0f0d;
        border-style: dotted;
        border-top: none;
        border-left: none;
        border-right: none;
        color: ${colors.lighterBrown};
        font-family: ${fontFamily.nunito};
        margin-bottom: ${spacing.md}px;
        padding: 0 25px ${spacing.sm}px;
        position: relative;

        :last-child {
            border: none;
        }

        h2 {
            color: ${colors.lighterBrown};
            font-family: ${fontFamily.lobster};
            font-size: 24px;
            font-weight: normal;
            text-decoration: none;
            width: calc(100% - 90px);
        }
    }

    p {
        font-family: ${fontFamily.nunito};
        font-size: 16px;
        width: calc(100% - 90px);
    }

    span {
        background: transparent url('/images/icon.png') no-repeat 0 -673px;
        color: #ebe9d7;
        display: block;
        font-family: ${fontFamily.limelight};
        font-size: 28px;
        height: 70px;
        left: calc(100% - 90px);
        line-height: 70px;
        position: absolute;
        text-align: center;
        top: 0px;
        width: 70px;
    }

    @media (max-width: ${breakpoints.phablet}px) {
        ul {
            margin: 0;
        }

        li {
            padding: 0 ${spacing.sm}px;
        }
    }

    @media (max-width: ${breakpoints.tablet}px) {
        box-sizing: border-box;
        padding: ${spacing.md}px 0;
        width: 100%;

        h1 {
            padding: 0 ${spacing.md}px;
        }

        ul {
            margin: 0 ${spacing.xs}px;
        }

        span {
            left: calc(100% - 75px);
        }
    }
`

const MenuDetail = ({ menu }) => {
    const menuContent = menu.html
        .split('<hr>')
        .map((item) => {
            return `<li>${item.replace(/<hr>|<hr\/>/g, '')}</li>`
        })
        .join('')

    return (
        <StyledMenuContainer>
            <div>
                <h1 className="page-header">{menu.frontmatter.title}</h1>
                <Img
                    fluid={menu.frontmatter.image.childImageSharp.fluid}
                    alt={menu.frontmatter.title}
                    style={{
                        margin: '0 auto',
                        width: '100%',
                        maxWidth: '434px',
                    }}
                />
            </div>
            <ul dangerouslySetInnerHTML={{ __html: menuContent }} />
        </StyledMenuContainer>
    )
}

export default MenuDetail
