import { parentScope } from 'riot-mixin-pack'

<menu-header>

  <yield/>

  <script>
    this.mixin(parentScope)
  </script>

  <style scoped>
    :scope {
      display: block;
      padding: 3px 20px;
      font-size: 12px;
      line-height: 1.42857143;
      color: #777;
      white-space: nowrap;
    }
  </style>

</menu-header>
