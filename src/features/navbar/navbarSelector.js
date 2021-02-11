/**@module selector-navbarSelector */
/**
 * Selector for getting a data for creating nav buttons
 * @function navbarSelector
 * @param {object} store - global Redux store
 * @returns {object[]} - data for html buttons
 */
/* 
export const navbarSelector = (store) =>
    store.navbarReducer.isNavbarItemActive
        .map((navItem) => {
            return  `<button 
                 class=${navItem.isActive === true ? 'active' : 'disabled'}

                 onmouseover="globalThis.mapAllDispatch.navbar.switchNavbarItem(this.getAttribute('role'))"
                 
                 role=${navItem.id}
             >
                 ${navItem.value}
             </button>`
        })
        .join('')
 */

export const navbarSelector = (store) => store.navbarReducer.isNavbarItemActive
