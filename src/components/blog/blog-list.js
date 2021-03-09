import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing, breakpoints } from '../../theme'

import BlogEmpty from './blog-empty'
import BlogItem from './blog-item'

const StyledList = styled.div`
    margin: 0 0 ${spacing.lg}px;
    width: calc(66.66% - 20px);

    @media (max-width: ${breakpoints.tablet}px) {
        width: auto;
    }
`

const BlogList = ({ blogs }) => {
    const content = blogs.length ? (
        blogs.map(({ node: blog }) => <BlogItem key={blog.id} blog={blog} />)
    ) : (
        <BlogEmpty />
    )

    return <StyledList>{content}</StyledList>
}

BlogList.propTypes = {
    blogs: PropTypes.array.isRequired,
}

export default BlogList
