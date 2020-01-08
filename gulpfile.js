const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

exports.default = () => (
	gulp.src("img/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest("img/"))
);