/** @module components-Projects */

import store from '../../app/store'
import { projectsSelector } from '../../features/projects/projectsSelector'
// import '../../../public/assets/react-app-finding-balance-errors.jpg'
// import '../../../public/assets/react-from-figma-tmplt.jpg'

/**
 * Presentational component
 * @function Projects
 * @returns {string} show up portfolio projects, rely on active navbar item
 */
export const Projects = () => {
    let vanillaJsItems = projectsSelector(store.getState(), 'vanillaJS')
    let reactItems = projectsSelector(store.getState(), 'react')

    vanillaJsItems = vanillaJsItems.map(
        (e) =>
            `<button> <a target="_blank" href=${e.link}> ${e.name} </a> </button>
            <br />
            <img width="100" height="100" src="https://zloid.github.io/images/zoo-10.jpg" />
            `
    )
    reactItems = reactItems.map(
        (e) => /* html */ `
            <a target="_blank" href=${e.link}> ${e.name} 
                <button> 
                    <img width="100" height="100" src=${e.thumbnail} />
                </button>
            </a> 
            <br />           
            `
    )

    switch (store.getState().navbarReducer.currentNavItemFocus) {
        case 'navbarItemAll':
            return /* html */ ` ${vanillaJsItems} ${reactItems}`
        case 'navbarItemVanillaJS':
            return /* html */ ` ${vanillaJsItems}`
        case 'navbarItemReact':
            return /* html */ ` ${reactItems}`
        default:
            break
    }
}
