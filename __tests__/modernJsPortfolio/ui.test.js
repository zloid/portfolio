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
        // expect(screen.getByRole(/navbarItemAll/i)).not.toBeNull()

        const element = screen.getByRole(/navbarItemAll/i)
        expect(element.textContent.trim()).toBe('ALL')
    })
    it('navbar item -VanillaJS- is exist', () => {
        // expect(screen.getByRole(/navbarItemVanillaJS/i)).not.toBeNull()

        const element = screen.getByRole(/navbarItemVanillaJS/i)
        expect(element.textContent.trim()).toBe('VanillaJS')
    })
    it('navbar item -React- is exist', () => {
        // expect(screen.getByRole(/navbarItemReact/i)).not.toBeNull()

        const element = screen.getByRole(/navbarItemReact/i)
        expect(element.textContent.trim()).toBe('React')
    })
    it('navbar item -HTML- is exist', () => {
        // expect(screen.getByRole(/navbarItemHTML/i)).not.toBeNull()

        const element = screen.getByRole(/navbarItemHTML/i)
        expect(element.textContent.trim()).toBe('HTML, CSS, JS')
    })
    it('navbar item -Wordpress- is exist', () => {
        // expect(screen.getByRole(/navbarItemWordpress/i)).not.toBeNull()

        const element = screen.getByRole(/navbarItemWordpress/i)
        expect(element.textContent.trim()).toBe('Wordpress')
    })
    it('navbar item -GitHubLink- is exist', () => {
        const element = screen.getByRole(/navbarItemGitHubLink/i)
        expect(element.textContent.trim()).toBe('GitHubLink')
    })
})

describe('Header of App', () => {
    it('is exist', () => {
        const element = screen.getByRole(/mainHeader/i)
        expect(element).not.toBeNull()
    })
    it('h1 is exist', () => {
        const element = screen.getByRole(/h1Link/i)
        expect(element.textContent.trim()).toBe('Sergey Voytehovich\'s portfolio')
    })
})
