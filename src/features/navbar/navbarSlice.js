import { selectNavbarItemAndSwitch } from './selectNavbarItemAndSwitch'

const SWITCH_NAVBAR_ITEM = 'portfolioApp/navbarSlice/SWITCH_NAVBAR_ITEM'

const initialState = {
    isNavbarItemActive: [
        { id: 'navbarItemAll', isActive: false, value: 'ALL' },
        { id: 'navbarItemVanillaJS', isActive: true, value: 'VanillaJS' },
        { id: 'navbarItemReact', isActive: false, value: 'React' },
        { id: 'navbarItemHTML', isActive: false, value: 'HTML, CSS, JS' },
        { id: 'navbarItemWordpress', isActive: false, value: 'Wordpress' },
        { id: 'navbarItemGitHubLink', isActive: false, value: 'GitHubLink' },
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
