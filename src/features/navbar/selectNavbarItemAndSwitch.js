export function selectNavbarItemAndSwitch(state, payload) {
    const navbarItems = state.isNavbarItemActive.map((navItem) => {
        navItem.id === payload
            ? (navItem.isActive = true)
            : (navItem.isActive = false)

        return navItem
    })

    return navbarItems
}
