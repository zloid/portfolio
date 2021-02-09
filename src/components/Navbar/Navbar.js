import { navbarSelector } from '../../features/navbar/navbarSelector'
import store from '../../app/store'

export const Navbar = () => /* html */ `<nav role="navbarPortfolio">        
   ${navbarSelector(store)}
</nav>`
