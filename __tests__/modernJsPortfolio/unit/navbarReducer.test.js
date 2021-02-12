import navbarReducer, {
    SWITCH_NAVBAR_ITEM,
    SWITCH_NAVBAR_CURRENT_FOCUS,
} from '../../../src/features/navbar/navbarSlice'

describe('navbarReducer', () => {
    it('should switch activities', () => {
        const state = {
            isNavbarItemActive: [
                { id: 'navbarItemAll', isActive: false, value: 'ALL' },
                {
                    id: 'navbarItemVanillaJS',
                    isActive: true,
                    value: 'VanillaJS',
                },
                { id: 'navbarItemReact', isActive: false, value: 'React' },
                {
                    id: 'navbarItemHTML',
                    isActive: false,
                    value: 'HTML, CSS, JS',
                },
                {
                    id: 'navbarItemWordpress',
                    isActive: false,
                    value: 'Wordpress',
                },
                {
                    id: 'navbarItemGitHubLink',
                    isActive: false,
                    value: 'GitHubLink',
                },
            ],
            currentNavItemFocus: 'navbarItemVanillaJS',
        }

        const newState = {
            isNavbarItemActive: [
                { id: 'navbarItemAll', isActive: false, value: 'ALL' },
                {
                    id: 'navbarItemVanillaJS',
                    isActive: false,
                    value: 'VanillaJS',
                },
                { id: 'navbarItemReact', isActive: false, value: 'React' },
                {
                    id: 'navbarItemHTML',
                    isActive: false,
                    value: 'HTML, CSS, JS',
                },
                {
                    id: 'navbarItemWordpress',
                    isActive: true,
                    value: 'Wordpress',
                },
                {
                    id: 'navbarItemGitHubLink',
                    isActive: false,
                    value: 'GitHubLink',
                },
            ],
            currentNavItemFocus: 'navbarItemVanillaJS',
        }

        const action = {
            type: SWITCH_NAVBAR_ITEM,
            payload: 'navbarItemWordpress',
        }

        expect(navbarReducer(state, action)).toEqual(newState)
    })

    it('should switch navbar focus', () => {
        const state = {
            isNavbarItemActive: [
                { id: 'navbarItemAll', isActive: false, value: 'ALL' },
                {
                    id: 'navbarItemVanillaJS',
                    isActive: true,
                    value: 'VanillaJS',
                },
            ],
            currentNavItemFocus: 'navbarItemVanillaJS',
        }

        const newState = {
            isNavbarItemActive: [
                { id: 'navbarItemAll', isActive: false, value: 'ALL' },
                {
                    id: 'navbarItemVanillaJS',
                    isActive: true,
                    value: 'VanillaJS',
                },
            ],
            currentNavItemFocus: 'navbarItemWordpress',
        }

        const action = {
            type: SWITCH_NAVBAR_CURRENT_FOCUS,
            payload: 'navbarItemWordpress',
        }

        expect(navbarReducer(state, action)).toEqual(newState)
    })
})
