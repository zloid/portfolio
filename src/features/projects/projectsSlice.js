import { normalize, schema } from 'normalizr'

const initialState = {
    projects: {
        vanillaJS: [
            {
                id: 0,
                name: 'math-calc',
                link: 'https://github.com/zloid/math-calc',
            },
            {
                id: 'tstttt_id',
                name: 'audio-player',
                link: 'https://zloid.github.io/audio-player/',
            },
        ],
        react: [
            {
                id: 0,
                name: 'React-App-Finding-Balance-Errors',
                link:
                    'https://zloid.github.io/React-App-Finding-Balance-Errors/',
            },
            {
                id: 1,
                name: 'figma-template-to-react',
                link: 'http://figma-template-to-react.zloid.ru/',
            },
        ],
    },
}
/* 
const resultEntyty = {
    projects: [new schema.Entity('projects', {})],
}
 */

const resultEntyty = {
    projects: {
        vanillaJS: [new schema.Entity('valillaJS')],
        react: [new schema.Entity('react')],
    },
}

const normalizedState = normalize(initialState, resultEntyty)

export default function projectsReducer(state = normalizedState) {
    return state
}
