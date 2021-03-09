import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { colors, fontFamily, spacing, breakpoints } from '../../theme'

const Container = styled.div`
    text-align: center;

    img {
        margin: ${spacing.md}px 0 0;
    }

    ul.navigation {
        display: flex;
        list-style-type: none;
        margin: 0 auto 4px;
        overflow: hidden;
        padding: ${spacing.sm}px 0 0 0;
    }

    li {
        margin: 0;
        width: auto;
        text-align: center;

        a {
            color: ${colors.cream};
            border-style: solid;
            border-right: none;
            border-top: none;
            border-bottom: none;
            border-color: ${colors.cream};
            border-width: 1px;
            display: block;
            font-family: ${fontFamily.nunito};
            font-size: 14px;
            font-weight: normal;
            line-height: 20px;
            padding: 0 ${spacing.sm}px;
            text-decoration: none;

            :hover {
                text-decoration: underline;
            }
        }

        &:first-child a {
            border-left: none;
        }
    }

    span {
        color: ${colors.cream};
        display: block;
        font-family: ${fontFamily.nunito};
        font-size: 14px;
    }

    @media (max-width: ${breakpoints.mobile}px) {
        ul.navigation {
            flex-direction: column;

            a {
                border: none;
            }
        }
    }
`

const Retro = ({ alt }) => (
    <Container>
        <Link to="/">
            <img className="logo" src="/images/logo-footer.png" alt={alt} />
        </Link>
        <ul className="navigation">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/menu">Menu</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
        <span>&copy; 2023 RetroDiner.com. All Rights Reserved</span>
    </Container>
)

Retro.propTypes = {
    alt: PropTypes.string,
}

export default Retro
