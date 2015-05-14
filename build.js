({
    appDir: './static',
    baseUrl: './js',
    dir: './dist/static',
    modules: [
        {
            name: 'main'
        }
    ],
    fileExclusionRegExp: /^plugins.+\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        //angular:'lib/angular'
    },
    shim: {
        //'angular':{exports: 'angular'}
    }
})