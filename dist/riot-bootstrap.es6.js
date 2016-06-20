import riot from 'riot';

var domEvent = {
  /**
   * Trigger Event on DOM (root element of the tag)
   * @param { string } eventName - the name of the event. ex: 'change'
   */
  triggerDomEvent: function triggerDomEvent(eventName) {
    var _this = this;

    setTimeout(function () {
      var e;
      if (typeof Event == 'function') {
        // Standard browsers
        e = new Event(eventName);
      } else {
        // IE 9 ~ 11
        e = document.createEvent('Event');
        e.initEvent(eventName, true, true);
      }
      /** dispatch an event */
      _this.root.dispatchEvent(e);
    }, 0);
    return this; // return this for method chain
  }
};

var syncEvent = {
  /** Init mixin on each tag */
  init: function init() {
    var _this = this;

    this._shouldSyncFromOpts = true;
    this.on('update', function () {
      if (_this._shouldSyncFromOpts) _this.trigger('sync');
      _this._shouldSyncFromOpts = true;
    });
  },

  /** Skip sync event once */
  skipSync: function skipSync() {
    this._shouldSyncFromOpts = false;
    return this; // return this for method chain
  }
};

/** Return all property names */
function getAllPropertyNames(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(key);
  }return arr;
}

/** Call original method and update automatically */
function hook(p, key) {
  var h = function h(e) {
    // update only when the argument is an Event object
    if (e && e instanceof Event) {
      // suppress updating on the inherit tag
      e.preventUpdate = true;
      // call original method
      p[key](e);
      // update automatically
      p.update();
    } else {
      p[key](e);
    }
  };
  h._inherited = true;
  return h;
}

var parentScope = {
  /**
   * Inject properties from parents
   */
  init: function init() {
    var _this = this;

    /** Store the keys originally belonging to the tag */
    this.one('update', function () {
      _this._ownPropKeys = getAllPropertyNames(_this);
      _this._ownOptsKeys = getAllPropertyNames(_this.opts);
    });
    /** Inherit the properties from parents on each update */
    this.on('update', function () {
      var ignoreProps = ['root', 'triggerDomEvent'];
      getAllPropertyNames(_this.parent)
      // TODO:
      //   Skipping 'triggerDomEvent' is a temporal workaround.
      //   In some cases function on the child would be overriden.
      //   This issue needs more study...
      .filter(function (key) {
        return ! ~_this._ownPropKeys.concat(ignoreProps).indexOf(key);
      }).forEach(function (key) {
        _this[key] = typeof _this.parent[key] != 'function' || _this.parent[key]._inherited ? _this.parent[key] : hook(_this.parent, key);
      });
      getAllPropertyNames(_this.parent.opts).filter(function (key) {
        return ! ~_this._ownOptsKeys.indexOf(key) && key != 'riotTag';
      }).forEach(function (key) {
        _this.opts[key] = typeof _this.parent.opts[key] != 'function' || _this.parent.opts[key]._inherited ? _this.parent.opts[key] : hook(_this.parent, key);
      });
    });
  }
};

riot.tag2('time-picker-popup', '<ul if="{active}" riot-style="top: {top}px; left: {left}px"> <li each="{hours}"> {hh % 2 ? \'&middot;\' : hh + \':00\'} </li> </ul> <ol if="{active}" riot-style="top: {top2}px; left: {left2}px; display: {subMenuIsOpen ? \'block\' : \'none\'}" class="{roundLeft: roundLeft}"> <li onmouseover="{mouseover(\'00\')}" onclick="{done}">{hh}:{mm}</li> <li onmouseover="{mouseover(\'05\')}" onclick="{done}">&middot;</li> <li onmouseover="{mouseover(\'10\')}" onclick="{done}">10</li> <li onmouseover="{mouseover(\'15\')}" onclick="{done}">&middot;</li> <li onmouseover="{mouseover(\'20\')}" onclick="{done}">20</li> <li onmouseover="{mouseover(\'25\')}" onclick="{done}">&middot;</li> <li onmouseover="{mouseover(\'30\')}" onclick="{done}">30</li> <li onmouseover="{mouseover(\'35\')}" onclick="{done}">&middot;</li> <li onmouseover="{mouseover(\'40\')}" onclick="{done}">40</li> <li onmouseover="{mouseover(\'45\')}" onclick="{done}">&middot;</li> <li onmouseover="{mouseover(\'50\')}" onclick="{done}">50</li> <li onmouseover="{mouseover(\'55\')}" onclick="{done}">&middot;</li> </ol>', 'time-picker-popup ul,[riot-tag="time-picker-popup"] ul,[data-is="time-picker-popup"] ul{ position: absolute; z-index: 1000; float: left; padding: 10px 0; margin: 0; font-size: 14px; text-align: left; list-style: none; background-color: #fff; background-clip: padding-box; border: 1px solid #ccc; border: 1px solid rgba(0, 0, 0, .15); border-radius: 4px; box-shadow: 0 6px 12px rgba(0, 0, 0, .175); } time-picker-popup ul > li,[riot-tag="time-picker-popup"] ul > li,[data-is="time-picker-popup"] ul > li{ padding: 0 15px; line-height: 16px; color: #666; position: relative; text-align: center; } time-picker-popup ol,[riot-tag="time-picker-popup"] ol,[data-is="time-picker-popup"] ol{ position: absolute; white-space: nowrap; z-index: 1001; list-style: none; padding: 3px 13px; margin: 0; color: white; text-decoration: none; background-color: #3879d9; cursor: pointer; border-top-right-radius: 4px; border-bottom-right-radius: 4px; box-shadow: 0 3px 6px rgba(0, 0, 0, .175); transition: left .2s; } time-picker-popup ol.roundLeft,[riot-tag="time-picker-popup"] ol.roundLeft,[data-is="time-picker-popup"] ol.roundLeft{ border-top-left-radius: 4px; border-bottom-left-radius: 4px; } time-picker-popup ol > li,[riot-tag="time-picker-popup"] ol > li,[data-is="time-picker-popup"] ol > li{ display: inline-block; margin: 0; padding: 0 2px; min-width: 13px; text-align: center; line-height: 24px; border-radius: 4px; } time-picker-popup ol > li + li,[riot-tag="time-picker-popup"] ol > li + li,[data-is="time-picker-popup"] ol > li + li{ margin-left: -4px; color: rgba(255,255,255,.65) } time-picker-popup ol > li:hover,[riot-tag="time-picker-popup"] ol > li:hover,[data-is="time-picker-popup"] ol > li:hover{ background-color: #528ce1; color: white; }', '', function (opts) {
  var _this = this;

  var ITEM_HEIGHT = 16;
  var popupWidth, popupHeight;
  var minutesPositions = [];

  this.hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'].map(function (hh) {
    return { hh: hh, mm: '00' };
  });
  this.value = opts.value || '00:00';
  this.hh = this.value.split(':')[0];
  this.mm = this.value.split(':')[1];
  this.top = 0;
  this.left = 0;
  this.top2 = 0;
  this.left2 = 0;
  this.roundLeft = false;
  this.active = false;
  this.subMenuIsOpen = false;
  this.deviceType = 'pc';

  this.activate = function (top, left, deviceType) {
    switch (_this.deviceType = deviceType) {
      case 'pc':
        _this.activateForPC(top, left);break;
      case 'tablet':
        _this.activateForTablet(top, left);break;
    }
  };

  this.activateForPC = function (top, left) {
    _this.update({
      active: true,
      subMenuIsOpen: true,
      top: top,
      left: left,
      top2: top + _this.hh * ITEM_HEIGHT + 4,
      left2: left,
      roundLeft: false
    });
    var ul = _this.root.querySelector('ul');
    popupWidth = ul.clientWidth;
    popupHeight = ul.clientHeight;
    var w = _this.root.querySelector('ol').clientWidth;
    if (_this.left2 + w > document.body.clientWidth) _this.update({
      left2: document.body.clientWidth - w - 5,
      roundLeft: true
    });
    document.addEventListener('mousemove', _this.move);
    document.addEventListener('click', _this.deactivate, true);
  };

  this.activateForTablet = function (top, left) {
    _this.update({
      active: true,
      subMenuIsOpen: false,
      top: top,
      left: left,
      top2: top + _this.hh * ITEM_HEIGHT + 4,
      left2: left,
      roundLeft: false
    });
    var ul = _this.root.querySelector('ul');
    popupWidth = ul.clientWidth;
    popupHeight = ul.clientHeight;
    document.addEventListener('touchstart', _this.touchstart, true);
  };

  this.deactivate = function (e) {
    _this.update({
      active: false
    });
    document.removeEventListener('mousemove', _this.move);
    document.removeEventListener('click', _this.deactivate, true);
    document.removeEventListener('touchstart', _this.touchstart, true);
    document.removeEventListener('touchmove', _this.move, false);
    document.removeEventListener('touchend', _this.done, false);
  };

  this.touchstart = function (e) {
    var x = document.body.scrollLeft + e.touches[0].clientX,
        y = document.body.scrollTop + e.touches[0].clientY,
        hh = Math.floor((y - _this.top - 8) / ITEM_HEIGHT);

    if (x - _this.left < 0 || popupWidth < x - _this.left || y - _this.top < 0 || popupHeight < y - _this.top) {
      _this.deactivate(e);
      return;
    }

    _this.update({
      top2: _this.top + hh * ITEM_HEIGHT + 4,
      hh: hh < 10 ? '0' + hh : hh + '',
      subMenuIsOpen: true
    });

    var w = _this.root.querySelector('ol').clientWidth;
    if (_this.left2 + w > document.body.clientWidth) _this.update({
      left2: document.body.clientWidth - w - 5,
      roundLeft: true
    });

    var lis = _this.root.querySelectorAll('ol>li');
    minutesPositions = [].map.call(lis, function (c) {
      var rect = c.getBoundingClientRect();
      return rect.left + document.body.scrollLeft;
    });

    document.addEventListener('touchmove', _this.move, false);
    document.addEventListener('touchend', _this.done, false);
  };

  this.move = function (e) {

    e.preventDefault();

    var x = document.body.scrollLeft;
    var y = document.body.scrollTop;
    if (_this.deviceType == 'pc') {
      x += e.clientX;
      y += e.clientY;
      if (x - _this.left < 0 || popupWidth < x - _this.left) return;
    } else {
      x += e.touches[0].clientX;
      y += e.touches[0].clientY;
    }

    var hh = Math.floor((y - _this.top - 8) / ITEM_HEIGHT);
    hh = hh < 0 ? 0 : hh > 23 ? 23 : hh;

    var mm = minutesPositions.filter(function (c) {
      return c < x;
    }).length || 1;
    mm = (mm - 1) * 5;

    if (_this.hh - hh || _this.mm - mm) {
      _this.hh = hh < 10 ? '0' + hh : hh + '';
      _this.mm = mm < 10 ? '0' + mm : mm + '';
      _this.top2 = _this.top + hh * ITEM_HEIGHT + 4;
      _this.update();
    }
  };

  this.mouseover = function (mm) {
    return function (e) {
      _this.mm = mm;
    };
  };

  this.done = function (e) {
    _this.trigger('change', _this.hh + ':' + _this.mm);
    _this.deactivate(e);
  };
});

riot.tag2('time-picker', '<button onclick="{click}" ontouchstart="{click}">{value} <span class="caret"></span></button> <input if="{opts.name}" name="{opts.name}" type="hidden" value="{value}">', 'time-picker,[riot-tag="time-picker"],[data-is="time-picker"]{ display: inline-block; background-color: white; } time-picker .caret::after,[riot-tag="time-picker"] .caret::after,[data-is="time-picker"] .caret::after{ content: "\\25BE"; } time-picker button,[riot-tag="time-picker"] button,[data-is="time-picker"] button{ display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: normal; line-height: 1.4; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; background-image: none; border: 1px solid transparent; border-radius: 4px; } time-picker button:focus,[riot-tag="time-picker"] button:focus,[data-is="time-picker"] button:focus{ outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px; } time-picker button:hover,[riot-tag="time-picker"] button:hover,[data-is="time-picker"] button:hover,time-picker button:focus,[riot-tag="time-picker"] button:focus,[data-is="time-picker"] button:focus{ color: #333; text-decoration: none; } time-picker button:active,[riot-tag="time-picker"] button:active,[data-is="time-picker"] button:active,time-picker button[data-active="yes"],[riot-tag="time-picker"] button[data-active="yes"],[data-is="time-picker"] button[data-active="yes"]{ background-image: none; outline: 0; box-shadow: inset 0 3px 2px rgba(0, 0, 0, .1); } time-picker button[disabled],[riot-tag="time-picker"] button[disabled],[data-is="time-picker"] button[disabled]{ pointer-events: none; cursor: not-allowed; box-shadow: none; opacity: .65; } time-picker button,[riot-tag="time-picker"] button,[data-is="time-picker"] button{ color: #333; background-color: #fff; border-color: #ccc } time-picker button:hover,[riot-tag="time-picker"] button:hover,[data-is="time-picker"] button:hover,time-picker button:focus,[riot-tag="time-picker"] button:focus,[data-is="time-picker"] button:focus,time-picker button:active,[riot-tag="time-picker"] button:active,[data-is="time-picker"] button:active,time-picker button[data-active="yes"],[riot-tag="time-picker"] button[data-active="yes"],[data-is="time-picker"] button[data-active="yes"]{ color: #333; background-color: #e6e6e6; border-color: #adadad }', '', function (opts) {
  var _this = this;

  this.mixin(domEvent).mixin(syncEvent);

  var popupDom = document.createElement('div'),
      popup = riot.mount(popupDom, 'time-picker-popup', opts)[0];

  this.click = function (e) {
    var deviceType = e.type == 'touchstart' ? 'tablet' : 'pc',
        rect = _this.root.getBoundingClientRect(),
        y = rect.top + document.body.scrollTop,
        x = rect.left + document.body.scrollLeft,
        top = y - 4 - _this.value.split(':')[0] * 16,
        left = x - 3;
    popup.activate(top < 5 ? 5 : top, left, deviceType);
  };

  this.on('mount', function () {
    _this.root.value = _this.value;
    document.body.appendChild(popupDom);
  });

  this.on('unmount', function () {
    document.body.removeChild(popupDom);
  });

  this.on('sync', function () {
    _this.value = opts.value || '00:00';
  });

  popup.on('change', function (newValue) {

    _this.root.value = _this.value = newValue;
    _this.skipSync();
    _this.update();

    _this.triggerDomEvent('change');
  });
});

riot.tag2('btn-group', '<yield></yield>', 'btn-group,[riot-tag="btn-group"],[data-is="btn-group"]{ position: relative; display: inline-block; vertical-align: middle; } btn-group btn,[riot-tag="btn-group"] btn,[data-is="btn-group"] btn{ position: relative; float: left; } btn-group btn + btn,[riot-tag="btn-group"] btn + btn,[data-is="btn-group"] btn + btn{ margin-left: -1px; } btn-group btn[toggle]:not(:first-child) > *,[riot-tag="btn-group"] btn[toggle]:not(:first-child) > *,[data-is="btn-group"] btn[toggle]:not(:first-child) > *{ padding-right: 8px; padding-left: 8px; } btn-group > btn:hover,[riot-tag="btn-group"] > btn:hover,[data-is="btn-group"] > btn:hover,btn-group > btn:focus,[riot-tag="btn-group"] > btn:focus,[data-is="btn-group"] > btn:focus,btn-group > btn:active,[riot-tag="btn-group"] > btn:active,[data-is="btn-group"] > btn:active{ z-index: 2; } btn-group > btn:not(:first-child):not(:last-child):not([toggle]) > *,[riot-tag="btn-group"] > btn:not(:first-child):not(:last-child):not([toggle]) > *,[data-is="btn-group"] > btn:not(:first-child):not(:last-child):not([toggle]) > *{ border-radius: 0; } btn-group > btn:first-child,[riot-tag="btn-group"] > btn:first-child,[data-is="btn-group"] > btn:first-child{ margin-left: 0; } btn-group > btn:first-child:not(:last-child):not([toggle]) > *,[riot-tag="btn-group"] > btn:first-child:not(:last-child):not([toggle]) > *,[data-is="btn-group"] > btn:first-child:not(:last-child):not([toggle]) > *{ border-top-right-radius: 0; border-bottom-right-radius: 0; } btn-group > btn:last-child:not(:first-child) > *,[riot-tag="btn-group"] > btn:last-child:not(:first-child) > *,[data-is="btn-group"] > btn:last-child:not(:first-child) > *,btn-group > btn:not(:first-child)[toggle] > *,[riot-tag="btn-group"] > btn:not(:first-child)[toggle] > *,[data-is="btn-group"] > btn:not(:first-child)[toggle] > *{ border-top-left-radius: 0; border-bottom-left-radius: 0; }', '', function (opts) {
    this.mixin(parentScope);
});

riot.tag2('btn', '<button type="button" __disabled="{disabled}" data-option="{opts.option}" data-size="{opts.size}" data-active="{active ? \'yes\' : \'no\'}" onclick="{click}"><yield></yield></button>', 'btn button,[riot-tag="btn"] button,[data-is="btn"] button{ display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: normal; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; background-image: none; border: 1px solid transparent; border-radius: 4px; } btn button:focus,[riot-tag="btn"] button:focus,[data-is="btn"] button:focus{ outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px; } btn button:hover,[riot-tag="btn"] button:hover,[data-is="btn"] button:hover,btn button:focus,[riot-tag="btn"] button:focus,[data-is="btn"] button:focus{ color: #333; text-decoration: none; } btn button:active,[riot-tag="btn"] button:active,[data-is="btn"] button:active,btn button[data-active="yes"],[riot-tag="btn"] button[data-active="yes"],[data-is="btn"] button[data-active="yes"]{ background-image: none; outline: 0; box-shadow: inset 0 3px 2px rgba(0, 0, 0, .1); } btn button[disabled],[riot-tag="btn"] button[disabled],[data-is="btn"] button[disabled]{ pointer-events: none; cursor: not-allowed; box-shadow: none; opacity: .65; } btn button,[riot-tag="btn"] button,[data-is="btn"] button{ color: #333; background-color: #fff; border-color: #ccc } btn button:hover,[riot-tag="btn"] button:hover,[data-is="btn"] button:hover,btn button:focus,[riot-tag="btn"] button:focus,[data-is="btn"] button:focus,btn button:active,[riot-tag="btn"] button:active,[data-is="btn"] button:active,btn button[data-active="yes"],[riot-tag="btn"] button[data-active="yes"],[data-is="btn"] button[data-active="yes"]{ color: #333; background-color: #e6e6e6; border-color: #adadad } btn button[data-option="primary"],[riot-tag="btn"] button[data-option="primary"],[data-is="btn"] button[data-option="primary"]{ color: #fff; background-color: #337ab7; border-color: #2e6da4 } btn button[data-option="primary"]:hover,[riot-tag="btn"] button[data-option="primary"]:hover,[data-is="btn"] button[data-option="primary"]:hover,btn button[data-option="primary"]:focus,[riot-tag="btn"] button[data-option="primary"]:focus,[data-is="btn"] button[data-option="primary"]:focus,btn button[data-option="primary"]:active,[riot-tag="btn"] button[data-option="primary"]:active,[data-is="btn"] button[data-option="primary"]:active{ color: #fff; background-color: #286090; border-color: #204d74 } btn button[data-option="success"],[riot-tag="btn"] button[data-option="success"],[data-is="btn"] button[data-option="success"]{ color: #fff; background-color: #5cb85c; border-color: #4cae4c } btn button[data-option="success"]:hover,[riot-tag="btn"] button[data-option="success"]:hover,[data-is="btn"] button[data-option="success"]:hover,btn button[data-option="success"]:focus,[riot-tag="btn"] button[data-option="success"]:focus,[data-is="btn"] button[data-option="success"]:focus,btn button[data-option="success"]:active,[riot-tag="btn"] button[data-option="success"]:active,[data-is="btn"] button[data-option="success"]:active{ color: #fff; background-color: #449d44; border-color: #398439 } btn button[data-option="info"],[riot-tag="btn"] button[data-option="info"],[data-is="btn"] button[data-option="info"]{ color: #fff; background-color: #5bc0de; border-color: #46b8da } btn button[data-option="info"]:hover,[riot-tag="btn"] button[data-option="info"]:hover,[data-is="btn"] button[data-option="info"]:hover,btn button[data-option="info"]:focus,[riot-tag="btn"] button[data-option="info"]:focus,[data-is="btn"] button[data-option="info"]:focus,btn button[data-option="info"]:active,[riot-tag="btn"] button[data-option="info"]:active,[data-is="btn"] button[data-option="info"]:active{ color: #fff; background-color: #31b0d5; border-color: #269abc } btn button[data-option="warning"],[riot-tag="btn"] button[data-option="warning"],[data-is="btn"] button[data-option="warning"]{ color: #fff; background-color: #f0ad4e; border-color: #f0ad4e } btn button[data-option="warning"]:hover,[riot-tag="btn"] button[data-option="warning"]:hover,[data-is="btn"] button[data-option="warning"]:hover,btn button[data-option="warning"]:focus,[riot-tag="btn"] button[data-option="warning"]:focus,[data-is="btn"] button[data-option="warning"]:focus,btn button[data-option="warning"]:active,[riot-tag="btn"] button[data-option="warning"]:active,[data-is="btn"] button[data-option="warning"]:active{ color: #fff; background-color: #ec971f; border-color: #d58512 } btn button[data-option="danger"],[riot-tag="btn"] button[data-option="danger"],[data-is="btn"] button[data-option="danger"]{ color: #fff; background-color: #d9534f; border-color: #d43f3a } btn button[data-option="danger"]:hover,[riot-tag="btn"] button[data-option="danger"]:hover,[data-is="btn"] button[data-option="danger"]:hover,btn button[data-option="danger"]:focus,[riot-tag="btn"] button[data-option="danger"]:focus,[data-is="btn"] button[data-option="danger"]:focus,btn button[data-option="danger"]:active,[riot-tag="btn"] button[data-option="danger"]:active,[data-is="btn"] button[data-option="danger"]:active{ color: #fff; background-color: #c9302c; border-color: #ac2925 } btn button[data-option="link"],[riot-tag="btn"] button[data-option="link"],[data-is="btn"] button[data-option="link"]{ font-weight: normal; color: #337ab7; border-radius: 0; background-color: transparent; border-color: transparent; box-shadow: none; } btn button[data-option="link"]:hover,[riot-tag="btn"] button[data-option="link"]:hover,[data-is="btn"] button[data-option="link"]:hover,btn button[data-option="link"]:focus,[riot-tag="btn"] button[data-option="link"]:focus,[data-is="btn"] button[data-option="link"]:focus{ color: #23527c; text-decoration: underline; } btn button[data-size="lg"],[riot-tag="btn"] button[data-size="lg"],[data-is="btn"] button[data-size="lg"]{ padding: 10px 16px; font-size: 18px; line-height: 1.3333333; border-radius: 6px; } btn button[data-size="sm"],[riot-tag="btn"] button[data-size="sm"],[data-is="btn"] button[data-size="sm"]{ padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; } btn button[data-size="xs"],[riot-tag="btn"] button[data-size="xs"],[data-is="btn"] button[data-size="xs"]{ padding: 1px 5px; font-size: 12px; line-height: 1.5; border-radius: 3px; }', '', function (opts) {
  var _this = this;

  this.mixin(parentScope).mixin(domEvent);
  this.disabled = undefined;
  var binded = opts.toggle || '';

  this.click = function (e) {
    e.stopPropagation();
    if (_this.disabled) return;
    if (_this.parent && binded) _this.parent.trigger('inner-btn-toggle');
    if (opts.href) {
      e.preventUpdate = true;
      location.href = opts.href;
      return;
    }
    _this.triggerDomEvent('click');
  };

  this.on('update', function (e) {
    _this.disabled = opts.hasOwnProperty('__disabled') ? opts.__disabled === true : opts.hasOwnProperty('disabled') ? opts.disabled === '' || opts.disabled === 'disabled' : false;
    _this.active = opts.hasOwnProperty('active') ? opts.active === '' || opts.active === 'active' || opts.active === true : false;
  });
});

var en = { "monthFormat": "%M %Y", "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "weekdays": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] };
var fr = { "monthFormat": "%M %Y", "months": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], "weekdays": ["L", "Ma", "Me", "J", "V", "S", "D"] };
var ja = { "monthFormat": "%Y年%M月", "months": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], "weekdays": ["日", "月", "火", "水", "木", "金", "土"] };
var zh = { "monthFormat": "%Y年%M月", "months": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], "weekdays": ["一", "二", "三", "四", "五", "六", "日"] };
var i18n = {
	en: en,
	fr: fr,
	ja: ja,
	zh: zh
};

riot.tag2('calendar', '<table> <thead> <tr> <th><btn onclick="{prev}">&laquo;</btn></th> <th colspan="5">{title}</th> <th><btn onclick="{next}">&raquo;</btn></th> </tr> </thead> <tbody> <tr><th each="{day in weekdays}">{day}</th></tr> <tr each="{week in calendar}"> <td each="{week}"><btn active="{selected}" __disabled="{!currentMonth}" onclick="{dayclick}">{daynum}</btn></td> </tr> </tbody> </table>', 'calendar,[riot-tag="calendar"],[data-is="calendar"]{ display: inline-block; vertical-align: top; padding: 3px; text-align: center; } calendar thead th,[riot-tag="calendar"] thead th,[data-is="calendar"] thead th{ font-size: 90%; } calendar tbody th,[riot-tag="calendar"] tbody th,[data-is="calendar"] tbody th{ padding: 6px 0; font-size: 90%; } calendar td,[riot-tag="calendar"] td,[data-is="calendar"] td{ text-align: center; padding: 1px; } calendar btn,[riot-tag="calendar"] btn,[data-is="calendar"] btn{ width: 100%; display: block; } calendar btn button,[riot-tag="calendar"] btn button,[data-is="calendar"] btn button{ color: #333; display: block; width: 100%; border: none; padding: 4px 5px; } calendar btn button:hover,[riot-tag="calendar"] btn button:hover,[data-is="calendar"] btn button:hover,calendar btn button:focus,[riot-tag="calendar"] btn button:focus,[data-is="calendar"] btn button:focus{ color: #000; text-decoration: none; background: #f7f7f7; } calendar btn button:disabled,[riot-tag="calendar"] btn button:disabled,[data-is="calendar"] btn button:disabled{ color: #bbb; } calendar btn button[data-active="yes"],[riot-tag="calendar"] btn button[data-active="yes"],[data-is="calendar"] btn button[data-active="yes"]{ box-shadow: none; background-color: #337ab7; color: white; }', '', function (opts) {
  var _this = this;

  this.mixin(parentScope).mixin(domEvent).mixin(syncEvent);

  var selected = typeof opts.value == 'string' ? opts.value.split(',') : opts.value || [];
  var firstDate = selected[0] ? new Date(selected[0]) : new Date(),
      getDayOf1st = function getDayOf1st(y, m) {
    return new Date(y, m, 1).getDay();
  },
      getNumOfDays = function getNumOfDays(y, m) {
    return new Date(y, m + 1, 0).getDate();
  },
      getDateString = function getDateString(y, m, d) {
    return y + '-' + (m < 9 ? '0' + (m + 1) : m + 1) + '-' + (d < 10 ? '0' + d : d);
  },
      isSelected = function isSelected(d) {
    return selected.some(function (day) {
      return d == day;
    });
  };

  this.calendar = [];
  this.lang = i18n[opts.lang] ? opts.lang : i18n[document.documentElement.lang] ? document.documentElement.lang : 'en';
  this.weekdays = i18n[this.lang].weekdays;
  this.currentYear = firstDate.getFullYear();
  this.currentMonth = firstDate.getMonth();
  this.title = '';
  this.multi = false;
  this.value = this.multi ? selected : selected[0];

  this.prev = function (e) {
    if (0 <= --_this.currentMonth) return;
    _this.currentMonth = 11;
    _this.currentYear--;
  };

  this.next = function (e) {
    if (++_this.currentMonth < 12) return;
    _this.currentMonth = 0;
    _this.currentYear++;
  };

  this.dayclick = function (e) {
    var d = getDateString(_this.currentYear, _this.currentMonth, e.item.daynum);
    if (!_this.multi) selected = [d];else if (isSelected(d)) selected = selected.filter(function (day) {
      return d != day;
    });else selected.push(d);
    _this.root.value = _this.value = _this.multi ? selected : selected[0];
    _this.update();
    _this.triggerDomEvent('change');
  };

  this.on('update', function () {
    _this.multi = opts.hasOwnProperty('multi') ? opts.multi === '' || opts.multi === 'multi' || opts.multi === true : false;
    _this.title = i18n[_this.lang].monthFormat.replace('%M', i18n[_this.lang].months[_this.currentMonth]).replace('%Y', _this.currentYear);

    var y = _this.currentYear,
        m = _this.currentMonth,
        d0 = getDayOf1st(y, m),
        dn = getNumOfDays(y, m),
        numberOfRows = Math.ceil((d0 + dn) / 7);

    var cal = [];
    for (var i = 0, w; i < numberOfRows; i++) {
      w = [];
      for (var j = 0, d, s; j < 7; j++) {
        d = new Date(y, m, 7 * i + j + 1 - d0);
        s = getDateString(d.getFullYear(), d.getMonth(), d.getDate());
        w.push({
          daynum: d.getDate(),
          selected: isSelected(s),
          currentMonth: d.getMonth() == m
        });
      }
      cal.push(w);
    }
    _this.calendar = cal;
  });
});

riot.tag2('caret', '', 'caret,[riot-tag="caret"],[data-is="caret"]{ display: inline-block; width: 0; height: 0; margin-left: 2px; vertical-align: middle; border-top: 4px dashed; border-right: 4px solid transparent; border-left: 4px solid transparent; }', '', function (opts) {});

riot.tag2('input-img', '<img riot-src="{value || opts.placeholder}" width="{opts.width || 100}" height="{opts.height || 100}"> <input if="{opts.name}" name="{opts.name}" type="hidden" value="{value}">', 'input-img { position: relative; display: inline-block; vertical-align: middle; padding: 4px; line-height: 1em; border: 1px solid #ccc; border-radius: 5px; overflow: hidden; } input-img.highlight { box-shadow: 0 0 5px #419bf9; } input-img > img { display: block; border-radius: 3px; }', '', function (opts) {
  var _this = this;

  this.mixin(parentScope).mixin(domEvent).mixin(syncEvent);

  var readerOnLoad = function readerOnLoad(e) {
    _this.root.value = _this.value = e.target.result;
    _this.triggerDomEvent('change');
    _this.skipSync();
    _this.update();
  },
      highlight = function highlight(e) {
    e.stopPropagation();
    e.preventDefault();
    _this.root.setAttribute('class', 'highlight');
  },
      dehightlight = function dehightlight(e) {
    _this.root.removeAttribute('class');
  },
      processFiles = function processFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dehightlight();
    var file = e.dataTransfer.files[0],
        reader = new FileReader();
    if (!file.type.match('image.*')) return;
    reader.onload = readerOnLoad;
    reader.readAsDataURL(file);
  };

  this.on('sync', function () {
    _this.value = opts.value || '';
  });
  if (isDroppable()) {
    this.on('mount', function () {
      _this.root.addEventListener('drop', processFiles, false);
      _this.root.addEventListener('dragover', highlight, false);
      _this.root.addEventListener('dragenter', highlight, false);
      _this.root.addEventListener('dragleave', dehightlight, false);
    });
  }

  function isDroppable() {
    return window.File && window.FileReader && window.FileList && window.Blob;
  }
});

riot.tag2('menu-divider', '', 'menu-divider,[riot-tag="menu-divider"],[data-is="menu-divider"]{ display: block; height: 1px; margin: 9px 0; overflow: hidden; background-color: #e5e5e5; }', '', function (opts) {});

riot.tag2('menu-header', '<yield></yield>', 'menu-header,[riot-tag="menu-header"],[data-is="menu-header"]{ display: block; padding: 3px 20px; font-size: 12px; line-height: 1.42857143; color: #777; white-space: nowrap; }', '', function (opts) {
    this.mixin(parentScope);
});

riot.tag2('menu-item', '<yield></yield>', 'menu-item { display: block; padding: 3px 20px; clear: both; font-weight: normal; line-height: 1.42857143; color: #333; white-space: nowrap; cursor: pointer; } menu-item:hover, menu-item:focus { color: #262626; text-decoration: none; background-color: #f5f5f5; }', '', function (opts) {
  var _this = this;

  this.mixin(parentScope).mixin(domEvent).mixin(syncEvent);

  var click = function click(e) {
    _this.root.value = opts.value || _this.root.innerText;
    _this.triggerDomEvent('menuItemClicked');
  };

  this.one('mount', function () {
    _this.root.addEventListener('touchstart', click, false);
    _this.root.addEventListener('click', click, false);
  }).one('unmount', function () {
    _this.root.removeEventListener('touchstart', click);
    _this.root.removeEventListener('click', click);
  });
});

riot.tag2('menu', '<yield></yield>', 'menu,[riot-tag="menu"],[data-is="menu"]{ position: absolute; top: 100%; left: 0; z-index: 1000; display: none; float: left; min-width: 160px; padding: 5px 0; margin: 2px 0 0; font-size: 14px; text-align: left; list-style: none; background-color: #fff; background-clip: padding-box; border: 1px solid #ccc; border: 1px solid rgba(0, 0, 0, .15); border-radius: 4px; box-shadow: 0 6px 12px rgba(0, 0, 0, .175); } menu[align="right"],[riot-tag="menu"][align="right"],[data-is="menu"][align="right"]{ left: auto; right: 0; }', '', function (opts) {
  var _this = this;

  this.mixin(parentScope).mixin(domEvent).mixin(syncEvent);

  var opened = false;

  var menuOpen = function menuOpen(e) {
    if (opened) return;
    opened = true;
    _this.root.style.display = 'block';
    setTimeout(function () {
      document.addEventListener('touchstart', menuClose, false);
      document.addEventListener('click', menuClose, false);
    }, 100);
  },
      menuClose = function menuClose(e) {
    opened = false;
    _this.root.style.display = 'none';
    document.removeEventListener('touchstart', menuClose);
    document.removeEventListener('click', menuClose);
  },
      itemSelect = function itemSelect(value) {
    _this.root.value = _this.value = value;
    _this.triggerDomEvent('select');
    menuClose();
  };

  this.on('mount', function () {
    var menuItems = _this.tags['menu-item'] || [];
    _this.root.addEventListener('change', function (e) {
      itemSelect(e.target.value);
    }, true);
    _this.root.addEventListener('menuItemClicked', function (e) {
      itemSelect(e.target.value);
    }, true);
  }).on('sync', function () {
    _this.value = opts.value;
  });

  if (this.parent) this.parent.on('inner-btn-toggle', menuOpen);
});

riot.tag2('radio-group', '<yield></yield>', 'radio-group,[riot-tag="radio-group"],[data-is="radio-group"]{ position: relative; display: inline-block; vertical-align: middle; } radio-group radio,[riot-tag="radio-group"] radio,[data-is="radio-group"] radio{ position: relative; float: left; } radio-group radio + radio,[riot-tag="radio-group"] radio + radio,[data-is="radio-group"] radio + radio{ margin-left: -1px; } radio-group radio[toggle]:not(:first-child) > *,[riot-tag="radio-group"] radio[toggle]:not(:first-child) > *,[data-is="radio-group"] radio[toggle]:not(:first-child) > *{ padding-right: 8px; padding-left: 8px; } radio-group > radio:hover,[riot-tag="radio-group"] > radio:hover,[data-is="radio-group"] > radio:hover,radio-group > radio:focus,[riot-tag="radio-group"] > radio:focus,[data-is="radio-group"] > radio:focus,radio-group > radio:active,[riot-tag="radio-group"] > radio:active,[data-is="radio-group"] > radio:active{ z-index: 2; } radio-group > radio:not(:first-child):not(:last-child):not([toggle]) > *,[riot-tag="radio-group"] > radio:not(:first-child):not(:last-child):not([toggle]) > *,[data-is="radio-group"] > radio:not(:first-child):not(:last-child):not([toggle]) > *{ border-radius: 0; } radio-group > radio:first-child,[riot-tag="radio-group"] > radio:first-child,[data-is="radio-group"] > radio:first-child{ margin-left: 0; } radio-group > radio:first-child:not(:last-child):not([toggle]) > *,[riot-tag="radio-group"] > radio:first-child:not(:last-child):not([toggle]) > *,[data-is="radio-group"] > radio:first-child:not(:last-child):not([toggle]) > *{ border-top-right-radius: 0; border-bottom-right-radius: 0; } radio-group > radio:last-child:not(:first-child) > *,[riot-tag="radio-group"] > radio:last-child:not(:first-child) > *,[data-is="radio-group"] > radio:last-child:not(:first-child) > *,radio-group > radio:not(:first-child)[toggle] > *,[riot-tag="radio-group"] > radio:not(:first-child)[toggle] > *,[data-is="radio-group"] > radio:not(:first-child)[toggle] > *{ border-top-left-radius: 0; border-bottom-left-radius: 0; }', '', function (opts) {
  var _this = this;

  this.mixin(parentScope).mixin(domEvent).mixin(syncEvent);

  var radioSelect = function radioSelect(value) {
    _this.root.value = _this.value = value;
    _this.skipSync();
    _this.update();
    _this.triggerDomEvent('change');
  };

  this.on('mount', function () {
    var radios = _this.tags['radio'] || [];
    radios.forEach(function (radio) {
      return radio.on('radioClicked', radioSelect);
    });
  }).on('sync', function () {
    _this.value = opts.value;
  });
});

riot.tag2('radio', '<button type="button" __disabled="{opts.disabled}" data-selected="{selected ? \'yes\' : \'no\'}" data-size="{opts.size}" onclick="{click}"><input type="radio" __checked="{selected}" onclick="{click}"> <yield></yield></button>', 'radio button,[riot-tag="radio"] button,[data-is="radio"] button{ display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: normal; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; background-image: none; border: 1px solid transparent; border-radius: 4px; } radio button:focus,[riot-tag="radio"] button:focus,[data-is="radio"] button:focus{ outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px; } radio button:hover,[riot-tag="radio"] button:hover,[data-is="radio"] button:hover,radio button:focus,[riot-tag="radio"] button:focus,[data-is="radio"] button:focus{ color: #333; text-decoration: none; } radio button:active,[riot-tag="radio"] button:active,[data-is="radio"] button:active{ background-image: none; outline: 0; box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125); } radio button[disabled],[riot-tag="radio"] button[disabled],[data-is="radio"] button[disabled]{ pointer-events: none; cursor: not-allowed; box-shadow: none; opacity: .65; } radio button,[riot-tag="radio"] button,[data-is="radio"] button{ color: #333; background-color: #fff; border-color: #ccc } radio button:hover,[riot-tag="radio"] button:hover,[data-is="radio"] button:hover,radio button:focus,[riot-tag="radio"] button:focus,[data-is="radio"] button:focus,radio button:active,[riot-tag="radio"] button:active,[data-is="radio"] button:active,radio button[data-selected="yes"],[riot-tag="radio"] button[data-selected="yes"],[data-is="radio"] button[data-selected="yes"]{ color: #333; background-color: #e6e6e6; border-color: #adadad } radio button[data-size="lg"],[riot-tag="radio"] button[data-size="lg"],[data-is="radio"] button[data-size="lg"]{ padding: 10px 16px; font-size: 18px; line-height: 1.3333333; border-radius: 6px; } radio button[data-size="sm"],[riot-tag="radio"] button[data-size="sm"],[data-is="radio"] button[data-size="sm"]{ padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; } radio button[data-size="xs"],[riot-tag="radio"] button[data-size="xs"],[data-is="radio"] button[data-size="xs"]{ padding: 1px 5px; font-size: 12px; line-height: 1.5; border-radius: 3px; }', '', function (opts) {
  var _this = this;

  this.mixin(parentScope);

  this.click = function (e) {
    e.stopPropagation();
    _this.selected = true;
    _this.trigger('radioClicked', opts.value || _this.root.innerText);
  };

  this.on('update', function () {
    _this.selected = opts.value == _this.parent.value;
  });
});