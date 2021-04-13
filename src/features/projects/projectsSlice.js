import { normalize, schema } from 'normalizr'
// import '../../../public/assets/react-app-finding-balance-errors.jpg'
// import '../../../public/assets/react-from-figma-tmplt.jpg'
// import '../../../public/assets/math-calc.jpg'
// import '../../../public/assets/vanilla-js-audio-player.jpg'
// import '../../../public/assets/currency-processing-app.jpg'
// import '../../../public/assets/current-weather-data-on-map.jpg'
import '../../../public/assets/fast-search-min.jpg'
import '../../../public/assets/deals-fest-site-4.jpg'
import '../../../public/assets/twoje-finanse-3.jpg'
import '../../../public/assets/stroika-1-ru-3.jpg'
import '../../../public/assets/mirpodvoha-2.jpg'
import '../../../public/assets/movie-app.jpg'

const initialState = {
    projects: {
        /* vanillaJS: [
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
        ], */
        react: [
            /*  {
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
            }, */
            {
                id: 4,
                name: 'ts-react-redux-movie-app',
                link: 'http://ts-react-redux-movie-app.zloid.ru/actions',
                thumbnail: 'assets/movie-app.jpg',
                description:
                    'TypeScript + React + Redux-Toolkit SPA: movie App',
            },
        ],
        htmlCssJs: [
            {
                id: 0,
                name: 'fast-search-template',
                link: 'https://zloid.github.io/Fast-Search/',
                thumbnail: 'assets/fast-search-min.jpg',
                description: 'RWD: PSD template -> HTML, SCSS, Bootstrap',
            },
            {
                id: 1,
                name: 'deals-fest-template',
                link: 'https://zloid.github.io/deals-site/',
                thumbnail: 'assets/deals-fest-site-4.jpg',
                description: 'PSD template -> HTML, SCSS, JS',
            },
            {
                id: 2,
                name: 'twoje-finanse-template',
                link: 'https://zloid.github.io/scss-starter/',
                thumbnail: 'assets/twoje-finanse-3.jpg',
                description: 'RWD: adobe.xd template -> HTML, SCSS, JS',
            },
        ],
        wordpress: [
            {
                id: 0,
                name: 'stroika-wordpress-site',
                link:
                    'http://stroika-1.ru/oremonte/vetryak-dlya-chastnogo-doma.html',
                thumbnail: 'assets/stroika-1-ru-3.jpg',
                description:
                    'wp installed on server, configured plugins and ads, posted articles. Traffic: 250 per day',
            },
        ],
        openCart: [
            {
                id: 0,
                name: 'mirpodvoha-opencart-store',
                link: 'https://mirpodvoha.by/',
                thumbnail: 'assets/mirpodvoha-2.jpg',
                description: 'OpenCart E-commerce',
            },
        ],
    },
}

const resultEntyty = {
    projects: {
        vanillaJS: [new schema.Entity('vanillaJS')],
        react: [new schema.Entity('react')],
        htmlCssJs: [new schema.Entity('htmlCssJs')],
        wordpress: [new schema.Entity('wordpress')],
        openCart: [new schema.Entity('openCart')],
    },
}

const normalizedState = normalize(initialState, resultEntyty)

export default function projectsReducer(state = normalizedState) {
    return state
}
