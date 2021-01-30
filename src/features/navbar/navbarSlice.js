import { selectNavbarItemAndSwitch } from './selectNavbarItemAndSwitch'

const SWITCH_NAVBAR_ITEM = 'portfolioApp/navbarSlice/SWITCH_NAVBAR_ITEM'
const SWITCH_NAVBAR_ITEM_VANILLA_JS =
    'portfolioApp/navbarSlice/SWITCH_NAVBAR_ITEM_VANILLA_JS'

const initialState = {
    isNavbarItemActive: [
        { navbarItemAll: false, value: 'ALL' },
        { navbarItemVanillaJS: true, value: 'VanillaJS' },
        { navbarItemReact: false, value: 'React' },
        { navbarItemHTML: false, value: 'HTML, CSS, JS' },
        { navbarItemWordpress: false, value: 'Wordpress' },
        { navbarItemGitHubLink: false, value: 'GitHubLink' },
    ],
}

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

export function switchNavbarItem(payload) {
    return {
        type: SWITCH_NAVBAR_ITEM,
        payload
    }
}

export function switchNavbarItemVanillaJs() {
    return {
        type: SWITCH_NAVBAR_ITEM_VANILLA_JS,
    }
}
