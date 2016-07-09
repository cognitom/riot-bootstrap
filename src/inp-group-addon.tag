import { parentScope } from 'riot-mixin-pack'

<inp-group-addon>

  <yield/>

  <script>
    this.mixin(parentScope)
  </script>

  <style scoped>
    :scope {
      position: relative;
      display: inline-block;

      padding: 6px 12px;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      color: #555;
      text-align: center;
      background-color: #eee;
      border: 1px solid #ccc;
    }
  </style>

</inp-group-addon>
