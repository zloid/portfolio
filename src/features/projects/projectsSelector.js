
/**
 * Selector
 * @function projectsSelector
 * @param {object} storeState - Redux store
 * @param {string} projectEntity - the name of the requested entity
 * @returns {object} - combine of selected results
 */
export const projectsSelector = (storeState, projectEntity) => {    
    /* 
        const obj = storeState.projectsReducer.result.projects
        const obj2 = obj[projectEntity]
        console.log(obj2) */
    
        const resultProj = storeState.projectsReducer.result.projects.react.map((e) => {
                const result = /* html */ `<a
                 href="
                    storeState.projectsReducer.entities.${projectEntity}[e].link"
                >
                    ${storeState.projectsReducer.entities.react[e].link}
                    <br />
                    ALL: ${storeState.projectsReducer.result.projects[projectEntity].length}
                    </button>`
    
                return result
            })
    
            const projectsItems = storeState.projectsReducer.result.projects[projectEntity].map(
                e => storeState.projectsReducer.entities[projectEntity][e]
            )
    
            /**
             * @typedef {object} ProjectsSelectorResult
             * @prop {object[]} items
             */
            /**@type {ProjectsSelectorResult} */
            const resultProjTwo = {
                items: projectsItems
            }
    
            // return resultProjTwo
            return projectsItems
    }
    