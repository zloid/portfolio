import { combineReducers } from 'redux'
import navbarReducer from '../features/navbar/navbarSlice'

const rootReducer = combineReducers({
    navbarReducer,
})

export default rootReducer