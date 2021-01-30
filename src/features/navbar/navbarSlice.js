import { selectNavbarItemAndSwitch } from './selectNavbarItemAndSwitch'

const SWITCH_NAVBAR_ITEM_ALL = 'portfolioApp/navbarSlice/SWITCH_NAVBAR_ITEM_ALL'
const SWITCH_NAVBAR_ITEM_VANILLA_JS =
    'portfolioApp/navbarSlice/SWITCH_NAVBAR_ITEM_ALL_VANILLA_JS'

const initialState = {
    isNavbarItemActive: [
        { navbarItemAll: true },
        { navbarItemVanillaJS: false },
        { navbarItemReact: false },
        { navbarItemHTML: false },
        { navbarItemWordpress: false },
        { navbarItemGitHubLink: false },
    ],
}

export default function navbarReducer(state = initialState, action) {
    switch (action.type) {
        case SWITCH_NAVBAR_ITEM_ALL:
            return {
                ...state,
                isNavbarItemActive: selectNavbarItemAndSwitch(
                    state,
                    'navbarItemAll'
                ),
            }
        case SWITCH_NAVBAR_ITEM_VANILLA_JS:
            return {
                ...state,
                isNavbarItemActive: selectNavbarItemAndSwitch(
                    state,
                    'navbarItemVanillaJS'
                ),
            }
        default:
            return state
    }
}

export function switchNavbarItemAll() {
    return {
        type: SWITCH_NAVBAR_ITEM_ALL,
    }
}

export function switchNavbarItemVanillaJs() {
    return {
        type: SWITCH_NAVBAR_ITEM_VANILLA_JS,
    }
}
