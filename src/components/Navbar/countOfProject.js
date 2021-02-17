/**@module countOfProject */

import { projectsSelector } from '../../features/projects/projectsSelector'
import store from '../../app/store'

/**
 * For output counted item rely on some id
 * @function countOfProject
 * @param {string} navItemId
 */
export const countOfProject = (navItemId) => {    
// counting items
const vanillaJsItems = projectsSelector(store.getState(), 'vanillaJS').length
const reactItems = projectsSelector(store.getState(), 'react').length
const allItems = vanillaJsItems + reactItems

    switch (true) {
        case navItemId === 'navbarItemAll':
            return allItems
        case navItemId === 'navbarItemVanillaJS':
            return vanillaJsItems
        case navItemId === 'navbarItemReact':
            return reactItems

        case navItemId === 'navbarItemGitHubLink':
            return

        default:
            break
    }
}
