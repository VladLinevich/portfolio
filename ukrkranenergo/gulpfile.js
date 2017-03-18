var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('app/sass/main.sass')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false 
    });
});

gulp.task('copy-libs', function(){
	return gulp.src('bower_components/**/*.*')
	.pipe(gulp.dest('app/libs'))
})

gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', 	browserSync.reload);
	gulp.watch('app/js/**/*.js', 	browserSync.reload);
})