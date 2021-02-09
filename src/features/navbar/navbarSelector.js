/**@module selector-navbarSelector */
/**
 * Selector for turning some data to html buttons
 * @param {object} store - global Redux store
 * @returns {string} - html
 */
export const navbarSelector = (store) =>
    store
        .getState()
        .navbarReducer.isNavbarItemActive.map((navItem) => {
            return /* html */ `<button 
                 class=${navItem.isActive === true ? 'active' : 'disabled'}
                 
                 onmouseover="globalThis.mapAllDispatch.navbar.switchNavbarItem(this.getAttribute('role'))"
                 
                 role=${navItem.id}
             >
                 ${navItem.value}
             </button>`
        })
        .join('')
