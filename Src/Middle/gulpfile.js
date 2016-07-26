var gulp = require('gulp');
var ts = require('gulp-typescript');
var config = require('./tsconfig.json');
var tslint = require("gulp-tslint");
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('compile', function () {
    return gulp.src([
        'src/app.module.ts',
        'src/Pet.ts',
        'src/IDataService.ts',
        'src/SPDataService.ts',
        'src/app.containercomponent.ts',
        'src/app.component.ts',
        'src/main.ts'])
        .pipe(tslint({
            formatter:"verbose"
        }))
        .pipe(tslint.report())
        .pipe(ts(config.compilerOptions))
        .pipe(gulp.dest('release'));
});

gulp.task('serve',['compile'] ,function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch ('src/*.ts', ['compile']);
    gulp.watch("*.html").on("change", reload);
    gulp.watch("release/output.js").on("change", reload);
});

gulp.task('default', ['serve']);