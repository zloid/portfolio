/** @module components-Navbar */

import { navbarSelector } from '../../features/navbar/navbarSelector'
import store from '../../app/store'

/**
 * Presentational component
 * @function Navbar
 * @returns {string} complete main navbar
 */
export const Navbar = () => /* html */ `<nav role="navbarPortfolio">        
   ${navbarSelector(store.getState())}
</nav>`
