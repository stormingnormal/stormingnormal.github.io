// FOR GULP VERSION 4

const gulp                  = require('gulp');
const sass                  = require('gulp-sass');
const autoprefixer          = require('gulp-autoprefixer');
const hash                  = require('gulp-hash');
const del                   = require('del');
const concat                = require('gulp-concat');
const gp_uglify             = require('gulp-uglify');
const gp_uglify_css             = require('gulp-uglifycss');



function styles() {
    del(["static/css/**/*"])
    // Compile SCSS files to CSS
    return gulp.src("src/scss/**/*.scss")
            .pipe(sass({
                outputStyle : "compressed"
            }))
            .pipe(autoprefixer({browsers : ["last 20 versions"]}))
            .pipe(hash())
            .pipe(gp_uglify_css())
            .pipe(gulp.dest("static/css"))
            .pipe(hash.manifest("hash.json"))
            .pipe(gulp.dest("data/css"))
}

function watchFiles() {
    gulp.watch("src/scss/**/*.scss",styles)
}

function scripts(){
    return gulp.src([
        './bower_components/jquery/dist/jquery.js',
        './bower_components/foundation-sites/dist/js/foundation.js'
    ])
    //.pipe(gp_uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./static/js'));
} 
        


gulp.task('default',gulp.series(scripts,watchFiles)); 