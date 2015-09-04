/*!
 * Riot Bootstrap (http://cognitom.github.io/riot-bootstrap/)
 * Copyright 2015 Tsutomu Kawamura.
 * Licensed under MIT
 */
;(function(window) {

var riot = (!window || !window.riot) ? require('riot') : window.riot;

riot.tag('btn-group', '<yield></yield>', 'btn-group, [riot-tag="btn-group"]{ position: relative; display: inline-block; vertical-align: middle; } btn-group btn, [riot-tag="btn-group"] btn{ position: relative; float: left; } btn-group btn + btn, [riot-tag="btn-group"] btn + btn{ margin-left: -1px; } btn-group btn[toggle]:not(:first-child) > *, [riot-tag="btn-group"] btn[toggle]:not(:first-child) > *{ padding-right: 8px; padding-left: 8px; } btn-group > btn:hover, [riot-tag="btn-group"] > btn:hover,btn-group > btn:focus, [riot-tag="btn-group"] > btn:focus,btn-group > btn:active, [riot-tag="btn-group"] > btn:active{ z-index: 2; } btn-group > btn:not(:first-child):not(:last-child):not([toggle]) > *, [riot-tag="btn-group"] > btn:not(:first-child):not(:last-child):not([toggle]) > *{ border-radius: 0; } btn-group > btn:first-child, [riot-tag="btn-group"] > btn:first-child{ margin-left: 0; } btn-group > btn:first-child:not(:last-child):not([toggle]) > *, [riot-tag="btn-group"] > btn:first-child:not(:last-child):not([toggle]) > *{ border-top-right-radius: 0; border-bottom-right-radius: 0; } btn-group > btn:last-child:not(:first-child) > *, [riot-tag="btn-group"] > btn:last-child:not(:first-child) > *,btn-group > btn:not(:first-child)[toggle] > *, [riot-tag="btn-group"] > btn:not(:first-child)[toggle] > *{ border-top-left-radius: 0; border-bottom-left-radius: 0; }', function(opts) {
    this.mixin('parentScope')
  
});

riot.tag('btn', '<button type="button" __disabled="{ disabled }" data-option="{ opts.option }" data-size="{ opts.size }" data-active="{ active ? \'yes\' : \'no\' }" onclick="{ push }" ><yield></yield></button>', 'btn button, [riot-tag="btn"] button{ display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: normal; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; background-image: none; border: 1px solid transparent; border-radius: 4px; } btn button:focus, [riot-tag="btn"] button:focus{ outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px; } btn button:hover, [riot-tag="btn"] button:hover,btn button:focus, [riot-tag="btn"] button:focus{ color: #333; text-decoration: none; } btn button:active, [riot-tag="btn"] button:active,btn button[data-active="yes"], [riot-tag="btn"] button[data-active="yes"]{ background-image: none; outline: 0; box-shadow: inset 0 3px 2px rgba(0, 0, 0, .1); } btn button[disabled], [riot-tag="btn"] button[disabled]{ pointer-events: none; cursor: not-allowed; box-shadow: none; opacity: .65; } btn button, [riot-tag="btn"] button{ color: #333; background-color: #fff; border-color: #ccc } btn button:hover, [riot-tag="btn"] button:hover,btn button:focus, [riot-tag="btn"] button:focus,btn button:active, [riot-tag="btn"] button:active,btn button[data-active="yes"], [riot-tag="btn"] button[data-active="yes"]{ color: #333; background-color: #e6e6e6; border-color: #adadad } btn button[data-option="primary"], [riot-tag="btn"] button[data-option="primary"]{ color: #fff; background-color: #337ab7; border-color: #2e6da4 } btn button[data-option="primary"]:hover, [riot-tag="btn"] button[data-option="primary"]:hover,btn button[data-option="primary"]:focus, [riot-tag="btn"] button[data-option="primary"]:focus,btn button[data-option="primary"]:active, [riot-tag="btn"] button[data-option="primary"]:active{ color: #fff; background-color: #286090; border-color: #204d74 } btn button[data-option="success"], [riot-tag="btn"] button[data-option="success"]{ color: #fff; background-color: #5cb85c; border-color: #4cae4c } btn button[data-option="success"]:hover, [riot-tag="btn"] button[data-option="success"]:hover,btn button[data-option="success"]:focus, [riot-tag="btn"] button[data-option="success"]:focus,btn button[data-option="success"]:active, [riot-tag="btn"] button[data-option="success"]:active{ color: #fff; background-color: #449d44; border-color: #398439 } btn button[data-option="info"], [riot-tag="btn"] button[data-option="info"]{ color: #fff; background-color: #5bc0de; border-color: #46b8da } btn button[data-option="info"]:hover, [riot-tag="btn"] button[data-option="info"]:hover,btn button[data-option="info"]:focus, [riot-tag="btn"] button[data-option="info"]:focus,btn button[data-option="info"]:active, [riot-tag="btn"] button[data-option="info"]:active{ color: #fff; background-color: #31b0d5; border-color: #269abc } btn button[data-option="warning"], [riot-tag="btn"] button[data-option="warning"]{ color: #fff; background-color: #f0ad4e; border-color: #f0ad4e } btn button[data-option="warning"]:hover, [riot-tag="btn"] button[data-option="warning"]:hover,btn button[data-option="warning"]:focus, [riot-tag="btn"] button[data-option="warning"]:focus,btn button[data-option="warning"]:active, [riot-tag="btn"] button[data-option="warning"]:active{ color: #fff; background-color: #ec971f; border-color: #d58512 } btn button[data-option="danger"], [riot-tag="btn"] button[data-option="danger"]{ color: #fff; background-color: #d9534f; border-color: #d43f3a } btn button[data-option="danger"]:hover, [riot-tag="btn"] button[data-option="danger"]:hover,btn button[data-option="danger"]:focus, [riot-tag="btn"] button[data-option="danger"]:focus,btn button[data-option="danger"]:active, [riot-tag="btn"] button[data-option="danger"]:active{ color: #fff; background-color: #c9302c; border-color: #ac2925 } btn button[data-option="link"], [riot-tag="btn"] button[data-option="link"]{ font-weight: normal; color: #337ab7; border-radius: 0; background-color: transparent; border-color: transparent; box-shadow: none; } btn button[data-option="link"]:hover, [riot-tag="btn"] button[data-option="link"]:hover,btn button[data-option="link"]:focus, [riot-tag="btn"] button[data-option="link"]:focus{ color: #23527c; text-decoration: underline; } btn button[data-size="lg"], [riot-tag="btn"] button[data-size="lg"]{ padding: 10px 16px; font-size: 18px; line-height: 1.3333333; border-radius: 6px; } btn button[data-size="sm"], [riot-tag="btn"] button[data-size="sm"]{ padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; } btn button[data-size="xs"], [riot-tag="btn"] button[data-size="xs"]{ padding: 1px 5px; font-size: 12px; line-height: 1.5; border-radius: 3px; }', function(opts) {
    this.disabled = undefined

    this.culculateProperties = function(e) {
      this.disabled =
        opts.hasOwnProperty('__disabled') ? opts.__disabled === true :
        opts.hasOwnProperty('disabled') ? opts.disabled === '' || opts.disabled === 'disabled':
        false
      this.active =
        opts.hasOwnProperty('active') ? opts.active === '' || opts.active === 'active' || opts.active === true:
        false
    }.bind(this);
    this.push = function(e) {
      if (this.disabled) return
      if (this.parent && opts.toggle) this.parent.trigger('inner-btn-toggle')
      if (opts.href) {
        e.preventUpdate = true
        location.href = opts.href
        return
      }
      if (opts.onpush){
        e.preventUpdate = true
        opts.onpush(e)
        this.updateCaller(opts.onpush)
      }
    }.bind(this);

    this.on('update', this.culculateProperties)
    this.mixin('parentScope')
  
});

riot.tag('calendar', '<table> <thead> <tr> <th><btn onpush="{ prev }">&laquo;</btn></th> <th colspan="5">{ title }</th> <th><btn onpush="{ next }">&raquo;</btn></th> </tr> </thead> <tbody> <tr><th each="{ day in weekdays }">{ day }</th></tr> <tr each="{ week in calendar }"> <td each="{ week }"><btn active="{ selected }" __disabled="{ !currentMonth }" onpush="{ push(daynum) }">{ daynum }</btn></td> </tr> </tbody> </table>', 'calendar, [riot-tag="calendar"]{ display: inline-block; vertical-align: top; padding: 3px; text-align: center; } calendar thead th, [riot-tag="calendar"] thead th{ font-size: 90%; } calendar tbody th, [riot-tag="calendar"] tbody th{ padding: 6px 0; font-size: 90%; } calendar td, [riot-tag="calendar"] td{ text-align: center; padding: 1px; } calendar btn, [riot-tag="calendar"] btn{ width: 100%; display: block; } calendar btn button, [riot-tag="calendar"] btn button{ color: #333; display: block; width: 100%; border: none; padding: 4px 5px; } calendar btn button:hover, [riot-tag="calendar"] btn button:hover,calendar btn button:focus, [riot-tag="calendar"] btn button:focus{ color: #000; text-decoration: none; background: #f7f7f7; } calendar btn button:disabled, [riot-tag="calendar"] btn button:disabled{ color: #bbb; } calendar btn button[data-active="yes"], [riot-tag="calendar"] btn button[data-active="yes"]{ box-shadow: none; background-color: #337ab7; color: white; }', function(opts) {
    var self = this
    var selected = typeof opts.value == 'string' ? opts.value.split(',') : opts.value || []
    var i18n = {
      en: {
        monthFormat: '%M %Y',
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
      },
      fr: {
        monthFormat: '%M %Y',
        months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        weekdays: ['L', 'Ma', 'Me', 'J', 'V', 'S', 'D']
      },
      ja: {
        monthFormat: '%Y年%M月',
        months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        weekdays: ['日', '月', '火', '水', '木', '金', '土']
      },
      zh: {
        monthFormat: '%Y年%M月',
        months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        weekdays: ['一', '二', '三', '四', '五', '六', '日']
      }
    }
    var firstDate = selected[0] ? new Date(selected[0]) : new Date()

    self.lang = i18n[opts.lang] ? opts.lang : i18n[document.documentElement.lang] ? document.documentElement.lang : 'en'
    self.weekdays = i18n[self.lang].weekdays
    self.currentYear = firstDate.getFullYear()
    self.currentMonth = firstDate.getMonth()
    self.title = ''
    self.multi = false

    this.prev = function(e) {
      if (--self.currentMonth < 0) {
        self.currentMonth = 11
        self.currentYear--
      }
    }.bind(this);
    this.next = function(e) {
      if (11 < ++self.currentMonth) {
        self.currentMonth = 0
        self.currentYear++
      }
    }.bind(this);
    this.push = function(daynum) {
      return function(e) {
        var d = getDateString(self.currentYear, self.currentMonth, daynum)
        if (!self.multi) selected = [d]
        else if (!isSelected(d, true)) selected.push(d)
        var value = self.multi ? selected : selected[0]
        self.root.setAttribute('value', value)
        self.trigger('change', value)
        if (opts.onchange){
          opts.onchange(value)
          self.updateCaller(opts.onchange)
        }
        self.update()
      }
    }.bind(this);

    function getDayOf1st(y, m) {
      return new Date(y, m, 1).getDay()
    }
    function getNumOfDays(y, m) {
      return new Date(y, m + 1, 0).getDate()
    }
    function getDateString(y, m, d) {
      return y
        + '-' + (m < 9 ? '0' + (m + 1) : m + 1)
        + '-' + (d < 10 ? '0' + d : d)
    }
    function isSelected(d, deleteFlag) {
      for (var i = 0; i < selected.length; i++)
        if (selected[i] == d) {
          if (deleteFlag) selected.splice(i, 1)
          return true
        }
      return false
    }
    var z = 0

    self.on('update', function() {
      self.multi =
        opts.hasOwnProperty('multi') ? opts.multi === '' || opts.multi === 'multi' || opts.multi === true:
        false
      self.title = i18n[self.lang].monthFormat
        .replace('%M', i18n[self.lang].months[self.currentMonth])
        .replace('%Y', self.currentYear)

      var y = self.currentYear, m = self.currentMonth
      var d0 = getDayOf1st(y, m), dn = getNumOfDays(y, m)
      var numberOfRows = Math.ceil((d0 + dn) / 7)
      var d, w
      self.calendar = []
      for (var i = 0; i < numberOfRows; i++) {
        w = []
        for (var j = 0; j < 7; j++) {
          d = new Date(y, m, 7 * i + j + 1 - d0)
          w.push({
            daynum: d.getDate(),
            selected: isSelected(getDateString(d.getFullYear(), d.getMonth(), d.getDate())),
            currentMonth: d.getMonth() == m
          })
        }
        self.calendar.push(w)
      }
    })

    this.click = function(e) {
      var menu = self.parent
      if (menu.select) menu.select(self.multi ? selected : selected[0])
    }.bind(this);
    this.addEventListners = function(e) {
      self.root.addEventListener('touchstart', self.click, false)
      self.root.addEventListener('click', self.click, false)
    }.bind(this);
    this.removeEventListners = function(e) {
      self.root.removeEventListener('touchstart', self.click)
      self.root.removeEventListener('click', self.click)
    }.bind(this);

    self.one('mount', self.addEventListners)
    self.one('unmount', self.removeEventListners)
    self.mixin('parentScope')
  
});

riot.tag('caret', '', 'caret, [riot-tag="caret"]{ display: inline-block; width: 0; height: 0; margin-left: 2px; vertical-align: middle; border-top: 4px dashed; border-right: 4px solid transparent; border-left: 4px solid transparent; }', function(opts) {
  

});

riot.tag('input-img', '<img riot-src="{ image }" width="{ width }" height="{ height }"> <input if="{ name }" name="{ name }" type="hidden" value="{ self.image }">', 'input-img { position: relative; display: inline-block; vertical-align: middle; padding: 4px; line-height: 1em; border: 1px solid #ccc; border-radius: 5px; overflow: hidden; } input-img.highlight { box-shadow: 0 0 5px #419bf9; } input-img > img { display: block; border-radius: 3px; }', function(opts) {
    var self = this
    self.image  = opts.value || opts.placeholder || ''
    self.width  = opts.width || 100
    self.height = opts.height || 100
    self.name   = opts.name || ''

    this.processFiles = function(e) {
      e.stopPropagation()
      e.preventDefault()
      self.dehightlight()

      var file = e.dataTransfer.files[0]
      var reader = new FileReader()
      if (file.type.match('image.*')) {
        reader.onload = function(e2) {
          self.image = e2.target.result
          self.update()
          if (self.image.length > 32768)
            console.log('In IE8, data URIs cannot be larger than 32,768 characters.')
          self.trigger('change')
        }
        reader.readAsDataURL(file)
      }
    }.bind(this);

    this.highlight = function(e) {
      e.stopPropagation()
      e.preventDefault()
      self.root.setAttribute('class', 'highlight')
    }.bind(this);

    this.dehightlight = function() {
      self.root.removeAttribute('class')
    }.bind(this);

    if (isDroppable()) {
      self.on('mount', function() {
        self.root.addEventListener('drop', self.processFiles, false)
        self.root.addEventListener('dragover', self.highlight, false)
        self.root.addEventListener('dragenter', self.highlight, false)
        self.root.addEventListener('dragleave', self.dehightlight, false)
      })
    }

    self.on('update', function() {
      self.root.value = self.image
    })

    self.on('change', function() {
      if (opts.onchange){
        opts.onchange()
        self.updateCaller(opts.onchange)
      }
    })

    function isDroppable() {
      return window.File && window.FileReader && window.FileList && window.Blob
    }

    this.mixin('parentScope')
  
});

riot.tag('menu-divider', '', 'menu-divider, [riot-tag="menu-divider"]{ display: block; height: 1px; margin: 9px 0; overflow: hidden; background-color: #e5e5e5; }', function(opts) {
  

});

riot.tag('menu-header', '<yield></yield>', 'menu-header, [riot-tag="menu-header"]{ display: block; padding: 3px 20px; font-size: 12px; line-height: 1.42857143; color: #777; white-space: nowrap; }', function(opts) {
    this.mixin('parentScope')
  
});

riot.tag('menu-item', '<yield></yield>', 'menu-item { display: block; padding: 3px 20px; clear: both; font-weight: normal; line-height: 1.42857143; color: #333; white-space: nowrap; cursor: pointer; } menu-item:hover, menu-item:focus { color: #262626; text-decoration: none; background-color: #f5f5f5; }', function(opts) {

    this.click = function(e) {
      var menu = this.parent
      if (!menu.select) menu = menu.parent // if inner roop
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
    this.mixin('parentScope')
  
});

riot.tag('menu', '<yield></yield>', 'menu, [riot-tag="menu"]{ position: absolute; top: 100%; left: 0; z-index: 1000; display: none; float: left; min-width: 160px; padding: 5px 0; margin: 2px 0 0; font-size: 14px; text-align: left; list-style: none; background-color: #fff; background-clip: padding-box; border: 1px solid #ccc; border: 1px solid rgba(0, 0, 0, .15); border-radius: 4px; box-shadow: 0 6px 12px rgba(0, 0, 0, .175); }', function(opts) {
    var opened = false

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
      if (opts.onselect) {
        opts.onselect(value)
        this.updateCaller(opts.onselect)
      }
    }.bind(this);
    this.addEventListners = function(e) {
      document.addEventListener('touchstart', this.close, false)
      document.addEventListener('click', this.close, false)
    }.bind(this);
    this.removeEventListners = function(e) {
      document.removeEventListener('touchstart', this.close)
      document.removeEventListener('click', this.close)
    }.bind(this);

    if (this.parent) this.parent.on('inner-btn-toggle', this.open)
    this.mixin('parentScope')
  
});

riot.tag('radio-group', '<yield></yield>', 'radio-group, [riot-tag="radio-group"]{ position: relative; display: inline-block; vertical-align: middle; } radio-group radio, [riot-tag="radio-group"] radio{ position: relative; float: left; } radio-group radio + radio, [riot-tag="radio-group"] radio + radio{ margin-left: -1px; } radio-group radio[toggle]:not(:first-child) > *, [riot-tag="radio-group"] radio[toggle]:not(:first-child) > *{ padding-right: 8px; padding-left: 8px; } radio-group > radio:hover, [riot-tag="radio-group"] > radio:hover,radio-group > radio:focus, [riot-tag="radio-group"] > radio:focus,radio-group > radio:active, [riot-tag="radio-group"] > radio:active{ z-index: 2; } radio-group > radio:not(:first-child):not(:last-child):not([toggle]) > *, [riot-tag="radio-group"] > radio:not(:first-child):not(:last-child):not([toggle]) > *{ border-radius: 0; } radio-group > radio:first-child, [riot-tag="radio-group"] > radio:first-child{ margin-left: 0; } radio-group > radio:first-child:not(:last-child):not([toggle]) > *, [riot-tag="radio-group"] > radio:first-child:not(:last-child):not([toggle]) > *{ border-top-right-radius: 0; border-bottom-right-radius: 0; } radio-group > radio:last-child:not(:first-child) > *, [riot-tag="radio-group"] > radio:last-child:not(:first-child) > *,radio-group > radio:not(:first-child)[toggle] > *, [riot-tag="radio-group"] > radio:not(:first-child)[toggle] > *{ border-top-left-radius: 0; border-bottom-left-radius: 0; }', function(opts) {
    this.value = opts.value

    this.set = function(value) {
      this.value = value
      this.root.value = value
      this.trigger('change', value)
      if (opts.onchange){
        opts.onchange(value)
        this.updateCaller(opts.onchange)
      }
    }.bind(this);
    
    this.mixin('parentScope')
  
});

riot.tag('radio', '<button type="button" __disabled="{ opts.disabled }" data-selected="{ selected ? \'yes\' : \'no\' }" data-size="{ opts.size }" onclick="{ click }" ><input type="radio" __checked="{ selected }" onclick="{ click }"> <yield></yield></button>', 'radio button, [riot-tag="radio"] button{ display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: normal; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; background-image: none; border: 1px solid transparent; border-radius: 4px; } radio button:focus, [riot-tag="radio"] button:focus{ outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px; } radio button:hover, [riot-tag="radio"] button:hover,radio button:focus, [riot-tag="radio"] button:focus{ color: #333; text-decoration: none; } radio button:active, [riot-tag="radio"] button:active{ background-image: none; outline: 0; box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125); } radio button[disabled], [riot-tag="radio"] button[disabled]{ pointer-events: none; cursor: not-allowed; box-shadow: none; opacity: .65; } radio button, [riot-tag="radio"] button{ color: #333; background-color: #fff; border-color: #ccc } radio button:hover, [riot-tag="radio"] button:hover,radio button:focus, [riot-tag="radio"] button:focus,radio button:active, [riot-tag="radio"] button:active,radio button[data-selected="yes"], [riot-tag="radio"] button[data-selected="yes"]{ color: #333; background-color: #e6e6e6; border-color: #adadad } radio button[data-size="lg"], [riot-tag="radio"] button[data-size="lg"]{ padding: 10px 16px; font-size: 18px; line-height: 1.3333333; border-radius: 6px; } radio button[data-size="sm"], [riot-tag="radio"] button[data-size="sm"]{ padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; } radio button[data-size="xs"], [riot-tag="radio"] button[data-size="xs"]{ padding: 1px 5px; font-size: 12px; line-height: 1.5; border-radius: 3px; }', function(opts) {
    this.selected = (opts.value == this.parent.value)

    this.check = function() {
      this.selected = (opts.value == this.parent.value)
      this.update()
    }.bind(this);

    this.click = function(e) {
      if (this.selected) return
      if (this.parent && this.parent.set) this.parent.set(opts.value || this.root.innerText)
      else this.selected = true
    }.bind(this);

    this.parent.on('change', this.check)
  
});

/*!
 * Parent Scope mixin
 * A part of Riot Bootstrap
 * http://cognitom.github.io/riot-bootstrap/
 */
riot.mixin('parentScope', {
  // initialize mixin
  init: function() {
    this._ownPropKeys = []
    this._ownOptsKeys = []
    for (var k in this) this._ownPropKeys[k] = true
    for (var k in this.opts) this._ownOptsKeys[k] = true

    this.on('update', function() {
      for (var k in this.parent)
        if (!this._ownPropKeys[k]) this[k] = this.parent[k]
      for (var k in this.parent.opts)
        if (!this._ownOptsKeys[k]) this.opts[k] = this.parent.opts[k]
    })
  },

  // update the tag object who calls me
  updateCaller: function(f) {
    var keys = []
    for (var k in this.parent._ownPropKeys || this.parent) keys.push(k)
    for (var i = 0; i < keys.length; i++)
      if (this.parent[keys[i]] === f) {
        this.parent.update()
        return
      }
    if (this.parent.updateCaller) this.parent.updateCaller(f)
  }
})


})(typeof window != 'undefined' ? window : undefined)