/** @module app-App */

// analog of React.js
import Reef from 'reefjs'
// presentational components
// import { AppUi } from '../components/AppUi/AppUi'
import { GithubCorner } from '../components/GithubCorner/GithubCorner'
import { Navbar } from '../components/Navbar/Navbar'
import { Header } from '../components/Header/Header'
import { Projects } from '../components/Projects/Projects'

/**
 * Returns instance of Reef.js (whole SPA)
 * @function
 * @param {string=} placeToRender
 * @example
 * App('#cool-root').render()
 */
const App = (placeToRender = '#root') =>
    new Reef(placeToRender, {
        template: () => /* html */ `<div>   

        ${Header()}      

        ${Navbar()}    

        ${Projects()}    

        ${GithubCorner('https://github.com/zloid/modern-js-portfolio')}

    </div>`,
    })

export default App
