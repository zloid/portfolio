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
    // const vanillaJsItems = projectsSelector(store.getState(), 'vanillaJS').length
    const reactItems = projectsSelector(store.getState(), 'react').length

    const htmlCssJsItems = projectsSelector(store.getState(), 'htmlCssJs')
        .length

    const wordpressItems = projectsSelector(store.getState(), 'wordpress')
        .length

    const openCartItems = projectsSelector(store.getState(), 'openCart').length

    const allItems =
        reactItems + htmlCssJsItems + wordpressItems + openCartItems

    switch (true) {
        case navItemId === 'navbarItemAll':
            return allItems
        // case navItemId === 'navbarItemVanillaJS':
        //     return vanillaJsItems
        case navItemId === 'navbarItemReact':
            return reactItems
        case navItemId === 'navbarItemHtmlCssJs':
            return htmlCssJsItems
        case navItemId === 'navbarItemWordpress':
            return wordpressItems
        case navItemId === 'navbarItemOpenCart':
            return openCartItems

        case navItemId === 'navbarItemGitHubLink':
            return

        default:
            break
    }
}
