var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var imageop = require('gulp-image-optimization');

gulp.task('minifyJS', function() {
	return gulp.src(['js/*.js', 'views/js/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css1', function() {
	return gulp.src('css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('minify-css2', function() {
	return gulp.src('views/css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css/views'));
});

gulp.task('optimize-img', function(cb) {
	gulp.src(['img/*.png', 'img/*.jpg', 'views/images/*.png', 'views/images/*.jpg'])
		.pipe(imageop({
			optimizationLevel: 5,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('dist/img'))
		.on('end', cb)
		.on('error', cb);
});

/*gulp.task('watch', function() {
	gulp.watch('src/*.js', ['scripts']);
});*/