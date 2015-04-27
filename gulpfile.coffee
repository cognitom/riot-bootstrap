gulp         = require 'gulp'
concat       = require 'gulp-concat'
riot         = require 'gulp-riot'
rename       = require 'gulp-rename'
uglify       = require 'gulp-uglify'
foreach      = require 'gulp-foreach'
file         = require 'gulp-file'
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

gulp.task 'default', (cb) -> runSequence ['build', 'index'], 'demo', cb

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

gulp.task 'index', ->
  n = 0
  gulp.src $.tagsSrc
  .pipe foreach (stream, item) ->
    relative = path.relative $.root, item.path
    file "#{n++}.js", "require('./#{ relative }')", src: true
  .pipe concat 'index.js'
  .pipe gulp.dest $.root

gulp.task 'watch', ->
  browserSync.init
    notify: false
    server: baseDir: './'
  o = debounceDelay: 3000
  gulp.watch [$.tagsSrc], o, ['build', 'index']
  gulp.watch [$.demoSrc], o, ['demo']
  gulp.watch $.watch, o, reload
