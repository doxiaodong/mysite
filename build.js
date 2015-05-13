({
    appDir: './src',
    baseUrl: './static/js',
    dir: './dist',
    modules: [
        {
            name: 'main'
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        //angular:'lib/angular'
    },
    shim: {
        //'angular':{exports: 'angular'}
    }
})