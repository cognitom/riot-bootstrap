gulp         = require 'gulp'
concat       = require 'gulp-concat'
riot         = require 'gulp-riot'
rename       = require 'gulp-rename'
uglify       = require 'gulp-uglify'
wrap         = require 'gulp-wrap'
runSequence  = require 'run-sequence'
path         = require 'path'
browserSync  = require 'browser-sync'
reload       = browserSync.reload

$ =
  root:       './'
  dist:       './dist'
  tags:       './components'
  demo:       './demo'
  tagsSrc:    ['./components/*.html']
  demoSrc:    ['./demo/*.html']
  watch:      ['index.html', 'dist/*', 'demo/app.js']

gulp.task 'default', (cb) -> runSequence 'build', 'demo', cb

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
  .pipe wrap src: 'template.txt'
  .pipe gulp.dest $.dist
  .pipe uglify()
  .pipe rename extname: '.min.js'
  .pipe gulp.dest $.dist

gulp.task 'watch', ->
  browserSync.init
    notify: false
    server: baseDir: './'
  o = debounceDelay: 3000
  gulp.watch [$.tagsSrc], o, ['build', 'index']
  gulp.watch [$.demoSrc], o, ['demo']
  gulp.watch $.watch, o, reload
