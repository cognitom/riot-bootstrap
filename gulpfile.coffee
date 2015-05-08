gulp         = require 'gulp'
concat       = require 'gulp-concat'
riot         = require 'gulp-riot'
rename       = require 'gulp-rename'
uglify       = require 'gulp-uglify'
wrap         = require 'gulp-wrap'
shell        = require 'gulp-shell'
streamqueue  = require 'streamqueue'
runSequence  = require 'run-sequence'
path         = require 'path'
browserSync  = require 'browser-sync'
reload       = browserSync.reload

$ =
  root:       './'
  dist:       './dist'
  tags:       './components'
  demo:       './demo'
  riot:       './dist/riot-dev.js'
  riotSrc:    './node_modules/riot/lib/riot.js'
  tagsSrc:    ['./components/*.html']
  mixinSrc:   ['./mixins/*.js']
  demoSrc:    ['./demo/*.html']
  watch:      ['index.html', 'dist/*', 'demo/app.js']

gulp.task 'default', (cb) -> runSequence 'smash', 'build', 'demo', cb

gulp.task 'smash', shell.task "smash #{ $.riotSrc } > #{ $.riot }"

gulp.task 'demo', ->
  gulp.src $.demoSrc
  .pipe riot()
  .pipe concat 'app.js'
  #.pipe uglify()
  .pipe gulp.dest $.demo

gulp.task 'build', ->
  streamqueue objectMode: true,
    gulp.src $.tagsSrc
    .pipe riot()
    .pipe concat 'temp'
    .pipe wrap src: 'template.txt'
    gulp.src $.mixinSrc
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
  gulp.watch [$.tagsSrc, $.mixinSrc], o, ['build']
  gulp.watch [$.demoSrc], o, ['demo']
  gulp.watch $.watch, o, reload
