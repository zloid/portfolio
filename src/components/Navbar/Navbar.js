/** @module components-Navbar */

import { navbarSelector } from '../../features/navbar/navbarSelector'
import store from '../../app/store'
import '../../../public/assets/beard-avatar.jpg'
import { countOfProject } from './countOfProject'

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
           class="${navItem.isActive === true ? 'active' : 'disabled'}"

           role=${navItem.id}
           
           onmouseover="globalThis.mapAllDispatch.navbar.switchNavbarItem(this.getAttribute('role'))"           
       >
           ${navItem.value}
           
           <span class="itemsCount">${countOfProject(navItem.id)}</span>

      </button>`
        })
        .join('')

    return /* html */ `<nav id="filter" role="navbarPortfolio">
        ${mainNavBar} 
        <a role="navbarItemGitHubLink" style="color: #fff; font-size: 16px" href="https://github.com/zloid">
            <u>GitHub <img src="assets/beard-avatar.jpg" id="avatarFromGitHubField"></u>
        </a>
        </nav>`
}
