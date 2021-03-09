import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GoThreeBars } from 'react-icons/go'

import { colors, fontFamily, spacing, breakpoints } from '../../theme'

import NLink from '../nav-link'
import Waitress from './waitress'

const activeNavLinkStyle = {
    color: colors.cream,
}

const navItemHeight = 68

const NavLink = ({ to, children, ...props }) => (
    <NLink to={to} activeStyle={activeNavLinkStyle} {...props}>
        {children}
    </NLink>
)

const ContainerRoot = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    height: 70px;
    position: relative;

    @media (max-width: ${breakpoints.tablet}px) {
        &.max-width {
            padding: 0 !important;
        }
    }
`

const NavContainer = styled.nav`
    color: ${colors.lightBlue};
    display: flex;
    justify-content: space-between;

    & > * {
        height: ${navItemHeight}px;
    }

    ul.navigation {
        align-items: center;
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        font-family: ${fontFamily.lobster};
        float: left;
        margin: 0;

        &:first-child a {
            padding-left: 0;
        }
    }

    a {
        color: ${colors.lightBlue};
        font-size: 21px;
        padding: 0 ${spacing.lg}px;
        text-decoration: none;

        :hover {
            color: ${colors.cream};
        }
    }

    .nav-icon {
        align-items: center;
        display: none;

        button {
            background: transparent;
            border: none;
            color: ${colors.lightBlue};
            font-size: 24px;
        }
    }

    @media (max-width: ${breakpoints.tablet}px) {
        width: 100%;

        ul.navigation {
            display: block;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 10;

            li {
                float: none;
                height: ${navItemHeight}px;
                padding: 0 ${spacing.md}px;

                a {
                    display: block;
                    line-height: ${navItemHeight}px;
                }
            }

            li:not(:first-child) {
                background: ${colors.darkBlue};
                border-bottom: ${colors.cream} 1px dashed;
                display: none;
            }

            li:last-child {
                border-bottom: none;
            }

            &.nav-open {
                li {
                    display: block;
                }
            }
        }

        a {
            padding: 0;
            width: 100%;
        }

        .nav-icon {
            display: flex;
            line-height: ${navItemHeight}px;
            padding-right: ${spacing.sm}px;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 11;
        }
    }
`

const Nav = ({ waitress }) => {
    const [navOpen, toggleNav] = useState(false)

    const toggleNavMobile = () => {
        toggleNav(!navOpen)
    }

    return (
        <ContainerRoot className="max-width">
            <NavContainer>
                <ul className={`navigation ${navOpen ? 'nav-open' : ''}`}>
                    <li>
                        <NavLink to="/" partiallyActive={false}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                </ul>
                <div className="nav-icon">
                    <button onClick={toggleNavMobile}>
                        <GoThreeBars />
                    </button>
                </div>
            </NavContainer>
            <Waitress fluid={waitress} />
        </ContainerRoot>
    )
}

Nav.propTypes = {
    waitress: PropTypes.object.isRequired,
}

export default Nav
