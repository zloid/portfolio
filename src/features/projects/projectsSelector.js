/**@module selector-projectsSelector */

/**
 * Selector
 * @function projectsSelector
 * @param {object} storeState - part of the Redux store
 * @param {string} projectEntity - the name of the requested entity
 * @returns {object[]} - combine of selected results
 * @example @see [unit_test]{@link https://github.com/zloid/modern-js-portfolio/blob/main/__tests__/modernJsPortfolio/unit/projectsSelector.test.js}
 */
export const projectsSelector = (storeState, projectEntity) => {
    const projectsItems = storeState.projectsReducer.result.projects[
        projectEntity
    ].map((e) => storeState.projectsReducer.entities[projectEntity][e])

    return projectsItems
}
