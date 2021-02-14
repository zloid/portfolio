<!-- Information about the project to be edited by hand -->

# modern JS portfolio SPA

## Features for Developers

-   This App based on predictable Flux architecture
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

| Module                               | Description |
| ------------------------------------ | ----------- |
| [app-App]                            |
| [components-GithubCorner]            |
| [components-Navbar]                  |
| [components-Projects]                |
| [selector-navbarSelector]            |
| [selector-selectNavbarItemAndSwitch] |
| [selector-projectsSelector]          |
| [utils-mapAllDispatch]               |

## Functions

| Name              | Description |
| ----------------- | ----------- |
| [navbarReducer()] | Reducer     |

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
@see [unit_test]
```

## selector-selectNavbarItemAndSwitch

### selector-selectNavbarItemAndSwitch~selectNavbarItemAndSwitch(state, payload)

Selector for enable some item and disable other

**Kind**: inner method of [`selector-selectNavbarItemAndSwitch`]

| Param   | Type     | Description   |
| ------- | -------- | ------------- |
| state   | `object` | Redux state   |
| payload | `string` | id for switch |

**Example**

```js
@see [unit_test]
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
@see [unit_test]
```

## utils-mapAllDispatch

### utils-mapAllDispatch~Connect

Connect
library for compose RTK actions

**Kind**: inner class of [`utils-mapAllDispatch`]

## navbarReducer()

Reducer

**Kind**: global function  
**Example**

```js
@see [unit_test]
```

<!-- LINKS -->

[app-app]: #app-app
[components-githubcorner]: #components-githubcorner
[components-navbar]: #components-navbar
[components-projects]: #components-projects
[selector-navbarselector]: #selector-navbarselector
[selector-selectnavbaritemandswitch]: #selector-selectnavbaritemandswitch
[selector-projectsselector]: #selector-projectsselector
[utils-mapalldispatch]: #utils-mapalldispatch
[`app-app`]: #app-app
[`components-githubcorner`]: #components-githubcorner
[`components-navbar`]: #components-navbar
[`components-projects`]: #components-projects
[`selector-navbarselector`]: #selector-navbarselector
[unit_test]: https://github.com/zloid/modern-js-portfolio/blob/main/__tests__/modernJsPortfolio/unit/projectsSelector.test.js
[`selector-selectnavbaritemandswitch`]: #selector-selectnavbaritemandswitch
[`selector-projectsselector`]: #selector-projectsselector
[`utils-mapalldispatch`]: #utils-mapalldispatch
[unit_test]: https://github.com/zloid/modern-js-portfolio/blob/main/__tests__/modernJsPortfolio/unit/navbarReducer.test.js
[navbarreducer()]: #navbarreducer
