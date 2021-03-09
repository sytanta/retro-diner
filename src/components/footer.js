import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { colors, fontFamily, spacing } from '../theme'

import Hotline from './footer/hotline'
import Retro from './footer/retro'
import Subscribe from './footer/subscribe'

const StyledFooter = styled.footer`
    background: transparent url('/images/bg-footer.jpg');
    background-repeat: repeat-x;
    background-position: top;
    background-color: ${colors.darkBlue};
    margin-top: ${spacing.md}px;
    padding: ${spacing.md}px 0 ${spacing.lg}px;

    & > div {
        align-items: flex-start;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;

        & > div {
            padding-bottom: ${spacing.md}px;
        }

        h2 {
            color: ${colors.cream};
            font-family: ${fontFamily.lobster};
            font-size: 18px;
            font-weight: normal;
            margin: ${spacing.sm}px 0;
            padding: 0;
        }

        h3 {
            color: ${colors.cream};
            font-family: ${fontFamily.lobster};
            font-size: 24px;
            font-weight: normal;
            margin: ${spacing.sm}px 0;
            padding: 0;
        }
    }
`

const Footer = () => (
    <StaticQuery
        query={graphql`
            query footer {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={(data) => (
            <StyledFooter>
                <div className="max-width">
                    <Hotline />
                    <Retro alt={data.site.siteMetadata.title} />
                    <Subscribe />
                </div>
            </StyledFooter>
        )}
    />
)

export default Footer
