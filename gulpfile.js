var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var proxyMiddleware = require('http-proxy-middleware');

var jsonPlaceholderProxy = proxyMiddleware('/api', {
    target: 'http://www.fwyun.com',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug',
    pathRewrite: {
            '^/api' : '',     // rewrite path
    },
});

// 静态服务器
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./",
           middleware: [jsonPlaceholderProxy],
        },
         startPath: '/src'
    });
     gulp.watch("./src/**/*.*", browserSync.reload);
});

