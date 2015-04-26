# Riot Bootstrap

[WIP] Bootstrap-like Components for Riot.js

**CURRENTLY EXPERIMENTAL**

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
    <script src="app.tag"></script>
    <script>riot.mount('app')</script>
  </body>
</html>
```

```html
// app.tag
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

## Components

See [the demo page](http://cognitom.github.io/riot-bootstrap).

## TODO:

- ~~Make these work in another tag file~~ Now it works, thanks to [Riot 2.0.15](https://muut.com/riotjs/release-notes.html#2-0-15-em-apr-23-2015-em-)!
- Rebuilding components for Riot.js
    - ~~Buttons~~
    - ~~Button groups~~
    - ~~Dropdowns~~
    - Other components
