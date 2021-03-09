import React from 'react'

import './src/css/global.css'
import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    // transition duration from `layout.js` * 1000 to get time in ms
    // * 2 for exit + enter animation
    // const TRANSITION_DELAY = 0.4 * 1000 * 2

    // if it's a "normal" route
    // if (location && location.action === 'PUSH') {
    //     window.setTimeout(() => {
    //         scrollToPosition(0, 0)
    //     }, TRANSITION_DELAY)
    // }

    // if we used the browser's forwards or back button
    // else {
    //     const savedPosition = getSavedScrollPosition(location) || [0, 0]

    //     window.setTimeout(() => {
    //         scrollToPosition(...savedPosition)
    //     }, TRANSITION_DELAY)
    // }

    return false
}

const scrollToPosition = (x, y) => {
    const c = document.documentElement.scrollTop || document.body.scrollTop

    y = Math.max(y, c)
    y = y - y / 10

    if (y > 2) {
        window.scrollTo(x, y)
        window.requestAnimationFrame(scrollToPosition.bind(null, x, y))
    }
}
