import store from '../../app/store'
import { projectsSelector } from '../../features/projects/projectsSelector'

export const Projects = () => {
    const testProj2 = store
        .getState()
        .projectsReducer.result.projects.vanillaJS.map((e) => {
            const result = /* html */ `<a href=${
                store.getState().projectsReducer.entities.vanillaJS[e].link
            }>
                ${store.getState().projectsReducer.entities.vanillaJS[e].link}
                </button>`

            return result
        })

    console.log(projectsSelector(store.getState(), 'react'))
    console.log(projectsSelector(store.getState(), 'vanillaJS'))

    return /* html */ `
        <!-- ${testProj2}  -->
        <!-- ${projectsSelector(store.getState(), 'react')} -->
        <br />
        <h2>vanilla below</h2>
        <!-- ${projectsSelector(store.getState(), 'vanillaJS')} -->
    `
}
