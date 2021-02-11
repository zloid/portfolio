/**
 * Selector
 * @function projectsSelector
 * @param {object} storeState - part of the Redux store
 * @param {string} projectEntity - the name of the requested entity
 * @returns {object[]} - combine of selected results
 */
export const projectsSelector = (storeState, projectEntity) => {
    const projectsItems = storeState.projectsReducer.result.projects[
        projectEntity
    ].map((e) => storeState.projectsReducer.entities[projectEntity][e])

    return projectsItems
}
