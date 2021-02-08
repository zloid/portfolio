import { normalize, schema } from 'normalizr'

const initialState = {
    articles: [
        {
            id: 1,
            title: 'Dagon',
            tags: [
                { id: 1, name: 'old ones' },
                { id: 2, name: 'two' },
                { id: 3, name: 'three' },
            ],
        },
        {
            id: 2,
            title: 'Azathoth',
            tags: [
                { id: 1, name: 'old ones' },
                { id: 4, name: 'four' },
            ],
        },
        {
            id: 3,
            title: 'At the Mountains of Madness',
            tags: [
                { id: 4, name: 'insanity' },
            ],
        },
    ],
}
const tag = new schema.Entity('tags', {})
const article = new schema.Entity('articles', {
    tags: [tag],
})

const resultEntyty = { articles: [article] }

const normalizedState = normalize(initialState, resultEntyty)

export default function projectsReducer(state = normalizedState) {
    return state
}
 