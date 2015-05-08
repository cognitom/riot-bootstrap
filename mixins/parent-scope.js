/*!
 * Parent Scope mixin
 * A part of Riot Bootstrap
 * http://cognitom.github.io/riot-bootstrap/
 */
;(function(window, mixin) {

  var mixinName = 'parentScope'

  var riot = (!window || !window.riot) ? require('riot') : window.riot
  if (typeof exports === 'object') module.exports = mixin // CommonJS
  if (!riot.mixin) riot.mixin = {}
  riot.mixin[mixinName] = mixin // Register mixin to Riot.js

})(typeof window != 'undefined' ? window : undefined,

  {
    initProperties: function() {
      this._ownPropKeys = []
      this._ownOptsKeys = []
      for (var k in this) this._ownPropKeys[k] = true
      for (var k in this.opts) this._ownOptsKeys[k] = true
    },
    loadParentProperties: function() {
      for (var k in this.parent)
        if (!this._ownPropKeys[k]) this[k] = this.parent[k]
      for (var k in this.parent.opts)
        if (!this._ownOptsKeys[k]) this.opts[k] = this.parent.opts[k]
    },
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
  }

)
