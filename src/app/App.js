/** @module app-App */

// analog of React.js
import Reef from 'reefjs'
// presentational components
import { Header } from '../components/Header/Header'
import { Navbar } from '../components/Navbar/Navbar'
import { Projects } from '../components/Projects/Projects'
import { GithubCorner } from '../components/GithubCorner/GithubCorner'

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

        <div class="container">

            ${Projects()}    

        </div>

        ${GithubCorner('https://github.com/zloid/modern-js-portfolio')}

    </div>`,
    })

export default App
