# Ravebay

A demo of a single-page static app, using Gulp as a build tool. Hand-crafted using HTML, Sass, and vanilla javascript. Tested in all major browsers and IE9+.

###Install
1. Clone this repo.
2. Run `npm install` to install package dependencies. If npm isn't installed, follow [these instructions](https://docs.npmjs.com/getting-started/installing-node) to do so.
3. Run `npm install -g gulp` for the gulp command line client.

###Run the app
1. To build this app, run `gulp build`. You'll need to do this to generate the static site the first time around, since the `/dist` directory isn't tracked by git.
2. Run `gulp` to get started. This will start up a server for you and begin watching files to compile on the fly.
3. Go to `localhost:4000` in your browser.

###Developmemt

**Overview**

Work on files in the `src` directory. The Gulp workflow will watch for file changes as you work and compile them to `/dist`, which is served up locally. For HTML, Sass and Javascript, 4 space indentation is used for maximum readability.

**HTML**

Pretty straightforward.
- Keep the markup semantic, clean, and as free of extraneous elements as possible.
- Use classes, never IDs. Follow BEM style naming-conventions for classes (more about this below), except for in instances of JavaScript hooks (`.js-toggle`) and states (`is-active`).


**Sass**

Write modular Sass.
- Follow BEM style naming conventions closely (Block, Element, Modifier) where it makes sense to do. Use two underscores and two dashes between block and element, and element and modifier, respectively, for readability. See this example:
  - Block: `.nav`, `.form`
  - Element: `.nav__menu-item`, `form__input`
  - Modifier: `.nav__menu-item--highlighted`, `form__input--password`
- Break out major components into their own files, and include them in the `application.scss` manifest file.
- Organize CSS properties by box-model, then typography and followed other properties. Mostly simliar to these guidelines set up in [SMACSS](https://smacss.com/book/formatting).

**Javascript**

Keep it DRY.

- Mostly/somewhat following [Airbnb's style conventions](https://github.com/airbnb/javascript).
- Take advantage of Browserify to keep it modular: break out similar functions into their own files to be required as dependencies when you need them.
- Write small, single-responsbility functions.
- Comment all the things.

**Images**

Use SVGs when possible. Be sure to clean them up and optimize them before you add them to the project, either using the [svgo](https://www.npmjs.com/package/svgo) CLI or a web-based tool like [SVGOMG](https://jakearchibald.github.io/svgomg/).


### License
MIT License
