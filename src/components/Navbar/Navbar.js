import store from '../../app/store'
/* 
export const Navbar = () =>  `<nav role="navbarPortfolio">    
    <button role="navbarItemAll">ALL ${store.getState().navbarReducer.isNavbarItemActive}</button>

    <button  role="navbarItemVanillaJS" onclick="alert(this.getAttribute('role'))">VanillaJS</button>

    <button role="navbarItemReact">React</button>

    <button role="navbarItemHTML">HTML, CSS, JS</button>

    <button role="navbarItemWordpress">Wordpress</button>

    <button role="navbarItemGitHubLink">GitHubLink</button>
</nav>` 
*/

export const Navbar = () => /* html */ `<nav role="navbarPortfolio">        
   ${store
       .getState()
       .navbarReducer.isNavbarItemActive.map((navItem) => {
           return `<button role=${Object.keys(navItem)[0]}>${
               navItem.value
           }</button>`
       })
       .join('')}
</nav>`
