var gulp          = require('gulp'),
    webserver     = require('gulp-webserver'),
    opn           = require('opn'),
    concat        = require('gulp-concat'),
    livereload    = require('gulp-livereload'),
    cleanCSS      = require('gulp-clean-css'),
    rename        = require('gulp-rename'),
    uglify        = require('gulp-uglify'),
    jshint        = require('gulp-jshint'),
    minifyHTML    = require('gulp-minify-html'),
    replaceHTML   = require('gulp-html-replace'),
    rimraf        = require('gulp-rimraf'),
    ignore        = require('gulp-ignore'),
    zip           = require('gulp-zip'),
    checkFileSize = require('gulp-check-filesize'),
    watch         = require('gulp-watch'),

    serveDir = './',

    server = {
        host: 'localhost',
        port: '5000'
    },

    distPaths = {
        build: 'build',
        js_build_file: 'game.min.js',
        css_build_file: 'game.min.css'
    },

    sourcePaths = {
        css: [
            'src/css/*.css',
        ],
        js: [
            'src/js/game.js',
            'src/js/chapter.js',
            'src/js/chapters.js',
            'src/js/maxheightratio.js',
            'src/js/maxwidthratio.js',
            'src/js/canvas.js',
            'src/js/scene.js',
            'src/js/targetposition.js',
            'src/js/coordinates.js',
            'src/js/ai.js',
            'src/js/engineer.js',
            'src/js/player.js',
            'src/js/pluto.js'
        ],
        mainHtml: [
            'index.html'
        ]
    };

gulp.task('serve', function () {
    gulp.src(serveDir)
        .pipe(webserver({
            host: server.host,
            port: server.port,
            fallback: 'index.html',
            livereload: false,
            directoryListing: false,
            open: true
    }));
});

gulp.task('openbrowser', function () {
    opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('buildCSS', function () {
    return gulp.src(sourcePaths.css)
        .pipe(concat(distPaths.css_build_file))
        .pipe(cleanCSS())
        .pipe(gulp.dest(distPaths.build))
        .pipe(livereload());
});

gulp.task('buildJS', function () {
    return gulp.src(sourcePaths.js)
        .pipe(concat(distPaths.js_build_file))
        .pipe(uglify())
        .pipe(gulp.dest(distPaths.build))
        .pipe(livereload());
});

gulp.task('buildIndex', function () {
    return gulp.src(sourcePaths.mainHtml)
        .pipe(replaceHTML({
            'css': distPaths.css_build_file,
            'js': distPaths.js_build_file
        }))
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest(distPaths.build));
});

gulp.task('cleanBuild', function () {
    return gulp.src('./build/*', { read: false })
        .pipe(ignore('.gitignore'))
        .pipe(rimraf());
});

gulp.task('zipBuild', function () {
    return gulp.src('./build/*')
        .pipe(zip('game.zip'))
        .pipe(gulp.dest('./dist'))
        .pipe(checkFileSize({
            fileSizeLimit: 16384
        }));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(sourcePaths.css, ['buildCSS', 'zipBuild']);
    gulp.watch(sourcePaths.js, ['buildJS', 'zipBuild']);
    gulp.watch(sourcePaths.mainHtml, ['buildIndex', 'zipBuild']);
});

gulp.task('build', ['buildJS', 'buildCSS', 'buildIndex', 'zipBuild']);
gulp.task('default', ['build', 'serve', 'watch']);
