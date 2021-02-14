import { normalize, schema } from 'normalizr'

const initialState = {
    projects: {
        vanillaJS: [
            {
                id: 0,
                name: 'math-calc',
                link: 'https://zloid.github.io/math-calc/',
            },
            {
                id: 1,
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
                thumbnail: 'assets/react-app-finding-balance-errors.jpg'
            },
            {
                id: 1,
                name: 'figma-template-to-react',
                link: 'http://figma-template-to-react.zloid.ru/',
                thumbnail: 'assets/react-from-figma-tmplt.jpg'
            },
        ],
    },
}

const resultEntyty = {
    projects: {
        vanillaJS: [new schema.Entity('vanillaJS')],
        react: [new schema.Entity('react')],
    },
}

const normalizedState = normalize(initialState, resultEntyty)

export default function projectsReducer(state = normalizedState) {
    return state
}
