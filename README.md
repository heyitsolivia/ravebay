# Ravebay

A demo of a single-page static app, using Gulp as a build tool. This app is hand-crafted out of HTML, Sass, and vanilla javascript.

###Install
1. Clone this repo.
2. Run `npm install` to install package dependencies. If npm isn't installed, follow [these instructions](https://docs.npmjs.com/getting-started/installing-node) to do so.
3. Run `npm install -g gulp` for the gulp command line client.

###Run the app
1. To run this app for the first time, do `gulp build`. This generates the compiled static files in the `/dist` directory, which isn't tracked by git.
2. Run `gulp` to get started. This will start up a server for you and begin watching files to compile on the fly.
3. Go to `localhost:4000` in your browser.

###Developmemt
1. Work out of the `src` directory. The Gulp workflow will watch for file changes as you work and compile them to `/dist`


### License
MIT License
