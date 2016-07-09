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
      margin: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      color: #555;
      text-align: center;
      background-color: #eee;
      border: 1px solid #ccc;
    }

    :scope[size="lg"] {
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
    }
    :scope[size="sm"] {
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
    }
    :scope[size="xs"] {
      padding: 1px 5px;
      font-size: 12px;
      line-height: 1.5;
    }

    :scope:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    :scope:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    /**
     * Buttons
     */

    :scope:first-child btn button {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    :scope:last-child btn button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    :scope[size="lg"] btn button {
      padding: 10px 16px;
      margin: -11px -17px;
      vertical-align: inherit;
      font-size: 18px;
      line-height: 1.3333333;
    }

    btn button {
      padding: 6px 12px;
      margin: -7px -13px;
      vertical-align: inherit;
    }

    :scope[size="sm"] btn button {
      padding: 5px 10px;
      margin: -6px -11px;
      vertical-align: inherit;
      font-size: 12px;
      line-height: 1.5;
    }

    :scope[size="xs"] btn button {
      padding: 1px 5px;
      margin: -2px -6px;
      vertical-align: inherit;
      font-size: 12px;
      line-height: 1.5;
    }
  </style>

</inp-group-addon>
