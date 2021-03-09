import React from 'react'
import styled from 'styled-components'

import { breakpoints } from '../../theme'

const Container = styled.div`
    display: flex;
    justify-content: ${(props) =>
        props.spaceBetween ? 'space-between' : 'space-around'};
    margin-top: ${(props) => (props.noMarginTop ? 0 : '50px')} !important;
    overflow: hidden;

    @media (max-width: ${breakpoints.tablet}px) {
        flex-direction: column;
    }
`

const BlogLayoutContainer = (props) => (
    <Container className="max-width" {...props}>
        {props.children}
    </Container>
)

export default BlogLayoutContainer
