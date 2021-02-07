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
                { id: 5, name: 'four' },
                { id: 666, name: 'devil' },
            ],
        },
        {
            id: 2,
            title: 'Azathoth',
            tags: [
                { id: 1, name: 'old ones' },
                { id: 4, name: 'four' },
                { id: 666, name: 'devil' },
            ],
        },
        {
            id: 3,
            title: 'At the Mountains of Madness',
            tags: [
                { id: 4, name: 'insanity' },
                { id: 666, name: 'devil' },
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

const ob = {
    entities: {
        tags: {
            1: {
                id: 1,
                name: 'old ones',
            },
            2: {
                id: 2,
                name: 'short story',
            },
            3: {
                id: 3,
                name: 'novel',
            },
            4: {
                id: 4,
                name: 'insanity',
            },
        },
        articles: {
            1: {
                id: 1,
                title: 'Dagon',
                tags: [1, 2],
            },
            2: {
                id: 2,
                title: 'Azathoth',
                tags: [1, 3],
            },
            3: {
                id: 3,
                title: 'At the Mountains of Madness',
                tags: [4, 3],
            },
        },
    },
    result: {
        articles: [1, 2, 3],
    },
}

// console.log(ob.entities.articles[1])
// ob.result.articles.map(e => console.log(ob.entities.articles[e]))
