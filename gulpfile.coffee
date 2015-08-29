gulp         = require 'gulp'
concat       = require 'gulp-concat'
rename       = require 'gulp-rename'
uglify       = require 'gulp-uglify'
wrap         = require 'gulp-wrap'
shell        = require 'gulp-shell'
map          = require 'map-stream'
runSequence  = require 'run-sequence'
riot         = require 'riot'
#cssnext      = require 'cssnext'
path         = require 'path'
browserSync  = require 'browser-sync'
reload       = browserSync.reload

# TODO: fix Riot compiler to make this line work with ScopedCSS
#riot.parsers.css.css = (tagName, css) -> cssnext css, from: './components/*.html'

$ =
  root:       './'
  dist:       './dist'
  tags:       './components'
  demo:       './demo'
  tagsSrc:    './components/*.html'
  mixinSrc:   './mixins/*.js'
  demoSrc:    ['./demo/*.html']
  watch:      ['index.html', 'dist/*', 'demo/app.js']

gulp.task 'default', (cb) -> runSequence 'build', 'demo', cb

gulp.task 'demo', ->
  gulp.src $.demoSrc
  .pipe compile()
  .pipe concat 'app.js'
  #.pipe uglify()
  .pipe gulp.dest $.demo

gulp.task 'build', ->
  gulp.src [$.tagsSrc, $.mixinSrc]
  .pipe compile()
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
  gulp.watch [$.tagsSrc, $.mixinSrc], o, ['build']
  gulp.watch [$.demoSrc], o, ['demo']
  gulp.watch $.watch, o, reload

compile = () ->
  map (file, cb) ->
    file.contents = new Buffer riot.compile file.contents.toString()
    file.path = file.path.replace /\..+?$/, '.js'
    cb null, file
