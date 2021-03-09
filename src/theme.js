const colors = {
    cream: '#ebe9d7',
    lightBlue: '#94c4c7',
    darkBlue: '#1b6568',
    brown: '#4c1407',
    lightBrown: '#80210b',
    lighterBrown: '#822619',
    dark: '#3e1c14',
}

const fontFamily = {
    lobster: 'Lobster',
    nunito: 'Nunito',
    limelight: 'Limelight',
}

const spacing = {
    zero: 0,
    xs: 5,
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,

    maxWidth: 960,
}

const breakpoints = {
    mobile: 400,
    phablet: 550,
    headerNavMaxWidth: 600,
    tablet: 750,
    siteMaxWidthPlus: 970,
    desktop: 1000,
    hd: 1300,
}

const SIZES = {
    xsmall: { min: 0, max: 599 },
    small: { min: 600, max: 779 },
    medium: { min: 780, max: 979 },
    large: { min: 980, max: Infinity },

    // Sidebar/nav related tweakpoints
    largerSidebar: { min: 1100, max: 1339 },
    sidebarFixed: { min: 2000, max: Infinity },

    // Topbar related tweakpoints
    expandedSearch: { min: 1180, max: Infinity },
}

const media = {
    between(smallKey, largeKey, excludeLarge = false) {
        if (excludeLarge) {
            return `@media (min-width: ${
                SIZES[smallKey].min
            }px) and (max-width: ${SIZES[largeKey].min - 1}px)`
        } else {
            if (SIZES[largeKey].max === Infinity) {
                return `@media (min-width: ${SIZES[smallKey].min}px)`
            } else {
                return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${SIZES[largeKey].max}px)`
            }
        }
    },

    greaterThan(key) {
        return `@media (min-width: ${SIZES[key].min}px)`
    },

    lessThan(key) {
        return `@media (max-width: ${SIZES[key].min - 1}px)`
    },

    size(key) {
        const size = SIZES[key]

        if (size.min == null) {
            return media.lessThan(key)
        } else if (size.max == null) {
            return media.greaterThan(key)
        } else {
            return media.between(key, key)
        }
    },
}

export { colors, fontFamily, spacing, breakpoints, media }
