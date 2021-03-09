import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { colors, fontFamily, spacing } from '../../theme'

const StyledList = styled.div`
    text-align: center;

    h1 {
        margin-bottom: ${spacing.sm}px;
    }

    ul {
        list-style-type: none;
        margin: 30px 0 50px 0;
        padding: 0;

        li {
            border-color: ${colors.lighterBrown};
            border-style: dotted;
            border-left: none;
            border-right: none;
            border-top: none;
            font-family: ${fontFamily.nunito};
            line-height: 18px;
            padding: 10px;

            :first-child {
                border-color: ${colors.lighterBrown};
                border-style: dotted;
                border-left: none;
                border-right: none;
                border-top: dotted;
            }
        }

        a {
            color: ${colors.dark};
            font-family: ${fontFamily.nunito};
            font-size: 16px;
            text-decoration: none;

            :hover {
                color: ${colors.darkBlue};
            }
        }
    }
`

const BlogSidebarList = ({ title, list }) => (
    <StyledList>
        <h1 className="title">{title}</h1>
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    <Link to={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
    </StyledList>
)

BlogSidebarList.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array.isRequired,
}

export default BlogSidebarList
