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
 
    /**
     * @function projectsMapper
     * @param {object[]} items - selected projects data
     * @returns {string} list of projects
     */
    const projectsMapper = (items) => {
        return items
            .map(
                (e) => /* html */ `
            <div class="post col-sm-3 p-0">
                <a target="_blank" href=${e.link}>
                    <p>${e.description}</p>
                    <img class="img-fluid" src=${e.thumbnail} alt="image" />
                </a>        
            </div>        
                `
            )
            .join('')
    }

    switch (store.getState().navbarReducer.currentNavItemFocus) {
        case 'navbarItemAll':
            return /* html */ `${projectsMapper(reactItems)} ${projectsMapper(vanillaJsItems)}`
        case 'navbarItemVanillaJS':
            return /* html */ `${projectsMapper(vanillaJsItems)}`
        case 'navbarItemReact':
            return /* html */ `${projectsMapper(reactItems)}`
        default:
            break
    }
}
