riot.tag('btn-group', '', 'btn-group { position: relative; display: inline-block; vertical-align: middle; } btn-group btn { position: relative; float: left; } btn-group btn + btn { margin-left: -1px; } btn-group btn[toggle]:not(:first-child) > * { padding-right: 8px; padding-left: 8px; } btn-group > btn:hover,btn-group > btn:focus,btn-group > btn:active { z-index: 2; } btn-group > btn:not(:first-child):not(:last-child):not([toggle]) > * { border-radius: 0; } btn-group > btn:first-child { margin-left: 0; } btn-group > btn:first-child:not(:last-child):not([toggle]) > * { border-top-right-radius: 0; border-bottom-right-radius: 0; } btn-group > btn:last-child:not(:first-child) > *,btn-group > btn:not(:first-child)[toggle] > * { border-top-left-radius: 0; border-bottom-left-radius: 0; }', function(opts) {
    this.root.tag = this // needed for communicate with child tags
  
});

riot.tag('btn', '<button type="button" __disabled="{ opts.disabled }" data-option="{ opts.option }" data-size="{ opts.size }" onclick="{ click }" ></button>', 'btn button { display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: normal; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; background-image: none; border: 1px solid transparent; border-radius: 4px; } btn button:focus { outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px; } btn button:hover,btn button:focus { color: #333; text-decoration: none; } btn button:active { background-image: none; outline: 0; box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125); } btn button[disabled] { pointer-events: none; cursor: not-allowed; box-shadow: none; opacity: .65; } btn button { color: #333; background-color: #fff; border-color: #ccc } btn button:hover,btn button:focus,btn button:active { color: #333; background-color: #e6e6e6; border-color: #adadad } btn button[data-option="primary"] { color: #fff; background-color: #337ab7; border-color: #2e6da4 } btn button[data-option="primary"]:hover,btn button[data-option="primary"]:focus,btn button[data-option="primary"]:active { color: #fff; background-color: #286090; border-color: #204d74 } btn button[data-option="success"] { color: #fff; background-color: #5cb85c; border-color: #4cae4c } btn button[data-option="success"]:hover,btn button[data-option="success"]:focus,btn button[data-option="success"]:active { color: #fff; background-color: #449d44; border-color: #398439 } btn button[data-option="info"] { color: #fff; background-color: #5bc0de; border-color: #46b8da } btn button[data-option="info"]:hover,btn button[data-option="info"]:focus,btn button[data-option="info"]:active { color: #fff; background-color: #31b0d5; border-color: #269abc } btn button[data-option="warning"] { color: #fff; background-color: #f0ad4e; border-color: #f0ad4e } btn button[data-option="warning"]:hover,btn button[data-option="warning"]:focus,btn button[data-option="warning"]:active { color: #fff; background-color: #ec971f; border-color: #d58512 } btn button[data-option="danger"] { color: #fff; background-color: #d9534f; border-color: #d43f3a } btn button[data-option="danger"]:hover,btn button[data-option="danger"]:focus,btn button[data-option="danger"]:active { color: #fff; background-color: #c9302c; border-color: #ac2925 } btn button[data-option="link"] { font-weight: normal; color: #337ab7; border-radius: 0; background-color: transparent; border-color: transparent; box-shadow: none; } btn button[data-option="link"]:hover,btn button[data-option="link"]:focus { color: #23527c; text-decoration: underline; } btn button[data-size="lg"] { padding: 10px 16px; font-size: 18px; line-height: 1.3333333; border-radius: 6px; } btn button[data-size="sm"] { padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; } btn button[data-size="xs"] { padding: 1px 5px; font-size: 12px; line-height: 1.5; border-radius: 3px; }', function(opts) {
    var parent = this.root.parentElement.tag
    var content = opts.content

    this.click = function(e) {
      if (parent && opts.toggle) parent.trigger('inner-btn-toggle')
      if (opts.onclick) opts.onclick(e)
    }.bind(this);
    this.setContent = function() {
      this.root.firstChild.innerHTML = content
    }.bind(this);
    if (!content) content = this.root.innerHTML
    this.root.innerHTML = ''
    this.one('mount', this.setContent)
  
});

riot.tag('caret', '', 'caret { display: inline-block; width: 0; height: 0; margin-left: 2px; vertical-align: middle; border-top: 4px dashed; border-right: 4px solid transparent; border-left: 4px solid transparent; }', function(opts) {

});
riot.tag('menu-divider', '', 'menu-divider { display: block; height: 1px; margin: 9px 0; overflow: hidden; background-color: #e5e5e5; }', function(opts) {

});

riot.tag('menu-header', '', 'menu-header { display: block; padding: 3px 20px; font-size: 12px; line-height: 1.42857143; color: #777; white-space: nowrap; }', function(opts) {

});

riot.tag('menu-item', '', 'menu-item { display: block; padding: 3px 20px; clear: both; font-weight: normal; line-height: 1.42857143; color: #333; white-space: nowrap; cursor: pointer; } menu-item:hover, menu-item:focus { color: #262626; text-decoration: none; background-color: #f5f5f5; }', function(opts) {
    var menu = this.root.parentElement.tag

    this.click = function(e) {
      menu.select(opts.value || this.root.innerText)
    }.bind(this);
    this.addEventListners = function(e) {
      this.root.addEventListener('touchstart', this.click, false)
      this.root.addEventListener('click', this.click, false)
    }.bind(this);
    this.removeEventListners = function(e) {
      this.root.removeEventListener('touchstart', this.click)
      this.root.removeEventListener('click', this.click)
    }.bind(this);

    this.one('mount', this.addEventListners)
    this.one('unmount', this.removeEventListners)
  
});

riot.tag('menu', '', 'menu { position: absolute; top: 100%; left: 0; z-index: 1000; display: none; float: left; min-width: 160px; padding: 5px 0; margin: 2px 0 0; font-size: 14px; text-align: left; list-style: none; background-color: #fff; background-clip: padding-box; border: 1px solid #ccc; border: 1px solid rgba(0, 0, 0, .15); border-radius: 4px; box-shadow: 0 6px 12px rgba(0, 0, 0, .175); }', function(opts) {
    var parent = this.root.parentElement.tag
    var opened = false

    this.root.tag = this // needed for communicate with child tags

    this.open = function(e) {
      if (!opened) {
        opened = true
        this.root.style.display = 'block'
        setTimeout(this.addEventListners, 1)
      }
    }.bind(this);
    this.close = function(e) {
      opened = false
      this.root.style.display = 'none'
      this.removeEventListners()
    }.bind(this);
    this.select = function(value) {
      if (opts.onselect) opts.onselect(value)
    }.bind(this);
    this.addEventListners = function(e) {
      document.addEventListener('touchstart', this.close, false)
      document.addEventListener('click', this.close, false)
    }.bind(this);
    this.removeEventListners = function(e) {
      document.removeEventListener('touchstart', this.close)
      document.removeEventListener('click', this.close)
    }.bind(this);

    if (parent) parent.on('inner-btn-toggle', this.open)
  
});