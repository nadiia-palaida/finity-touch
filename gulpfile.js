const {src, dest, task, series, watch, parallel} = require('gulp')
const rm = require('gulp-rm')
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');
const browserify = require('gulp-browserify');
const webpack = require('webpack-stream');
const cssimport = require("gulp-cssimport");

const babelify = require('babelify');
const env = process.env.NODE_ENV;

const {SRC_PATH, DIST_PATH, JS_LIBS, STYLES_LIBS} = require('./gulp.config')

task('clean', () => {
    console.log('env', env);
    return src(`${DIST_PATH}/**/*`, {read: false}).pipe(rm())
})

task('copy:html', () => {
    return src(`${SRC_PATH}/*.html`)
        .pipe(dest(`${DIST_PATH}`))
        .pipe(reload({stream: true}))
})

task('copy:fonts', () => {
    return src(`${SRC_PATH}/fonts/**/*`)
        .pipe(dest(`${DIST_PATH}/fonts`))
        .pipe(reload({stream: true}))
})

task('styles', () => {
    return src([`${SRC_PATH}/styles/main.scss`, `node_modules/swiper/swiper-bundle.css`])
        .pipe(gulpif(env === 'dev', sourcemaps.init()))

        .pipe(concat('main.min.scss'))
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        // .pipe(px2rem())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulpif(env === 'prod', gcmq()))
        .pipe(gulpif(env === 'prod', cleanCSS()))
        .pipe(gulpif(env === 'dev', sourcemaps.write()))
        .pipe(dest(`${DIST_PATH}`))
        .pipe(reload({stream: true}))

})

/*task('script', () => {
    return src([...JS_LIBS, `${SRC_PATH}/scripts/*.js`])
        .pipe(gulpif(env === 'dev', sourcemaps.init()))
        .pipe(concat('main.min.js', {newLine: ';'}))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulpif(env === 'dev', uglify()))
        .pipe(gulpif(env === 'dev', sourcemaps.write()))
        .pipe(dest(`${DIST_PATH}`))
        .pipe(reload({stream: true}))
})*/
task('script', () => {
    return src([/*...JS_LIBS,*/ `${SRC_PATH}/scripts/*.js`])
        .pipe(gulpif(env === 'dev', sourcemaps.init()))
        /*.pipe(babel({
            // presets: ['@babel/preset-env']
        }))*/
        /*.pipe(browserify({
            insertGlobals: true,
            // require: [`node_modules/swiper`],
        }))*/
        .pipe(webpack({
            mode: env === 'dev' ? 'development' : 'production',
        }))
        .pipe(concat('main.min.js', /*{newLine: ';'}*/))
        .pipe(dest(`${DIST_PATH}`))
        .pipe(reload({stream: true}))
})

task('image', function () {
    return src(`${SRC_PATH}/images/imgs/**/*`)
        .pipe(dest(`${DIST_PATH}/images`))
        .pipe(reload({stream: true}))
});


task('icons', () => {
    return src(`${SRC_PATH}/images/icons/*.svg`)
        .pipe(svgo({
            plugins: [
                {
                    removeAttrs: {
                        attrs: "(style|width|height|data.*)"
                    }
                }
            ]
        }))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest(`${DIST_PATH}/images/icons`))
})

task('server', () => {
    browserSync.init({
        server: {
            baseDir: `./${DIST_PATH}`
        },
        open: false
    });
});

task('watch', () => {
    watch(`./${SRC_PATH}/styles/**/*.scss`, series('styles'));
    watch(`./${SRC_PATH}/*.html`, series('copy:html'));
    watch(`./${SRC_PATH}/scripts/*.js`, series('script'));
    watch(`./${SRC_PATH}/images/icons/*.svg`, series('icons'));
    watch(`./${SRC_PATH}/image/*`, series('image'));
})

task(
    'default',
    series(
        'clean',
        parallel('copy:html', 'copy:fonts', 'styles', 'script', 'icons', 'image'),
        parallel('watch', 'server')
    )
)

task(
    'build',
    series(
        'clean',
        parallel('copy:html', 'copy:fonts', 'styles', 'script', 'icons', 'image'),
    )
)