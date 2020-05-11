var gulp            = require('gulp');
var babel           = require('gulp-babel');
var browserSync     = require('browser-sync');
var rename          = require('gulp-rename');
var vueComponent    = require('gulp-vue-single-file-component');
var sass            = require('gulp-sass');
 

gulp.task('sass', function () {     // 定義 sass 的任務名稱
    return gulp.src('./source/scss/**/*.scss') // sass 的來源資料夾
      .pipe(sass(                     // 編譯 sass
        {outputStyle: 'expanded'}     // sass 的輸出格式
      ).on('error', sass.logError))
      .pipe(gulp.dest('./public/source/css')) // sass 編譯完成後的匯出資料夾
      .pipe(browserSync.stream())
  });

gulp.task('scripts', () => gulp.src('./js/*.js')
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream())
);
 
gulp.task('vue', () => gulp.src('./js/components/*.vue')
    .pipe(vueComponent({ debug: true, loadCssMethod: 'loadCss' }))
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest('./public/js/components'))
    .pipe(browserSync.stream())
);
 
gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
 
    gulp.watch('./js/*.js', gulp.parallel('scripts'));
    gulp.watch('./js/components/*.vue', gulp.parallel('vue'));
    gulp.watch('./source/scss/**/*.scss', gulp.parallel('sass')); 
});
 
gulp.task('default', gulp.parallel('sass','scripts', 'vue', 'watch'));



// // 載入 gulp
// var gulp = require('gulp');

// // 定義名稱為 default 的 gulp 工作
// gulp.task('default', function () {
//     console.log('Hello Gulp Default Task');
// });

// // 定義名稱為 other 的 gulp 工作
// gulp.task('other', function () {
//     console.log('Hello Gulp Other Task');
// });