var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('app/sass/**/main.sass')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('autoprefixer', function(){
    gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            autoprefixerOptions,
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'))
});

gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
})