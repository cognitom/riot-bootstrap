import { parentScope } from 'riot-mixin-pack'

<btn-group>

  <yield/>

  <script>
    this.mixin(parentScope)
  </script>

  <style scoped>
    :scope {
      position: relative;
      display: inline-block;
      vertical-align: middle;
    }
    btn {
      position: relative;
      float: left;
    }
    btn + btn {
      margin-left: -1px;
    }
    btn[toggle]:not(:first-child) > * {
      padding-right: 8px;
      padding-left: 8px;
    }
    :scope > btn:hover,
    :scope > btn:focus,
    :scope > btn:active {
      z-index: 2;
    }
    :scope > btn:not(:first-child):not(:last-child):not([toggle]) > * {
      border-radius: 0;
    }
    :scope > btn:first-child {
      margin-left: 0;
    }
    :scope > btn:first-child:not(:last-child):not([toggle]) > * {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    :scope > btn:last-child:not(:first-child) > *,
    :scope > btn:not(:first-child)[toggle] > * {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  </style>

</btn-group>
