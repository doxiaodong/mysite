var gulp = require('gulp');
var less = require('gulp-less-sourcemap');
var minifycss = require('gulp-minify-css');

var layoutLessSrc = ['src/static/less/partless/**/*.less', 'src/static/less/layout.less', 'src/static/less/pages/_pages_layout.less'];

gulp.task('less', function() {
	return gulp.src('src/static/less/layout.less')
	.pipe(less())
	.pipe(gulp.dest('src/static/css'));
});

// use this online
gulp.task('css', function() {
	return gulp.src('src/static/css/layout.css')
	.pipe(minifycss())
	.pipe(gulp.dest('src/static/css'));
});

gulp.task('lesshome', function() {
	return gulp.src('src/static/less/pages/home/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('src/static/css/pages/home'));
});

gulp.task('lessarticle', function() {
	return gulp.src('src/static/less/pages/article/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('src/static/css/pages/article'));
});

gulp.task('lessaccount', function() {
	return gulp.src('src/static/less/pages/account/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('src/static/css/pages/account'));
});

gulp.task('watch', function() {
	gulp.watch(layoutLessSrc, ['less']);
	gulp.watch('src/static/less/pages/home/**/*.less', ['lesshome']);
	gulp.watch('src/static/less/pages/article/*.less', ['lessarticle']);
});

gulp.task('default', function() {
	gulp.start('watch');
});
