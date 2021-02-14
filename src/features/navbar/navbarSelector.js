/**@module selector-navbarSelector */

/**
 * Selector for getting a data for creating nav buttons
 *
 * @function navbarSelector
 * @param {object} store - global Redux store
 * @returns {object[]} - data for html buttons
 * @example @see [unit_test]{@link https://github.com/zloid/modern-js-portfolio/blob/main/__tests__/modernJsPortfolio/unit/navbarSelector.test.js}
 */
export const navbarSelector = (store) => store.navbarReducer.isNavbarItemActive
