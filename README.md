<!-- Information about the project to be edited by hand -->

# modern vanilla JS starterKit

## Target

To provide developers with a set of good tools to get started quickly developing of a small web SPA. You can comfortably create a framework agnostic JS application, but (c) "Thinking in React" with reactivity based on the Redux-toolkit and Reef.js lib.

## Features for Developers

-   This Starter Kit focused on creating App based on predictable Flux architecture
-   Focused on modern JS
-   Used optional type checking by JSDoc + VSCode + Typescript (tsc)
-   HTML-in-JS (plain HTML in plain JS) instead of JSX
-   Bootstrap (without jquery and popper.js) for simple CSS
-   Bootstrap's CSS is reducing with Auto-Purge, while build creating
-   Separation of App logic and UI
-   Components architecture, rely on predictable RTK style
-   All RTK features: Redux Dev Tools, slices, immer, etc.
-   Jest and @testing-library/dom for tests
-   @babel for: es6 to es5 and correct work with jest & ESM modules
-   Automatic generation of html documentation from JSDoc + docdash as a nice looking template for JSDoc
-   Automatic README.md generation from JSDoc
-   Husky: for hooks
-   Flexibility. Feel free to change one library from this starter kit to another. For example you can change Redux-toolkit to vanilla Redux for reduce size of final bundle. Feel free to experimenting.

## You can

-   git clone [this_repo_url] && cd [repo_name] && npm i (install this repo on your machine)
-   npm run test (for tests)
-   npm run lint (for analysis code in /src by ESLint + type checking by JSDoc + VSCode + tsc)
-   npm run start (for run dev server)
-   npm run build (for creating public build, index.html is autogenerate)
-   npm run docs (for create html docs for app by JSDoc and md-docs by jsdoc-to-markdown)
-   npm run serve (for run app local server and www)
-   use VSC + Extensions: "Comment tagged templates", "lit-html", for best expierence with HTML-in-JS template literals

<!-- You do not need to touch the code below. This is automatic README.md generation -->
<!-- check out https://github.com/jsdoc2md for learn more -->

## API Reference

## Modules

| Module                      | Description |
| --------------------------- | ----------- |
| [app-App]                   |
| [components-GithubCorner]   |
| [components-Navbar]         |
| [components-Projects]       |
| [selector-navbarSelector]   |
| [selector-projectsSelector] |
| [utils-mapAllDispatch]      |

## app-App

### app-App~App(\[placeToRender\])

Returns instance of Reef.js (whole SPA)

**Kind**: inner method of [`app-App`]

| Param             | Type     | Default   |
| ----------------- | -------- | --------- |
| \[placeToRender\] | `string` | `'#root'` |

**Example**

```js
App('#cool-root').render()
```

## components-GithubCorner

### components-GithubCorner~GithubCorner(linkToRepo)

Presentational component

**Kind**: inner method of [`components-GithubCorner`]  
**Returns**: `string` - template literal: octoCat svg + link to repo

| Param      | Type     | Description               |
| ---------- | -------- | ------------------------- |
| linkToRepo | `string` | link to github repository |

**Example**

```js
${GithubCorner('https://github.com/')}
```

## components-Navbar

### components-Navbar~Navbar()

Presentational component

**Kind**: inner method of [`components-Navbar`]  
**Returns**: `string` - complete main navbar

## components-Projects

### components-Projects~Projects()

Presentational component

**Kind**: inner method of [`components-Projects`]  
**Returns**: `string` - show up portfolio projects, rely on active navbar item

## selector-navbarSelector

### selector-navbarSelector~navbarSelector(store)

Selector for getting a data for creating nav buttons

**Kind**: inner method of [`selector-navbarSelector`]  
**Returns**: `Array.<object>` - - data for html buttons

| Param | Type     | Description        |
| ----- | -------- | ------------------ |
| store | `object` | global Redux store |

**Example**

```js
@see [unit test]
```

## selector-projectsSelector

### selector-projectsSelector~projectsSelector(storeState, projectEntity)

Selector

**Kind**: inner method of [`selector-projectsSelector`]  
**Returns**: `Array.<object>` - - combine of selected results

| Param         | Type     | Description                      |
| ------------- | -------- | -------------------------------- |
| storeState    | `object` | part of the Redux store          |
| projectEntity | `string` | the name of the requested entity |

**Example**

```js
@see [unit test]
```

## utils-mapAllDispatch

### utils-mapAllDispatch~Connect

Connect
library for compose RTK actions

**Kind**: inner class of [`utils-mapAllDispatch`]

<!-- LINKS -->

[app-app]: #app-app
[components-githubcorner]: #components-githubcorner
[components-navbar]: #components-navbar
[components-projects]: #components-projects
[selector-navbarselector]: #selector-navbarselector
[selector-projectsselector]: #selector-projectsselector
[utils-mapalldispatch]: #utils-mapalldispatch
[`app-app`]: #app-app
[`components-githubcorner`]: #components-githubcorner
[`components-navbar`]: #components-navbar
[`components-projects`]: #components-projects
[`selector-navbarselector`]: #selector-navbarselector
[test]: https://github.com/zloid/modern-js-portfolio/blob/main/__tests__/modernJsPortfolio/unit/projectsSelector.test.js
[`selector-projectsselector`]: #selector-projectsselector
[`utils-mapalldispatch`]: #utils-mapalldispatch
