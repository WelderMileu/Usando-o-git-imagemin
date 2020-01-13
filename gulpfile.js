const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

exports.default = async () => {
	await gulp.src('img/**/*')
			  .pipe(imagemin())
			  .pipe(gulp.dest('build/img/'))
};