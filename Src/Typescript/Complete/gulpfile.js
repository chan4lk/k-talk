var gulp = require('gulp');
var ts = require('gulp-typescript');
var config = require('./tsconfig.json');
var tslint = require("gulp-tslint");
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var sourceMaps = require('gulp-sourcemaps');

gulp.task('dev', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('prod', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('copy', function () {
    return gulp.src(['src/*.html'])
               .pipe(gulp.dest('./release'));
});

gulp.task('compile', ['copy'], function () {
    return gulp.src([
        'src/constants.ts',
        'src/app.module.ts',
        'src/Pet.ts',
        'src/IDataService.ts',
        'src/SPDataService.ts',
        'src/mocks/MockDataService.ts',
        'src/app.containercomponent.ts',
        'src/app.component.ts',
        'src/main.ts'], {base:'src'})
        .pipe(tslint({
            formatter:"verbose"
        }))
        .pipe(tslint.report())
        .pipe(sourceMaps.init())
        .pipe(ts(config.compilerOptions))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('release'));
});

gulp.task('serve',['compile'] ,function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch ('src/**/*.ts', ['compile']);
    gulp.watch("src/**/*.html", ['copy']);
    gulp.watch("*.html").on("change",  reload);    
    gulp.watch("release/output.js").on("change", reload);
});

gulp.task('default', ['serve']);