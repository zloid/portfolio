import { combineReducers } from 'redux'
import projectsReducer from '../features/projects/projectsSlice';
import navbarReducer from '../features/navbar/navbarSlice'

const rootReducer = combineReducers({
    navbarReducer,
    projectsReducer,
})

export default rootReducer
