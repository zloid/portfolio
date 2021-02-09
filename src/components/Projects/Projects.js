import store from '../../app/store'

export const Projects = () => {
    // const testProj = store.getState().projectsReducer.entities.valillaJS[0].link

    const testProj2 = store
        .getState()
        .projectsReducer.result.projects.vanillaJS.map(
            (e) => {
                const new_e = () => e
                console.log(e)
                const result =  /* html */ `<button onclick="console.log(this.textContent)">
                ${
                    store.getState().projectsReducer.entities.valillaJS[e].id
                }
                </button>`

                return result

            }
               
        )

    return /* html */ `
        ${testProj2}
    `
}
