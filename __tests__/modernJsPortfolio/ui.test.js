import { screen } from '@testing-library/dom'
import App from '../../src/app/App'

document.body.innerHTML = /* html */ '<div role="mainId" id="root"></div>'

App('#root').render()

describe('App div#root', () => {
    it('should exist', () => {
        expect(screen.queryByRole(/mainId/i)).not.toBeNull()
    })
})

describe('GitHub corner at App', () => {
    it('should exist', () => {
        expect(screen.getByRole(/githubCorner/i)).not.toBeNull()
    })
})

describe('App navbar', () => {
    it('navbar is exist', () => {
        expect(screen.getByRole(/navbarPortfolio/i)).not.toBeNull()
    })
    it('navbar item -ALL- is exist', () => {
        const element = screen.getByRole(/navbarItemAll/i)
        expect(element.textContent.trim()).not.toBeNull()
    })
    /* it('navbar item -VanillaJS- is exist', () => {
        const element = screen.getByRole(/navbarItemVanillaJS/i)
        expect(element.textContent.trim()).not.toBeNull()
    }) */
    it('navbar item -React- is exist', () => {
        const element = screen.getByRole(/navbarItemReact/i)
        expect(element.textContent.trim()).not.toBeNull()
    })
    it('navbar item -HTML- is exist', () => {
        const element = screen.getByRole(/navbarItemHTML/i)
        expect(element.textContent.trim()).not.toBeNull()
    })
    it('navbar item -Wordpress- is exist', () => {
        const element = screen.getByRole(/navbarItemWordpress/i)
        expect(element.textContent.trim()).not.toBeNull()
    })
    it('navbar item -GitHubLink- is exist', () => {
        const element = screen.getByRole(/navbarItemGitHubLink/i)
        expect(element).not.toBeNull()
    })
})

describe('Header of App', () => {
    it('is exist', () => {
        const element = screen.getByRole(/mainHeader/i)
        expect(element).not.toBeNull()
    })
    it('h1 is exist', () => {
        const element = screen.getByRole(/h1Link/i)
        expect(element.textContent.trim()).toBe(
            "Sergey Voytehovich's portfolio"
        )
    })
})
