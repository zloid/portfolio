export function selectNavbarItemAndSwitch(state = {}, navbarItemName = '') {
    return state.isNavbarItemActive.map((navObj) => {
        Object.keys(navObj)[0] === navbarItemName
            ? (navObj[Object.keys(navObj)[0]] = true)
            : (navObj[Object.keys(navObj)[0]] = false)

        return navObj
    })
}
