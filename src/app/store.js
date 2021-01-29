// import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'

// import rootReducer from './rootReducer'
/* 
export default configureStore({
    reducer: rootReducer,
})
 */

export default createStore((state = {a: 'bcd1355000'}) => state)