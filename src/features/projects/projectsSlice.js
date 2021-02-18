import { normalize, schema } from 'normalizr'
import '../../../public/assets/react-app-finding-balance-errors.jpg'
import '../../../public/assets/react-from-figma-tmplt.jpg'
import '../../../public/assets/math-calc.jpg'
import '../../../public/assets/vanilla-js-audio-player.jpg'
import '../../../public/assets/currency-processing-app.jpg'
import '../../../public/assets/current-weather-data-on-map.jpg'

const initialState = {
    projects: {
        vanillaJS: [
            {
                id: 0,
                name: 'math-calc',
                link: 'https://zloid.github.io/math-calc/',
                thumbnail: 'assets/math-calc.jpg',
                description: 'modern JS math calc SPA',
            },
            {
                id: 1,
                name: 'audio-player',
                link: 'https://zloid.github.io/audio-player/',
                thumbnail: 'assets/vanilla-js-audio-player.jpg',
                description: 'tiny audio player script',
            },
        ],
        react: [
            {
                id: 0,
                name: 'React-App-Finding-Balance-Errors',
                link:
                    'https://zloid.github.io/React-App-Finding-Balance-Errors/',
                thumbnail: 'assets/react-app-finding-balance-errors.jpg',
                description:
                    'React + Redux-ToolKit app for finding errors in the account balance',
            },
            {
                id: 1,
                name: 'figma-template-to-react',
                link: 'http://figma-template-to-react.zloid.ru/',
                thumbnail: 'assets/react-from-figma-tmplt.jpg',
                description: 'Figma template + React + Styled Components',
            },
            {
                id: 2,
                name: 'currency-processing-app',
                link: 'https://zloid.github.io/currency-processing-app/',
                thumbnail: 'assets/currency-processing-app.jpg',
                description:
                    'React + Redux-ToolKit App: example of currency processing',
            },
            {
                id: 3,
                name: 'current-weather-data-on-map',
                link: 'https://zloid.github.io/current-weather-data-on-map/',
                thumbnail: 'assets/current-weather-data-on-map.jpg',
                description:
                    'React + Redux-Toolkit SPA: shows the current weather in Poland in different colors',
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
