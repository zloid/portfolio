import { normalize, schema } from 'normalizr'
import '../../../public/assets/react-app-finding-balance-errors.jpg'
import '../../../public/assets/react-from-figma-tmplt.jpg'
import '../../../public/assets/math-calc.png'
import '../../../public/assets/vanilla-js-audio-player.jpg'

const initialState = {
    projects: {
        vanillaJS: [
            {
                id: 0,
                name: 'math-calc',
                link: 'https://zloid.github.io/math-calc/',
                thumbnail: 'assets/math-calc.png'
            },
            {
                id: 1,
                name: 'audio-player',
                link: 'https://zloid.github.io/audio-player/',
                thumbnail: 'assets/vanilla-js-audio-player.jpg'
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
