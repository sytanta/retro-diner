import React from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

import Header from './header'
import Footer from './footer'

const variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duratio: 0.5,
            delay: 0.3,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
}

const Layout = ({ location, children }) => {
    return (
        <>
            <Header />
            <AnimateSharedLayout>
                <AnimatePresence exitBeforeEnter>
                    <motion.main
                        key={location.pathname}
                        variants={variants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        {children}
                    </motion.main>
                </AnimatePresence>
            </AnimateSharedLayout>
            <Footer />
        </>
    )
}

export default Layout
