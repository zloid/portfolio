/** @module utils-mapAllDispatch */
import store from '../app/store'
import { switchNavbarItem } from '../features/navbar/navbarSlice'

/** @class Connect
 * library for compose RTK actions
 * @returns {Object} collection of all dispathes needs for App
 */
// class for creating Singleton
class Connect {
    constructor() {
        this.navbar = {
            switchNavbarItem: (payload) => store.dispatch(switchNavbarItem(payload)),
        }
    }
}
// Singleton
const mapAllDispatch = new Connect()
Object.freeze(mapAllDispatch)

export default mapAllDispatch
