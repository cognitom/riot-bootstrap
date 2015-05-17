# Riot Bootstrap

[WIP] Bootstrap-like Components for Riot.js

- **Readable**: no more cluttered class names!
- **Stand-alone**: independent from Bootstrap
- **Modular**: one file, one component
- **Packaged**: HTML/CSS/JavaScript are packaged into one file

## Demo

- [cognitom.github.io/riot-bootstrap](http://cognitom.github.io/riot-bootstrap)

## Getting started

In short, use the tags as just like HTML: `<btn>`, `<btn-group>`, `<menu>`...etc.

```html
<btn>Your Button</btn>
```

### 1) Use directly in HTML file

- load [riot.js](https://muut.com/riotjs/)
- load [normalize.css](http://necolas.github.io/normalize.css/)
- load riot-bootstrap (this library)
- then, `riot.mount('*')`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>riot-bootstrap</title>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/normalize/3.0.3/normalize.css">
  </head>
  <body>
    <section>
      <btn>Default</btn>
      <btn option="primary">Primary</btn>
      <btn option="success">Success</btn>
    </section>
    <script src="//cdn.jsdelivr.net/riot/2.0/riot.js"></script>
    <script src="dist/riot-bootstrap.js"></script>
    <script>riot.mount('*')</script>
  </body>
</html>
```

### 2) Use in tag file (better)

- load [riot.js](https://muut.com/riotjs/)
- load [normalize.css](http://necolas.github.io/normalize.css/)
- load riot-bootstrap (this library)
- load your tag file
- then, `riot.mount('app')`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>riot-bootstrap</title>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/normalize/3.0.3/normalize.css">
  </head>
  <body>
    <app></app>
    <script src="//cdn.jsdelivr.net/riot/2.0/riot.js"></script>
    <script src="dist/riot-bootstrap.js"></script>
    <script src="app.js"></script>
    <script>riot.mount('app')</script>
  </body>
</html>
```

```html
// app.html
<app>
  <section>
    <btn onclick={ click }>Say 'Hi!'</btn>
  </section>
  <script>
    click (e) {
      alert('Hi!')
    }
  </script>
</app>
```

### 3) Use with Browserify (best)

- Install `riot-bootstrap` via NPM.
- Create the main script.
- Prepare your tag files.
- Browserify with [riotify](https://github.com/jhthorsen/riotify).
- Load the browserified script into HTML.

```bash
$ npm install --save riot-bootstrap
```

```javascript
// app.js
var riot = require 'riot'
require 'riot-bootstrap'
require './app.html' // and other components
riot.mount('app')
```

```html
// app.html
<app>
  <section>
    <btn onclick={ click }>Say 'Hi!'</btn>
  </section>
  <script>
    click (e) {
      alert('Hi!')
    }
  </script>
</app>
```

```bash
$ browserify -t [ riotify --ext html ] app.js
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>riot-bootstrap</title>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/normalize/3.0.3/normalize.css">
  </head>
  <body>
    <app></app>
    <script src="app.js"></script>
  </body>
</html>
```


## Components

See [the demo page](http://cognitom.github.io/riot-bootstrap).


## Scope emulation

Riot.js has a scope for most inner Tag element. So we need to write like this:

```html
<app>
  <btn-group>
    <btn onpush={ parent.parent.push }>{ parent.parent.message }</btn>
  </btn-group>
  this.message = 'Click me!'
  push (e) {
    this.message = 'Thanks!'
    this.update() // needed to re-render
  }
</app>
```

But this is a little bit inconvenient, so `riot-bootstrap` has a simple 'Scope emulation' mechanism. Now we can write like this.

```html
<app>
  <btn-group>
    <btn onpush={ push }>{ message }</btn>
  </btn-group>
  this.message = 'Click me!'
  push (e) {
    this.message = 'Thanks!'
    // automatically re-rendered
  }
</app>
```

There is some limitation:

- The variables in the parent's scope are updated just before `update` event.
- The view is automatically re-rendered only if the method is a member of `Tag` element. In NG case below, `this.update()` is needed to call manually.
    - OK: `<btn onpush={ push }>Hi!</btn>`
    - NG: `<btn onpush={ memberOf.subObject }>Hi!</btn>`
    - NG: `<btn onpush={ returnFunction() }>Hi!</btn>`

## History

- v0.0.1: Buttons, button groups, dropdowns
- v0.1.0: Now transclusion is supported, thanks to [Riot 2.0.15](https://muut.com/riotjs/release-notes.html#2-0-15-em-apr-23-2015-em-)
- v0.1.1: Radio sroups
- v0.1.2: Support Browserify and publish to NPM
- v0.1.7: Fix: CommonJS issue
- v0.2.0: Scope emulation. Related to https://github.com/muut/riotjs/issues/662
- v0.2.1: Fix: automatic update
- v0.2.2: Fix: `opts` also supported in scope emulation
- v0.2.3: Fix: `disabled` now works with `boolean`
- v0.2.4: Fix: update `disabled` status after second update
- v0.3.0: `parentScope` as a mixin
- v0.3.1: Use mixin initializer

## TODO:

Rebuilding Bootstrap components for Riot.js

- Input groups
- Breadcrumbs
- Badges
- Panels
- Progress bars
- Anything else? Send us a new issue or PR!
