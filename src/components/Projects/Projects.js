import store from '../../app/store'
import { projectsSelector } from '../../features/projects/projectsSelector'

export const Projects = () => {
    let whatIm = projectsSelector(store.getState(), 'vanillaJS')
    let whatIm_2 = projectsSelector(store.getState(), 'react')

    whatIm = whatIm.map(
        (e) =>
            `<button> <a target="_blank" href=${e.link}> ${e.name} </a> </button>`
    )
    whatIm_2 = whatIm_2.map(
        (e) =>
            `<button> <a target="_blank" href=${e.link}> ${e.name} </a> </button>`
    )

    switch (store.getState().navbarReducer.currentNavItemFocus) {
        case 'navbarItemVanillaJS':
            return /* html */ ` ${whatIm}`
        case 'navbarItemReact':
            return /* html */ ` ${whatIm_2}`
        default:
            break
    }
}
