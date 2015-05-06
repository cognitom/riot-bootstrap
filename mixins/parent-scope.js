mixin.parentScope = {
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
