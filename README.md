# Riot Bootstrap

[WIP] Bootstrap-like Components for Riot.js

**CURRENTLY EXPERIMENTAL**

- **Readable**: no more cluttered class names!
- **Stand-alone**: independent from Bootstrap
- **Modular**: one file, one component
- **Packaged**: HTML/CSS/JavaScript are packaged into one file

## Demo

- [cognitom.github.io/riot-bootstrap](http://cognitom.github.io/riot-bootstrap)

## TODO:

- ~~Make these work in another tag file~~ Now it works, thanks to [Riot 2.0.15](https://muut.com/riotjs/release-notes.html#2-0-15-em-apr-23-2015-em-)!
- Rebuilding components for Riot.js
    - ~~Buttons~~
    - ~~Button groups~~
    - ~~Dropdowns~~
    - Other components

## Buttons

### Button tag

Use the `<btn>` elements.

```html
<btn>btn</btn>
```

### Options

Use any of the available button `option` to quickly create a styled button.

```html
<btn>Default</btn>
<btn option="primary">Primary</btn>
<btn option="success">Success</btn>
<btn option="info">Info</btn>
<btn option="warning">Warning</btn>
<btn option="danger">Danger</btn>
<btn option="link">Link</btn>
```

### Sizes

Fancy larger or smaller buttons? Set the size attributes for additional sizes: `lg`, `sm`, or `xs`

```html
<p>
  <btn option="primary" size="lg">Large button</btn>
  <btn size="lg">Large button</btn>
</p>
<p>
  <btn option="primary">Default button</btn>
  <btn>Default button</btn>
</p>
<p>
  <btn option="primary" size="sm">Small button</btn>
  <btn size="sm">Small button</btn>
</p>
<p>
  <btn option="primary" size="xs">Extra small button</btn>
  <btn size="xs">Extra small button</btn>
</p>
```

## Button groups

Group a series of buttons together on a single line with the button group.

```html
<btn-group>
  <btn>Left</btn>
  <btn>Middle</btn>
  <btn>Right</btn>
</btn-group>
```

## Dropdowns

Toggleable, contextual menu for displaying lists of links.

```html
<btn-group>
  <btn toggle="menu">Default <caret /></btn>
  <menu>
    <menu-item value="action">Action</menu-item>
    <menu-item value="another">Another action</menu-item>
    <menu-item value="something">Something else here</menu-item>
    <menu-item value="separated">Separated link</menu-item>
  </menu>
</btn-group>
```

### Headers

Add a header to label sections of actions in any dropdown menu.

```html
<btn-group>
  <btn toggle="menu">Default <caret /></btn>
  <menu>
    <menu-header>Dropdown header</menu-header>
    <menu-item value="action">Action</menu-item>
    <menu-item value="another">Another action</menu-item>
    <menu-item value="something">Something else here</menu-item>
    <menu-header>Dropdown header</menu-header>
    <menu-item value="separated">Separated link</menu-item>
  </menu>
</btn-group>
```

### Divider

Add a divider to separate series of links in a dropdown menu.

```html
<btn-group>
  <btn toggle="menu">Default <caret /></btn>
  <menu>
    <menu-item value="action">Action</menu-item>
    <menu-item value="another">Another action</menu-item>
    <menu-item value="something">Something else here</menu-item>
    <menu-divider></menu-divider>
    <menu-item value="separated">Separated link</menu-item>
  </menu>
</btn-group>
```

### Split button dropdowns

```html
<btn-group>
  <btn>Default</btn>
  <btn toggle="menu"><caret /></btn>
  <menu>
    <menu-item value="action">Action</menu-item>
    <menu-item value="another">Another action</menu-item>
    <menu-item value="something">Something else here</menu-item>
    <menu-divider></menu-divider>
    <menu-item value="separated">Separated link</menu-item>
  </menu>
</btn-group>
```
