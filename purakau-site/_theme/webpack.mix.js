let mix = require("laravel-mix").mix;
let path = require('path');

mix.webpackConfig({
  externals: {
    '$': 'jQuery',
    'jquery': 'jQuery',
    'popper': 'Popper'
  }
});

//this fixes an API change introduced at //https://github.com/webpack/webpack/issues/4549
// buggy JS ends up in `/dist/dist/js` and CSS in `dist/css`
// mix.setPublicPath(
//   path.resolve(__dirname, 'dist')
// );

// mix.autoload({
//   jquery: ['$', 'jQuery', 'window.jQuery'],
//   'popper.js/dist/umd/popper.js': ['Popper']
// });

// This is the relative path to the dist folder for all compiled assets
mix.setResourceRoot('/assets/');
mix.setPublicPath('dist'); // doesn't work for things like scripts()

// copy assets
mix
  .copy("src/images", "dist/images")
  .copy("src/fonts", "dist/fonts");

// Combine main libs
mix.scripts([
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/popper.js/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
  //"node_modules/clipboard/dist/clipboard.min.js"
], "dist/js/libs.js");

// mix.js("node_modules/jquery/dist/jquery.js", "js/jquery.js")
// .js("node_modules/popper.js/dist/umd/popper.js", "js/popper.js")
// mix.js("node_modules/popper.js/dist/umd/popper.min.js", "js/popper.js")

mix
  .js("src/js/main.js", "dist/js/main.js");

mix
    .sass("src/scss/main.scss", "dist/css/main.css");

mix
  .copy("dist", "../assets")
