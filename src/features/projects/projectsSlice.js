import { normalize, schema } from "normalizr";
 
const initialState = {
   "results" : [
     {id: '1', res: 'one'},
     {id: '2', res: 'two'},
     {id: '3', res: 'three'},
   ]
}

const project = new schema.Entity('someEntity')

const resultEntyty = new schema.Entity('resultEntyty')
 
const normalizedState = normalize(initialState, resultEntyty)

export default function projectsReducer(state = normalizedState) {
    return state
}
