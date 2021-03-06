import React from 'react'
import styled from 'styled-components'

import { colors, fontFamily } from '../../theme'

const Container = styled.div`
    color: ${colors.brown};
    font-family: ${fontFamily.nunito};
    font-size: 18px;
    text-align: center;
`

const BlogEmpty = () => <Container>Whoop, there's no post here, yet.</Container>

export default BlogEmpty
