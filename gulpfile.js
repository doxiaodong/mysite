var gulp = require('gulp');
var less = require('gulp-less-sourcemap');
var minifycss = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');

var layoutLessSrc = ['static/less/partless/**/*.less', 'static/less/layout.less', 'static/less/pages/_pages_layout.less'];

gulp.task('less', function() {
	return gulp.src('static/less/layout.less')
	.pipe(less())
	.pipe(gulp.dest('static/css'));
});

// use this online
gulp.task('css', function() {
	return gulp.src('static/css/layout.css')
	.pipe(minifycss())
	.pipe(gulp.dest('static/css'));
});

gulp.task('lesshome', function() {
	return gulp.src('static/less/pages/home/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('static/css/pages/home'));
});

gulp.task('lessarticle', function() {
	return gulp.src('static/less/pages/article/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('static/css/pages/article'));
});

gulp.task('lessaccount', function() {
	return gulp.src('static/less/pages/account/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('static/css/pages/account'));
});

gulp.task('lesssocket', function() {
	return gulp.src('static/less/pages/socket.less')
	.pipe(less())
	.pipe(gulp.dest('static/css/pages'));
});


gulp.task('html', function() {
  return gulp.src('templates/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/templates'))
});

gulp.task('watch', function() {
	gulp.watch(layoutLessSrc, ['less']);
	gulp.watch('static/less/pages/home/**/*.less', ['lesshome']);
	gulp.watch('static/less/pages/article/*.less', ['lessarticle']);
});

gulp.task('default', function() {
	gulp.start('watch');
});
