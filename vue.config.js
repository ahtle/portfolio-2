const sass = require('sass')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/portfolio-2/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                implementation: sass
            },
            scss: {
                implementation: sass
            }
        }
    }
}