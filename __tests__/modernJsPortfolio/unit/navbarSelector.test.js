import { navbarSelector } from '../../../src/features/navbar/navbarSelector'

describe('navbarSelector', () => {
    it('should take Redux store and output array of data for nav bar render', () => {
        const store = {
            navbarReducer: {
                isNavbarItemActive: [
                    { id: 'navbarItemAll', isActive: false, value: 'ALL' },
                    {
                        id: 'navbarItemVanillaJS',
                        isActive: true,
                        value: 'VanillaJS',
                    },
                    { id: 'navbarItemReact', isActive: false, value: 'React' },
                ],
                currentNavItemFocus: 'navbarItemVanillaJS',
            },
        }
        expect(navbarSelector(store)).toEqual([
            { id: 'navbarItemAll', isActive: false, value: 'ALL' },
            { id: 'navbarItemVanillaJS', isActive: true, value: 'VanillaJS' },
            { id: 'navbarItemReact', isActive: false, value: 'React' },
        ])
    })
})
