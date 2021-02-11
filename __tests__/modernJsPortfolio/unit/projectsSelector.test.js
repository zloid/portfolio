import { projectsSelector } from '../../../src/features/projects/projectsSelector'

describe('projectsSelector', () => {
    // normalized state
    const storeState = {
        projectsReducer: {
            entities: {
                vanillaJS: {
                    0: {
                        id: 0,
                        name: 'math-calc',
                        link: 'https://zloid.github.io/math-calc/',
                    },
                    1: {
                        id: 1,
                        name: 'audio-player',
                        link: 'https://zloid.github.io/audio-player/',
                    },
                },
                react: {
                    0: {
                        id: 0,
                        name: 'React-App-Finding-Balance-Errors',
                        link:
                            'https://zloid.github.io/React-App-Finding-Balance-Errors/',
                    },
                    1: {
                        id: 1,
                        name: 'figma-template-to-react',
                        link: 'http://figma-template-to-react.zloid.ru/',
                    },
                },
            },
            result: {
                projects: {
                    vanillaJS: [0, 1],
                    react: [0, 1],
                },
            },
        },
    }

    it('should output an array of entity by requested name', () => {
        expect(projectsSelector(storeState, 'react')).toEqual([
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
        ])
    })
    it('should output an array of entity by requested name', () => {
        expect(projectsSelector(storeState, 'vanillaJS')).toEqual([
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
        ])
    })
})
