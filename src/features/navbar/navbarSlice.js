import { selectNavbarItemAndSwitch } from './selectNavbarItemAndSwitch'

const SWITCH_NAVBAR_ITEM = 'portfolioApp/navbarSlice/SWITCH_NAVBAR_ITEM'
const SWITCH_NAVBAR_CURRENT_FOCUS =
    'portfolioApp/navbarSlice/SWITCH_NAVBAR_CURRENT_FOCUS'

const initialState = {
    isNavbarItemActive: [
        { id: 'navbarItemAll', isActive: false, value: 'ALL' },
        { id: 'navbarItemVanillaJS', isActive: true, value: 'VanillaJS' },
        { id: 'navbarItemReact', isActive: false, value: 'React' },
        { id: 'navbarItemHTML', isActive: false, value: 'HTML, CSS, JS' },
        { id: 'navbarItemWordpress', isActive: false, value: 'Wordpress' },
        { id: 'navbarItemGitHubLink', isActive: false, value: 'GitHubLink' },
    ],
    currentNavItemFocus: 'navbarItemVanillaJS',
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
