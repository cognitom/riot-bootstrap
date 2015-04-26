gulp         = require 'gulp'
concat       = require 'gulp-concat'
riot         = require 'gulp-riot'
rename       = require 'gulp-rename'
uglify       = require 'gulp-uglify'
runSequence  = require 'run-sequence'
path         = require 'path'
browserSync  = require 'browser-sync'
reload       = browserSync.reload

$ =
  dist:       './dist'
  tags:       './components'
  demo:       './demo'
  tagsSrc:    ['./components/*.html']
  demoSrc:    ['./demo/*.html']
  watch:      ['index.html', 'dist/*', 'demo/app.js']

gulp.task 'default', (cb) -> runSequence 'riot', cb

gulp.task 'demo', ->
  gulp.src $.demoSrc
  .pipe riot()
  .pipe concat 'app.js'
  #.pipe uglify()
  .pipe gulp.dest $.demo

gulp.task 'build', ->
  gulp.src $.tagsSrc
  .pipe riot()
  .pipe concat 'riot-bootstrap.js'
  .pipe gulp.dest $.dist
  .pipe uglify()
  .pipe rename extname: '.min.js'
  .pipe gulp.dest $.dist

gulp.task 'watch', ->
  browserSync.init
    notify: false
    server: baseDir: './'
  o = debounceDelay: 3000
  gulp.watch [$.tagsSrc], o, ['build']
  gulp.watch [$.demoSrc], o, ['demo']
  gulp.watch $.watch, o, reload
