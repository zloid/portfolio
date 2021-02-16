/** @module components-Navbar */

import { navbarSelector } from '../../features/navbar/navbarSelector'
import store from '../../app/store'

/**
 * Presentational component
 * @function Navbar
 * @returns {string} complete main navbar
 */
export const Navbar = () => {
    const dataForNavbar = navbarSelector(store.getState())

    const mainNavBar = dataForNavbar
        .map((navItem) => {
            return /* html */ `<button 
           class=${navItem.isActive === true ? 'active' : 'disabled'}

           role=${navItem.id}
           
           onmouseover="globalThis.mapAllDispatch.navbar.switchNavbarItem(this.getAttribute('role'))"
           
       >
           ${navItem.value}

           <span>(projects)</span>
      </button>`
        })
        .join('')

    return /* html */ `<nav id="filter" role="navbarPortfolio">${mainNavBar}</nav>`
}
