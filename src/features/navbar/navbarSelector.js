/**@module selector-navbarSelector */
/**
 * Selector for turning some data to html buttons
 * @function navbarSelector
 * @param {object} store - global Redux store
 * @returns {string} - html buttons
 * @example
 * navbarSelector(someStore)
 * `<button class="active" onmouseover="globalThis.mapAllDispatch.navbar.  switchNavbarItem(this.getAttribute('role'))" role="navbarItemAll">
        ALL
    </button>
    <button class="disabled" onmouseover="globalThis.mapAllDispatch.navbar.switchNavbarItem(this.getAttribute('role'))" role="navbarItemVanillaJS">
        VanillaJS
    </button>
    etc...`
 */
export const navbarSelector = (store) =>
    store.navbarReducer.isNavbarItemActive
        .map((navItem) => {
            return /* html */ `<button 
                 class=${navItem.isActive === true ? 'active' : 'disabled'}

                 onmouseover="globalThis.mapAllDispatch.navbar.switchNavbarItem(this.getAttribute('role'))"
                 
                 role=${navItem.id}
             >
                 ${navItem.value}
             </button>`
        })
        .join('')
