import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Header from './header'
import Footer from './footer'

export const Loader = () => {
    return (
        <motion.div
            initial={{ x: '-100%' }}
            animate={{
                x: 0,
                transition: { duration: 0.5 },
            }}
            exit={{
                x: '100%',
                transition: { duration: 0.35, delay: 0.35 },
            }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                position: 'fixed',
                width: '100%',
                height: '100%',
                background: '#1b6568',
                top: 0,
                color: 'white',
                fontSize: '1.5rem',
                zIndex: 100,
            }}
        >
            <div style={{ height: '3rem', overflow: 'hidden' }}>
                <motion.div
                    initial={{ y: '150%' }}
                    animate={{
                        y: 0,
                        transition: {
                            duration: 0.35,
                            delay: 0.5,
                            type: 'tween',
                        },
                    }}
                    style={{
                        padding: '0.5rem 1rem',
                        position: 'relative',
                        border: '2px solid white',
                    }}
                >
                    Preparing your dinner...
                </motion.div>
            </div>
        </motion.div>
    )
}

const variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.1, delay: 0.6 },
    },
}

const Layout = ({ location, children, ...other }) => {
    const [loading, setLoading] = useState(false)
    const [linkClicked, setLinkClicked] = useState(false)

    useEffect(() => {
        window.onclick = (e) => {
            if (e?.target?.tagName?.toLowerCase() === 'a') {
                setLinkClicked(true)
            }
        }
    }, [])

    useEffect(() => {
        if (linkClicked) {
            setLinkClicked(false)
            setLoading(
                // !!window.prevPath &&
                window.prevPath !== location.pathname
            )
        }
    }, [location.pathname, linkClicked])

    return (
        <>
            <Header />
            <AnimatePresence
                exitBeforeEnter
                onExitComplete={() => {
                    setLoading(false)
                }}
            >
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
            <AnimatePresence>{loading && <Loader />}</AnimatePresence>
            <Footer />
        </>
    )
}

export default Layout
