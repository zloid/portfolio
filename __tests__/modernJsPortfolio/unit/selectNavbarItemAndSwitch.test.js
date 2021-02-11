import { selectNavbarItemAndSwitch } from '../../../src/features/navbar/selectNavbarItemAndSwitch'

describe('selectNavbarItemAndSwitch', () => {
    it('should working', () => {
        const state = {
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

        const result = [
            { id: 'navbarItemAll', isActive: true, value: 'ALL' },
            { id: 'navbarItemVanillaJS', isActive: false, value: 'VanillaJS' },
            { id: 'navbarItemReact', isActive: false, value: 'React' },
            { id: 'navbarItemHTML', isActive: false, value: 'HTML, CSS, JS' },
            { id: 'navbarItemWordpress', isActive: false, value: 'Wordpress' },
            { id: 'navbarItemGitHubLink', isActive: false, value: 'GitHubLink' },
        ]

        expect(selectNavbarItemAndSwitch(state, 'navbarItemAll')).toEqual(result)
    })
})