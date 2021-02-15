/** @module components-Projects */

import store from '../../app/store'
import { projectsSelector } from '../../features/projects/projectsSelector'

/**
 * Presentational component
 * @function Projects
 * @returns {string} show up portfolio projects, rely on active navbar item
 */
export const Projects = () => {
    let vanillaJsItems = projectsSelector(store.getState(), 'vanillaJS')
    let reactItems = projectsSelector(store.getState(), 'react')

    vanillaJsItems = vanillaJsItems.map(
        (e) => /* html */ `
            <a target="_blank" href=${e.link}> ${e.name} 
                <button> 
                    <img width="150" height="150" src=${e.thumbnail} />
                </button>
            </a> 
            <br />           
            `
    )
    reactItems = reactItems.map(
        (e) => /* html */ `
            <a target="_blank" href=${e.link}> ${e.name} 
                <button> 
                    <img width="150" height="150" src=${e.thumbnail} />
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
