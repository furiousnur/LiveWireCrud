const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');



mix.styles([
    "public/assets/css/main.css",
    "public/assets/toastr.min.css",
    "public/assets/fontawesome.min.css",
], 'public/css/main.css');


mix.babel([
    "public/assets/js/jquery-3.3.1.min.js",
    "public/assets/js/popper.min.js",
    "public/assets/js/bootstrap.min.js",
    "public/assets/js/plugins/pace.min.js",
    "public/assets/js/plugins/chart.js",
    "public/assets/js/plugins/jquery.dataTables.min.js",
    "public/assets/js/plugins/dataTables.bootstrap.min.js",
    "public/assets/toastr.min.js",
], 'public/js/main.js');
