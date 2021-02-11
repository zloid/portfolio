/** @module components-Projects */

import store from '../../app/store'
import { projectsSelector } from '../../features/projects/projectsSelector'


/**
 * Presentational component
 * @function Projects
 * @returns {string} show up portfolio projects, rely on active navbar item
 */
export const Projects = () => {
    let whatIm = projectsSelector(store.getState(), 'vanillaJS')
    let whatIm_2 = projectsSelector(store.getState(), 'react')

    whatIm = whatIm.map(
        (e) =>
            `<button> <a target="_blank" href=${e.link}> ${e.name} </a> </button>
            <br />
            <img width="100" height="100" src="https://zloid.github.io/images/zoo-10.jpg" />
            `
    )
    whatIm_2 = whatIm_2.map(
        (e) =>
            `<button> <a target="_blank" href=${e.link}> ${e.name} </a> </button>
            <br />
            <img width="100" height="100" src="https://zloid.github.io/images/fast-search-min.jpg" />
            `
    )

    switch (store.getState().navbarReducer.currentNavItemFocus) {
        case 'navbarItemAll':
            return /* html */ ` ${whatIm} ${whatIm_2}`
        case 'navbarItemVanillaJS':
            return /* html */ ` ${whatIm}`
        case 'navbarItemReact':
            return /* html */ ` ${whatIm_2}`
        default:
            break
    }
}
