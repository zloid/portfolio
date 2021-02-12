/**@module selector-selectNavbarItemAndSwitch */

/**
 * Selector for enable some item and disable other
 * 
 * @function selectNavbarItemAndSwitch
 * @param {object} state - Redux state
 * @param {string} payload - id for switch
 * @returns {object[]}
 * @example @see [unit test]{@link https://github.com/zloid/modern-js-portfolio/blob/main/__tests__/modernJsPortfolio/unit/selectNavbarItemAndSwitch.test.js}
 */
export function selectNavbarItemAndSwitch(state, payload) {
    const navbarItems = state.isNavbarItemActive.map((navItem) => {
        navItem.id === payload
            ? (navItem.isActive = true)
            : (navItem.isActive = false)

        return navItem
    })

    return navbarItems
}
