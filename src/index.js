// import mapAllDispatch from './utils/mapAllDispatch'
// whole Application
import App from './app/App'
// Redux store
import store from './app/store'
// styles for App
// import 'bootstrap/dist/css/bootstrap.min.css'
import './app/body.css'
import './app/app.css'
import {switchNavbarItemVanillaJs, switchNavbarItemAll} from './features/navbar/navbarSlice';

store.dispatch(switchNavbarItemVanillaJs())
store.dispatch(switchNavbarItemAll())
store.dispatch(switchNavbarItemVanillaJs())
store.dispatch(switchNavbarItemAll())

// -mapAllDispatch- must be here, there all dispatch actions
// !globalThis.mapAllDispatch && (globalThis.mapAllDispatch = mapAllDispatch)



// first render Reef's App to #root
App('#root').render()

// to fire render each time when dispatch redux actions
store.subscribe(() => App('#root').render())