import store from '../../app/store'

export const Navbar = () => /* html */ `<nav role="navbarPortfolio">        
   ${store
       .getState()
       .navbarReducer.isNavbarItemActive.map((navItem) => {
           return `<button 
                        class=${
                            navItem.isActive === true ? 'active' : 'disabled'
                        }
                        onmouseover="globalThis.mapAllDispatch.navbar.switchNavbarItem(this.getAttribute('role'))"
                        
                        role=${navItem.id}
                    >
                        ${navItem.value}
                    </button>`
       })
       .join('')}
</nav>`
