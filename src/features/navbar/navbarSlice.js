/**@module slice-navbarSlice */

import { selectNavbarItemAndSwitch } from './selectNavbarItemAndSwitch'

export const SWITCH_NAVBAR_ITEM = 'portfolioApp/navbarSlice/SWITCH_NAVBAR_ITEM'
export const SWITCH_NAVBAR_CURRENT_FOCUS =
    'portfolioApp/navbarSlice/SWITCH_NAVBAR_CURRENT_FOCUS'

const initialState = {
    isNavbarItemActive: [
        { id: 'navbarItemAll', isActive: true, value: 'ALL' },
        { id: 'navbarItemVanillaJS', isActive: false, value: 'VanillaJS' },
        { id: 'navbarItemReact', isActive: false, value: 'React' },
        { id: 'navbarItemHTML', isActive: false, value: 'HTML, CSS, JS' },
        { id: 'navbarItemWordpress', isActive: false, value: 'Wordpress' },
        { id: 'navbarItemGitHubLink', isActive: false, value: 'GitHubLink' },
    ],
    currentNavItemFocus: 'navbarItemAll',
}

/**
 * Reducer
 * @function navbarReducer
 * @example @see [unit_test]{@link https://github.com/zloid/modern-js-portfolio/blob/main/__tests__/modernJsPortfolio/unit/navbarReducer.test.js} */
export default function navbarReducer(state = initialState, action) {
    switch (action.type) {
        case SWITCH_NAVBAR_ITEM:
            return {
                ...state,
                isNavbarItemActive: selectNavbarItemAndSwitch(
                    state,
                    action.payload
                ),
            }
        case SWITCH_NAVBAR_CURRENT_FOCUS:
            return {
                ...state,
                currentNavItemFocus: action.payload,
            }
        default:
            return state
    }
}

export function switchNavbarItem(payload) {
    return {
        type: SWITCH_NAVBAR_ITEM,
        payload,
    }
}
export function switchNavbarCurrentFocus(payload) {
    return {
        type: SWITCH_NAVBAR_CURRENT_FOCUS,
        payload,
    }
}
